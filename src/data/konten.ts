import type { Berita, Fasilitas } from './types'

// PLACEHOLDER — konten demonstrasi. Ganti dengan berita resmi.

export const berita: Berita[] = [
  {
    id: 'demo-01',
    gambar: './academic-library.jpg',
    judul: '[Demo] Jadwal Kegiatan Akademik Semester Mendatang',
    ringkasan:
      'Konten demonstrasi. Ringkasan jadwal kegiatan akademik fakultas untuk semester mendatang.',
    isi: [
      'Konten ini adalah contoh demonstrasi dan bukan pengumuman resmi.',
      'Detail tanggal, agenda, dan lokasi akan diisi setelah informasi resmi diterbitkan oleh fakultas.',
    ],
    tanggal: '2026-01-01',
    kategori: 'Akademik',
    unggulan: true,
  },
  {
    id: 'demo-02',
    gambar: './engineering-workshop.jpg',
    judul: '[Demo] Kegiatan Seminar Teknologi dan Rekayasa',
    ringkasan:
      'Konten demonstrasi. Informasi kegiatan seminar bidang teknologi dan rekayasa.',
    isi: [
      'Konten demonstrasi. Peserta, pembicara, dan waktu kegiatan menunggu konfirmasi resmi.',
    ],
    tanggal: '2026-01-05',
    kategori: 'Kegiatan',
    unggulan: true,
  },
  {
    id: 'demo-03',
    gambar: './academic-library.jpg',
    judul: '[Demo] Pengumuman Layanan Akademik',
    ringkasan:
      'Konten demonstrasi. Informasi layanan akademik untuk mahasiswa Fakultas Teknik.',
    isi: [
      'Konten demonstrasi. Jam layanan dan prosedur resmi akan ditambahkan setelah diverifikasi.',
    ],
    tanggal: '2026-01-08',
    kategori: 'Pengumuman',
  },
  {
    id: 'demo-04',
    gambar: './computer-lab.jpg',
    judul: '[Demo] Prestasi Mahasiswa pada Kompetisi Teknik',
    ringkasan:
      'Konten demonstrasi. Uraian capaian mahasiswa pada kompetisi bidang teknik.',
    isi: [
      'Konten demonstrasi. Nama peserta, tim, dan peringkat menunggu data resmi.',
    ],
    tanggal: '2026-01-10',
    kategori: 'Prestasi',
  },
]

export const fasilitas: Fasilitas[] = [
  {
    id: 'lab-sipil',
    nama: 'Laboratorium Teknik Sipil',
    deskripsi: '[Deskripsi dan status resmi belum tersedia]',
    kategori: 'laboratorium',
    status: 'placeholder',
  },
  {
    id: 'lab-mesin',
    nama: 'Laboratorium & Bengkel Teknik Mesin',
    deskripsi: '[Deskripsi dan status resmi belum tersedia]',
    kategori: 'bengkel',
    status: 'placeholder',
  },
  {
    id: 'lab-komputer',
    nama: 'Laboratorium Komputer Teknik Informatika',
    deskripsi: '[Deskripsi dan status resmi belum tersedia]',
    kategori: 'laboratorium',
    status: 'placeholder',
  },
  {
    id: 'ruang-kelas',
    nama: 'Ruang Kuliah',
    deskripsi: '[Jumlah dan kondisi ruang kuliah belum diverifikasi]',
    kategori: 'pembelajaran',
    status: 'placeholder',
  },
  {
    id: 'perpustakaan',
    nama: 'Fasilitas Perpustakaan / Referensi',
    deskripsi: '[Ketersediaan belum diverifikasi]',
    kategori: 'umum',
    status: 'placeholder',
  },
  {
    id: 'kegiatan-mahasiswa',
    nama: 'Organisasi & Kegiatan Mahasiswa',
    deskripsi: '[Daftar organisasi resmi belum tersedia]',
    kategori: 'umum',
    status: 'placeholder',
  },
]

export const statistik = [
  { label: 'Program Studi', value: '3', catatan: 'Sipil, Mesin, Informatika' },
  { label: 'Dosen', value: '[—]', catatan: 'menunggu data resmi' },
  { label: 'Mahasiswa', value: '[—]', catatan: 'menunggu data resmi' },
  { label: 'Prestasi', value: '[—]', catatan: 'menunggu data resmi' },
]
