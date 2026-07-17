---
kicker: arsitektur
---

<div class="h-full flex flex-col pt-6">
  <Reveal :delay="100">
    <h1>Tools & arsitektur</h1>
  </Reveal>
  <Reveal :delay="600">
    <p class="mt-2 mb-0 max-w-[40rem]">Kenalan dulu dengan empat tools yang akan kita pakai di demo.</p>
  </Reveal>

  <div class="mt-auto mb-6 flex justify-center gap-8">
    <div class="w-[186px] text-center">
      <Reveal :delay="1100">
        <Rough shape="rect" :width="186" :height="176" color="#3a332a" fill="#eee7d6" fill-style="solid" :stroke-width="2.5" :delay="1150" :seed="2">
          <div class="flex flex-col items-center gap-2">
            <svg width="38" height="38" viewBox="0 0 24 24"><path fill="#3a332a" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            <div class="font-serif font-semibold text-[1.35rem] leading-none text-ink">GitHub</div>
            <div class="text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-ink-soft">code</div>
          </div>
        </Rough>
      </Reveal>
      <Reveal :delay="1300">
        <p class="mt-3 mb-0 text-[0.9rem] leading-snug text-ink-soft">Tempat menyimpan code.</p>
      </Reveal>
    </div>
    <div class="w-[186px] text-center">
      <Reveal :delay="1500">
        <Rough shape="rect" :width="186" :height="176" color="#3a332a" fill="#f8f4e9" fill-style="solid" :stroke-width="2.5" :delay="1550" :seed="5">
          <div class="flex flex-col items-center gap-2">
            <svg width="38" height="38" viewBox="0 0 24 24"><path fill="#3a332a" d="M12 2 L23 21 H1 Z" /></svg>
            <div class="font-serif font-semibold text-[1.35rem] leading-none text-ink">Vercel</div>
            <div class="text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-ink-soft">server</div>
          </div>
        </Rough>
      </Reveal>
      <Reveal :delay="1700">
        <p class="mt-3 mb-0 text-[0.9rem] leading-snug text-ink-soft">Server untuk menjalankan aplikasinya.</p>
      </Reveal>
    </div>
    <div class="w-[186px] text-center">
      <Reveal :delay="1900">
        <Rough shape="rect" :width="186" :height="176" color="#23795a" fill="#e8f4ec" fill-style="solid" :stroke-width="2.5" :delay="1950" :seed="7">
          <div class="flex flex-col items-center gap-2">
            <svg width="38" height="38" viewBox="0 0 24 24"><path fill="#23795a" d="M24 0V24l-9.365-8.045V24H0V0ZM2.942 21.087h8.751V9.563l9.365 8.204V2.919L2.942 2.914Z" /></svg>
            <div class="font-serif font-semibold text-[1.35rem] leading-none text-green-deep">Neon</div>
            <div class="text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-green-deep">database</div>
          </div>
        </Rough>
      </Reveal>
      <Reveal :delay="2100">
        <p class="mt-3 mb-0 text-[0.9rem] leading-snug text-ink-soft">Database untuk menyimpan data aplikasimu.</p>
      </Reveal>
    </div>
    <div class="w-[186px] text-center">
      <Reveal :delay="2300">
        <Rough shape="rect" :width="186" :height="176" color="#c25c3b" fill="#f4dcc8" fill-style="solid" :stroke-width="3" :delay="2350" :seed="9">
          <div class="flex flex-col items-center gap-2">
            <svg width="38" height="38" viewBox="0 0 24 24"><path fill="#c25c3b" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7226l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4801zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg>
            <div class="font-serif font-semibold text-[1.35rem] leading-none text-accent">Codex</div>
            <div class="text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-accent">ai agent</div>
          </div>
        </Rough>
      </Reveal>
      <Reveal :delay="2500">
        <p class="mt-3 mb-0 text-[0.9rem] leading-snug text-ink-soft">AI agent.</p>
      </Reveal>
    </div>
  </div>
</div>

<!--
Beat slide ini: kenalan dengan empat tools sebelum melihat bagaimana mereka terhubung di slide berikutnya.

