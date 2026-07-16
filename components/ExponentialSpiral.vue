<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const props = defineProps({
  scale: { type: Number, default: 1.28 },
  speed: { type: Number, default: 1 },
  staticTime: { type: Number, default: 37.25 },
  maxDpr: { type: Number, default: 2.5 },
})

const rootEl = ref(null)
const canvasEl = ref(null)
const { $renderContext } = useSlideContext()
const { isPrintMode } = useNav()

const isCurrentSlide = useIsSlideActive()
const isLiveContext = computed(() =>
  ['slide', 'presenter'].includes($renderContext.value) && !isPrintMode.value,
)

const vertexSource = `#version 300 es
  precision highp float;
  precision highp int;

  uniform float u_time;
  uniform float u_aspect;
  uniform float u_dpr;
  uniform float u_arm;
  uniform float u_scale;
  uniform int u_mode;

  out float v_alpha;
  out float v_tone;
  flat out float v_seed;

  const float TAU = 6.28318530718;

  float hash(float n) {
    return fract(sin(n * 127.1 + 311.7) * 43758.5453123);
  }

  vec2 toClip(vec2 point) {
    float fit = min(1.0, u_aspect);
    return vec2(point.x * fit / u_aspect, point.y * fit);
  }

  void main() {
    float id = float(gl_VertexID);
    float radius;
    float angle;
    float alpha;
    float tone;

    if (u_mode == 1) {
      float along = id / 319.0;
      radius = 0.225 + 0.92 * pow(along, 1.08);
      angle = u_arm * (TAU / 5.0)
        + 8.35 * log(radius / 0.225)
        + u_time * 0.042
        + 0.018 * sin(u_time * 0.17 + along * 19.0 + u_arm);
      alpha = 0.15 * smoothstep(0.0, 0.055, along)
        * (1.0 - smoothstep(0.91, 1.0, along));
      tone = 0.42 + 0.18 * hash(u_arm + 3.0);
      gl_PointSize = 1.0;
    }
    else {
      float generation = floor(log2(id + 1.0));
      float first = exp2(generation) - 1.0;
      float local = id - first;
      float count = exp2(generation);
      float arm = mod(local, 5.0);
      float perArm = ceil(count / 5.0);
      float along = clamp((floor(local / 5.0) + 0.5) / perArm, 0.0, 1.0);
      float generationN = generation / 10.0;

      radius = 0.225 + 0.92
        * pow((generation + 0.16 + 0.72 * along) / 10.88, 1.23);
      angle = arm * (TAU / 5.0)
        + 8.35 * log(radius / 0.225)
        + generation * 0.067
        + u_time * (0.037 + generationN * 0.018)
        + 0.025 * sin(u_time * 0.21 + id * 0.071);

      float multiplicationWave = pow(
        0.5 + 0.5 * cos(generation * 0.79 - u_time * 0.49),
        7.0
      );
      alpha = mix(0.48, 0.22, generationN)
        * (0.72 + 0.46 * multiplicationWave)
        * (0.86 + 0.14 * sin(id * 1.73 + u_time * 0.12));
      tone = hash(id * 0.73 + generation * 11.0);
      gl_PointSize = mix(5.2, 1.8, generationN)
        * (0.82 + 0.44 * hash(id + 19.0))
        * u_dpr;
    }

    vec2 point = vec2(cos(angle), sin(angle)) * radius * u_scale;
    point += 0.008 * vec2(
      sin(id * 0.43 + u_time * 0.09),
      cos(id * 0.37 - u_time * 0.08)
    );

    vec2 clip = toClip(point);
    float quietDistance = length(vec2(clip.x / 0.55, clip.y / 0.33));
    float quietMask = smoothstep(0.52, 1.68, quietDistance);
    float edge = max(abs(clip.x), abs(clip.y));
    float edgeMask = 1.0 - smoothstep(0.84, 1.04, edge);

    v_alpha = alpha * quietMask * edgeMask;
    v_tone = tone;
    v_seed = hash(id + u_arm * 97.0);
    gl_Position = vec4(clip, 0.0, 1.0);
  }
`

