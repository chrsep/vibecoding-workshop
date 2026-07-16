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
      <div class="font-serif font-semibold text-[1.9rem] leading-[1.1] tracking-[-0.01em] text-ink">Server menarik code-nya.</div>
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