- GitHub: tempat code disimpan, lengkap dengan riwayat setiap perubahan. Analogi: riwayat versi di Google Docs.
- Vercel: server yang mengambil code dari GitHub dan menjalankannya 24 jam sehari. Di sinilah aplikasi tinggal setelah deploy.
- Neon: database, ingatan aplikasi. Akun, catatan, dan skor disimpan di sini.
- Codex: AI agent yang menulis code-nya. Framing sesuai cue card: kita yang mengarahkan, Codex yang mengerjakan. Code-nya tetap ada, kita hanya tidak perlu menulisnya sendiri.
- Slide beranimasi otomatis: judul, pengantar, lalu empat kotak berurutan dari kiri. Kotak Codex sengaja terracotta: dialah yang akan kita arahkan sepanjang demo.
- Transisi ke slide berikutnya: sekarang kita lihat bagaimana empat pemain ini terhubung jadi satu mesin.
-->

---
kicker: arsitektur
---

<div class="h-full flex flex-col pt-6">
  <ArchFlow class="shrink-0" />
  <div class="relative mt-auto h-[7rem] max-w-[44rem] pb-1">
    <div v-click.hide="1" class="absolute inset-0">
      <div class="font-serif font-semibold text-[1.9rem] leading-[1.1] tracking-[-0.01em] text-ink">Semua berawal dari code.</div>
      <p class="mt-2 mb-0 max-w-[40rem]">Code aplikasimu disimpan di <b>GitHub</b>, lengkap dengan riwayat setiap perubahannya. Tapi code yang hanya disimpan belum menjadi aplikasi.</p>
    </div>
    <div v-click="[1, 2]" class="absolute inset-0">
      <div class="font-serif font-semibold text-[1.9rem] leading-[1.1] tracking-[-0.01em] text-ink">Server mengambil code-nya.</div>
      <p class="mt-2 mb-0 max-w-[40rem]"><b>Vercel</b> mengambil code terbaru dari GitHub, lalu menjalankannya 24 jam sehari. Di sinilah aplikasimu tinggal setelah deploy.</p>
    </div>
    <div v-click="[2, 3]" class="absolute inset-0">
      <div class="font-serif font-semibold text-[1.9rem] leading-[1.1] tracking-[-0.01em] text-ink">Server menarik data.</div>
      <p class="mt-2 mb-0 max-w-[40rem]">Aplikasi butuh ingatan. Akun, catatan, skor: semuanya disimpan di <b>database</b>, dan server mengambilnya setiap kali dibutuhkan.</p>
    </div>
    <div v-click="3" class="absolute inset-0">
      <div class="font-serif font-semibold text-[1.9rem] leading-[1.1] tracking-[-0.01em] text-ink">Hasilnya dikirim ke user.</div>
      <p class="mt-2 mb-0 max-w-[40rem]">Siapapun yang membuka alamat aplikasimu mendapat halaman yang sudah jadi. Perhatikan arah alirannya: <b>ini mesin yang akan kita rakit di demo</b>.</p>
    </div>
  </div>
</div>

<!--
Beat slide ini: satu diagram, empat pemain: GitHub, server (Vercel), database, dan user. Titik yang menyala menunjukkan arah aliran di setiap panah.

- Mulai: code aplikasimu disimpan di GitHub, seperti riwayat versi di Google Docs. Disimpan saja, belum ada yang berjalan.
- [klik] Server (Vercel) menarik code terbaru dari GitHub dan menjalankannya 24 jam sehari. Setiap kali code berubah, aplikasi yang live ikut terupdate. Proses ini yang disebut deploy.
- [klik] Aplikasi butuh ingatan. Server menarik data dari database, dan menyimpan data baru ke sana juga.
- [klik] User membuka alamat aplikasi, server mengirim halaman yang sudah jadi. Setelah klik ini ketiga aliran menyala bergantian: code masuk, data masuk, hasil keluar.
- Framing sesuai cue card: kita yang mengarahkan AI untuk merakit mesin ini, bukan sekadar klik "build me an app". Tetap di level arsitektur, jangan turun ke code.
-->