const fragmentSource = `#version 300 es
  precision highp float;
  precision highp int;

  uniform int u_mode;

  in float v_alpha;
  in float v_tone;
  flat in float v_seed;

  out vec4 outColor;

  void main() {
    float coverage = 1.0;

    if (u_mode == 0) {
      vec2 point = gl_PointCoord * 2.0 - 1.0;
      float wobble = 0.045 * sin(
        atan(point.y, point.x) * 5.0 + v_seed * 17.0
      );
      coverage = 1.0 - smoothstep(0.69, 1.0, length(point) + wobble);
      if (coverage <= 0.0) discard;
    }

    vec3 ink = vec3(0.2275, 0.2000, 0.1647);
    vec3 inkSoft = vec3(0.4078, 0.3725, 0.3216);
    vec3 connector = vec3(0.5804, 0.5373, 0.4784);
    vec3 color = mix(connector, inkSoft, smoothstep(0.22, 0.88, v_tone));
    color = mix(color, ink, 0.08 * smoothstep(0.88, 1.0, v_tone));

    outColor = vec4(color, v_alpha * coverage);
  }
`

let gl = null
let program = null
let uniforms = null
let frame = 0
let resizeFrame = 0
let elapsed = 0
let previousTime = 0
let dpr = 1
let resizeObserver = null
let reduceMotion = null
let mounted = false
let maxCanvasSize = 8192

function compile(type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'Unknown shader error'
    gl.deleteShader(shader)
    throw new Error(message)
  }

  return shader
}

function createProgram() {
  const vertex = compile(gl.VERTEX_SHADER, vertexSource)
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource)
  const nextProgram = gl.createProgram()

  gl.attachShader(nextProgram, vertex)
  gl.attachShader(nextProgram, fragment)
  gl.linkProgram(nextProgram)
  gl.deleteShader(vertex)
  gl.deleteShader(fragment)

  if (!gl.getProgramParameter(nextProgram, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(nextProgram) || 'Unknown program error'
    gl.deleteProgram(nextProgram)
    throw new Error(message)
  }

  return nextProgram
}

function initializeRenderer() {
  const canvas = canvasEl.value
  if (!canvas)
    return false

  gl = canvas.getContext('webgl2', {
    alpha: true,
    antialias: true,
    depth: false,
    stencil: false,
    premultipliedAlpha: true,
    preserveDrawingBuffer: !isLiveContext.value,
    powerPreference: 'high-performance',
  })

  if (!gl)
    return false

  try {
    program = createProgram()
  }
  catch (error) {
    console.error('Exponential spiral could not start.', error)
    program = null
    return false
  }

  uniforms = {
    time: gl.getUniformLocation(program, 'u_time'),
    aspect: gl.getUniformLocation(program, 'u_aspect'),
    dpr: gl.getUniformLocation(program, 'u_dpr'),
    arm: gl.getUniformLocation(program, 'u_arm'),
    scale: gl.getUniformLocation(program, 'u_scale'),
    mode: gl.getUniformLocation(program, 'u_mode'),
  }

  gl.useProgram(program)
  gl.clearColor(0, 0, 0, 0)
  gl.enable(gl.BLEND)
  gl.blendFuncSeparate(
    gl.SRC_ALPHA,
    gl.ONE_MINUS_SRC_ALPHA,
    gl.ONE,
    gl.ONE_MINUS_SRC_ALPHA,
  )
  gl.disable(gl.DEPTH_TEST)

  const viewportLimits = gl.getParameter(gl.MAX_VIEWPORT_DIMS)
  maxCanvasSize = Math.min(8192, viewportLimits[0], viewportLimits[1])
  return true
}

function resize() {
  if (!gl || !rootEl.value || !canvasEl.value)
    return

  const logicalWidth = Math.max(1, rootEl.value.clientWidth)
  const logicalHeight = Math.max(1, rootEl.value.clientHeight)
  const bounds = rootEl.value.getBoundingClientRect()
  const displayWidth = bounds.width > 1 ? bounds.width : logicalWidth
  const displayHeight = bounds.height > 1 ? bounds.height : logicalHeight
  const deviceScale = Math.min(window.devicePixelRatio || 1, props.maxDpr)

  let width = Math.max(1, Math.round(displayWidth * deviceScale))
  let height = Math.max(1, Math.round(displayHeight * deviceScale))
  const limitScale = Math.min(1, maxCanvasSize / width, maxCanvasSize / height)

  width = Math.max(1, Math.round(width * limitScale))
  height = Math.max(1, Math.round(height * limitScale))
  dpr = Math.min(width / logicalWidth, height / logicalHeight)

  if (canvasEl.value.width === width && canvasEl.value.height === height)
    return

  canvasEl.value.width = width
  canvasEl.value.height = height
  gl.viewport(0, 0, width, height)
}

