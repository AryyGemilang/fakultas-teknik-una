# Fakultas Teknik — Universitas Asahan (Website)

Website resmi-style untuk **Fakultas Teknik Universitas Asahan (UNA)**. Bahasa utama antarmuka: Indonesia.

> **Penting:** Seluruh data institusional (nama pimpinan, dosen, NIDN/NIP, sejarah, visi/misi resmi, statistik, kontak) masih **PLACEHOLDER**. Jangan publikasikan sebelum diverifikasi. Lihat bagian *Data Resmi yang Dibutuhkan*.

## Teknologi

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router v7
- Lucide React (ikon)
- Carousel kustom (aksesibel: tombol prev/next, swipe sentuh, navigasi keyboard)

## Menjalankan

```bash
npm install
npm run dev        # server pengembangan
npm run build      # type-check + build produksi ke dist/
npm run preview    # pratinjau hasil build
npm run lint       # oxlint
npm test           # pemeriksaan data
```

## Struktur Proyek

```
src/
  components/
    CarouselDosen.tsx        # slider dosen (dipakai di homepage)
    layout/
      Layout.tsx             # kerangka + skip link
      Navbar.tsx             # navigasi + menu seluler
      Footer.tsx             # footer + kontak + tautan
    ui/
      Button.tsx             # tombol (link/aksi)
      Section.tsx            # wrapper section konsisten
      FotoOrang.tsx          # potret + fallback inisial
  data/
    types.ts                 # tipe data institusional
    fakultas.ts              # informasi fakultas + 3 program studi
    orang.ts                 # pimpinan + dataset dosen (ID stabil)
    konten.ts                # berita, fasilitas, statistik (demonstrasi)
    namaLengkap.ts           # util nama+gelar
  hooks/
    useSeo.ts                # judul dokumen per rute + scroll top
  pages/                     # Beranda, Profil, ProgramStudi(list/detail),
                             # Pimpinan, Dosen(list/detail), Berita(list/detail),
                             # Fasilitas, Kontak, NotFound
  App.tsx                    # definisi rute
  index.css                  # design tokens (warna, grid, animasi)
```

## Design Tokens

Didefinisikan di `src/index.css` via `@theme`:

- Warna: `navy-950/900/800/700/600`, `electric-500/400/300`, `silver-200/400`
- Latar blueprint: kelas `.bg-grid`
- Animasi masuk: `.animate-rise` (menghormati `prefers-reduced-motion`)

## Mengganti Konten Placeholder

Semua data terpusat di `src/data/` — jangan hardcode di komponen.

1. **Identitas fakultas** → `src/data/fakultas.ts` (`fakultas`): alamat, email, telepon, jam layanan, visi, misi, tujuan, sejarah, media sosial.
2. **Pimpinan & dosen** → `src/data/orang.ts`. Isi `nama`, `gelar`, `foto` (URL), `nidn`, `scholar`, dll. Kosongkan `nama` untuk memaksa tampilan placeholder.
   - ID stabil: `dosen-ts-01..`, `dosen-tm-01..`, `dosen-ti-01..`, `dekan`, `wakil-dekan`, `kaprodi-ts`, `kaprodi-tm`, `kaprodi-ti`.
   - Carousel homepage **memakai dataset dosen yang sama**, jadi tidak ada duplikasi konten.
3. **Program studi** → `src/data/fakultas.ts` (`programStudi`): deskripsi, bidang kajian, lab, proyek, karier, nama kaprodi.
4. **Berita & fasilitas** → `src/data/konten.ts`. Hapus label `[Demo]` setelah berita resmi tersedia.
5. **Kontak & peta** → `src/data/fakultas.ts` + `src/pages/Kontak.tsx` (ganti placeholder peta dengan `<iframe>` Google Maps setelah alamat resmi diverifikasi).
6. **Logo** → ganti `public/favicon.svg` dan ikon pada `Navbar.tsx`.

Untuk integrasi backend/CMS nanti: ganti isi `src/data/*.ts` dengan pemanggilan API yang mengembalikan tipe di `src/data/types.ts`. Komponen tidak perlu berubah.

## Catatan Integritas Konten