function draw(time) {
  if (!gl || !program || !uniforms || !canvasEl.value)
    return

  resize()
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.useProgram(program)
  gl.uniform1f(uniforms.time, time)
  gl.uniform1f(uniforms.aspect, canvasEl.value.width / canvasEl.value.height)
  gl.uniform1f(uniforms.dpr, dpr)
  gl.uniform1f(uniforms.scale, props.scale)

  gl.uniform1i(uniforms.mode, 1)
  for (let arm = 0; arm < 5; arm += 1) {
    gl.uniform1f(uniforms.arm, arm)
    gl.drawArrays(gl.LINE_STRIP, 0, 320)
  }

  gl.uniform1i(uniforms.mode, 0)
  gl.uniform1f(uniforms.arm, 0)
  gl.drawArrays(gl.POINTS, 0, 2047)
}

function drawStatic() {
  draw(props.staticTime)
  gl?.finish()
}

function stop() {
  if (frame)
    cancelAnimationFrame(frame)
  frame = 0
}

function tick(now) {
  if (
    !isCurrentSlide.value
    || !isLiveContext.value
    || reduceMotion?.matches
    || document.hidden
  ) {
    frame = 0
    return
  }

  const delta = Math.min(50, now - previousTime) / 1000
  previousTime = now
  elapsed += delta
  draw(elapsed * props.speed)
  frame = requestAnimationFrame(tick)
}

function syncPlayback() {
  if (!mounted || !program)
    return

  stop()

  if (!isLiveContext.value || reduceMotion?.matches) {
    drawStatic()
    return
  }

  if (!isCurrentSlide.value || document.hidden)
    return

  previousTime = performance.now()
  frame = requestAnimationFrame(tick)
}

function handleResize() {
  if (!mounted || resizeFrame)
    return

  resizeFrame = requestAnimationFrame(() => {
    resizeFrame = 0

    if (!isLiveContext.value || reduceMotion?.matches)
      drawStatic()
    else if (isCurrentSlide.value)
      draw(elapsed * props.speed)
  })
}

function handleContextLost(event) {
  event.preventDefault()
  stop()
  program = null
  uniforms = null
}

function handleContextRestored() {
  if (initializeRenderer())
    syncPlayback()
}

watch([isCurrentSlide, isLiveContext], syncPlayback)
watch(
  () => [props.scale, props.speed, props.staticTime, props.maxDpr],
  () => {
    if (!isLiveContext.value || reduceMotion?.matches)
      drawStatic()
    else if (isCurrentSlide.value)
      draw(elapsed * props.speed)
  },
)

onMounted(() => {
  mounted = true
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  canvasEl.value?.addEventListener('webglcontextlost', handleContextLost)
  canvasEl.value?.addEventListener('webglcontextrestored', handleContextRestored)
  document.addEventListener('visibilitychange', syncPlayback)
  document.addEventListener('fullscreenchange', handleResize)
  reduceMotion.addEventListener('change', syncPlayback)
  window.addEventListener('resize', handleResize, { passive: true })
  window.visualViewport?.addEventListener('resize', handleResize, { passive: true })

  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(rootEl.value)
  }

  if (initializeRenderer())
    syncPlayback()
})

onBeforeUnmount(() => {
  mounted = false
  stop()

  if (resizeFrame)
    cancelAnimationFrame(resizeFrame)

  resizeObserver?.disconnect()

  document.removeEventListener('visibilitychange', syncPlayback)
  document.removeEventListener('fullscreenchange', handleResize)
  reduceMotion?.removeEventListener('change', syncPlayback)
  window.removeEventListener('resize', handleResize)
  window.visualViewport?.removeEventListener('resize', handleResize)
  canvasEl.value?.removeEventListener('webglcontextlost', handleContextLost)
  canvasEl.value?.removeEventListener('webglcontextrestored', handleContextRestored)

  if (gl && program)
    gl.deleteProgram(program)

  if (canvasEl.value) {
    canvasEl.value.width = 1
    canvasEl.value.height = 1
  }

  gl = null
  program = null
  uniforms = null
})
</script>

<template>
  <div
    ref="rootEl"
    class="exponential-spiral"
    aria-hidden="true"
  >
    <canvas ref="canvasEl" />
  </div>
</template>

<style scoped>
.exponential-spiral {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