- Tidak ada nama, gelar, NIDN/NIP, statistik, atau biografi yang dikarang. Semua muncul sebagai placeholder eksplisit (mis. `[Nama Dosen]`, `[Riwayat Pendidikan]`).
- Statistik dosen/mahasiswa/prestasi ditandai `[—]` + "menunggu data resmi".
- Form kontak **hanya** memvalidasi input; belum mengirim pesan (tidak ada klaim pengiriman).
- Peta, media sosial, dan publikasi belum tersedia. Media sosial ditampilkan sebagai teks, bukan tautan kosong. Ganti dengan tautan setelah URL resmi diverifikasi.

## Foto ilustrasi dan publikasi

Foto lokal di `public/` berasal dari Unsplash: `photo-1486406146926-c627a92ad1ab` (arsitektur), `photo-1507842217343-583bb7270b66` (perpustakaan), `photo-1581092921461-eab62e97a780` (rekayasa), dan `photo-1516321318423-f06f85e504b3` (komputasi). Semua merupakan ilustrasi, bukan dokumentasi UNA. Ganti dengan foto resmi berizin sebelum publikasi institusional. Potret individu sengaja memakai placeholder.

Hosting memakai GitHub Pages: https://aryygemilang.github.io/fakultas-teknik-una/. Navigasi memakai HashRouter (`/#/program-studi`) agar halaman detail tetap dapat dibuka dan dimuat ulang tanpa konfigurasi server. Aset memakai path relatif untuk mendukung subfolder repositori. Setiap push ke `main` menjalankan lint, test, build, dan deployment otomatis melalui `.github/workflows/deploy.yml`. Pengaturan repository: Settings → Pages → Source: GitHub Actions.

Tidak ada backend atau dashboard admin. Form tidak menghapus draft dan hanya memvalidasi lokal. Integrasi CMS memerlukan pemuatan data, validasi respons, serta state loading/error sebelum mengganti sumber lokal.

## Aksesibilitas & UX

### Pemeriksaan browser

`scripts/browser-check.mjs` memeriksa 14 rute pada lebar 1440, 768, dan 390 piksel, menu seluler, filter dosen/berita, carousel (tombol, keyboard, event swipe), validasi formulir, tautan beranda, dan error JavaScript. Jalankan server pengembangan terlebih dahulu. Playwright merupakan alat pemeriksaan opsional, bukan dependensi aplikasi:

```bash
# Jika Playwright sudah tersedia pada lingkungan pengujian:
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs node scripts/browser-check.mjs
# SITE_URL dapat diatur untuk memeriksa server lain.
```

Pemeriksaan data `npm test` menggunakan dukungan TypeScript native Node.js 24. Build produksi juga menjalankan pemeriksaan tipe TypeScript.

- HTML semantik, `aria-label`, skip-link, `aria-live` pada hasil filter.
- Carousel dapat dioperasikan keyboard (fokus + ArrowLeft/ArrowRight) dan swipe di seluler.
- Fokus terlihat, kontras tinggi, animasi dinonaktifkan saat `prefers-reduced-motion`.
- Gambar memakai `loading="lazy"`.

## Data Resmi yang Dibutuhkan Sebelum Publikasi

1. Nama lengkap + gelar Dekan dan Wakil Dekan.
2. Nama lengkap + gelar Ketua Program Studi Teknik Sipil, Teknik Mesin, Teknik Informatika.
3. Data dosen: nama, gelar, jabatan akademik, NIDN/NIP (bila boleh dipublikasikan), riwayat pendidikan, minat riset, foto, tautan publikasi.
4. Visi, misi, dan tujuan resmi fakultas; sejarah dan tahun pendirian.
5. Deskripsi resmi tiap program studi + daftar laboratorium/bengkel yang benar-benar ada.
6. Statistik resmi: jumlah dosen, mahasiswa, dan prestasi.
7. Status akreditasi (jika akan ditampilkan).
8. Alamat resmi, email resmi, nomor telepon, jam layanan, titik lokasi peta.
9. URL resmi media sosial.
10. Berita/pengumuman resmi untuk menggantikan konten demonstrasi.
