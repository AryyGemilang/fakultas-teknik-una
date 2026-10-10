import type { Fakultas, Program } from './types'

// ============================================================
// SEMUA DATA DI BAWAH INI ADALAH PLACEHOLDER.
// Ganti dengan data resmi fakultas sebelum publikasi.
// Jangan pernah mengisi identitas/statistik tanpa verifikasi.
// ============================================================

export const fakultas: Fakultas = {
  nama: 'Fakultas Teknik',
  universitas: 'Universitas Asahan',
  visi:
    '[Visi resmi Fakultas Teknik belum tersedia. Isi bagian ini dengan dokumen resmi fakultas.]',
  misi: [
    '[Misi pendidikan resmi belum tersedia]',
    '[Misi penelitian resmi belum tersedia]',
    '[Misi pengabdian masyarakat resmi belum tersedia]',
  ],
  tujuan: [
    '[Tujuan resmi Fakultas Teknik belum tersedia]',
  ],
  sejarah: [
    '[Sejarah resmi Fakultas Teknik Universitas Asahan belum diverifikasi. Bagian ini disediakan sebagai placeholder.]',
    'Fakultas Teknik Universitas Asahan menaungi tiga program studi: Teknik Sipil, Teknik Mesin, dan Teknik Informatika. Uraian sejarah, tahun pendirian, dan perkembangan institusi akan ditambahkan setelah data resmi tersedia.',
  ],
  alamat: '[Alamat resmi Fakultas Teknik Universitas Asahan belum tersedia]',
  email: '[email@resmi.fakultas.belum-tersedia]',
  telepon: '[(000) 000-0000]',
  jamLayanan: 'Senin–Jumat, [00.00]–[00.00] WIB (placeholder)',
  mediaSosial: [
    { label: 'Facebook', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'YouTube', url: '#' },
  ],
}

export const programStudi: Program[] = [
  {
    id: 'teknik-sipil',
    nama: 'Teknik Sipil',
    singkatan: 'TS',
    tagline: 'Membangun infrastruktur yang aman dan berkelanjutan.',
    deskripsi:
      'Program Studi Teknik Sipil mempelajari perencanaan, perancangan, pembangunan, dan pemeliharaan infrastruktur seperti gedung, jalan, jembatan, dan bangunan air. [Deskripsi resmi program studi belum tersedia — uraian ini bersifat umum.]',
    bidangKajian: [
      'Struktur',
      'Geoteknik',
      'Transportasi',
      'Sumber Daya Air',
      'Manajemen Konstruksi',
    ],
    lab: [
      { nama: 'Laboratorium Struktur', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Geoteknik', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Transportasi', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Hidrologi / Sumber Daya Air', deskripsi: '[Deskripsi resmi belum tersedia]' },
    ],
    proyek: [
      '[Contoh proyek mahasiswa menunggu data resmi]',
      '[Prestasi mahasiswa menunggu data resmi]',
    ],
    karier: [
      'Konsultan perencana dan pengawas konstruksi',
      'Kontraktor dan pelaksana proyek',
      'Aparatur sipil negara pada bidang pekerjaan umum',
      'Staf pengelola infrastruktur',
    ],
    ketuaProdi: '[Nama Ketua Program Studi Teknik Sipil]',
    jumlahDosen: '[jumlah belum terverifikasi]',
  },
  {
    id: 'teknik-mesin',
    nama: 'Teknik Mesin',
    singkatan: 'TM',
    tagline: 'Merancang dan memproduksi mesin untuk industri.',
    deskripsi:
      'Program Studi Teknik Mesin mempelajari perancangan, manufaktur, material, termodinamika, dan pemeliharaan sistem mekanik untuk mendukung industri manufaktur dan energi. [Deskripsi resmi belum tersedia — uraian ini bersifat umum.]',
    bidangKajian: [
      'Perancangan Mesin',
      'Manufaktur',
      'Material Teknik',
      'Termodinamika & Konversi Energi',
      'Pemeliharaan & Perawatan',
    ],
    lab: [
      { nama: 'Bengkel Manufaktur / Perkakas', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Material', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Termodinamika', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Fenomena Dasar Mesin', deskripsi: '[Deskripsi resmi belum tersedia]' },
    ],
    proyek: [
      '[Contoh proyek mahasiswa menunggu data resmi]',
      '[Prestasi mahasiswa menunggu data resmi]',
    ],
    karier: [
      'Engineer perancangan dan manufaktur',
      'Maintenance & reliability engineer',
      'Quality control / assurance industri',
      'Teknisi dan supervisor produksi',
    ],
    ketuaProdi: '[Nama Ketua Program Studi Teknik Mesin]',
    jumlahDosen: '[jumlah belum terverifikasi]',
  },
  {
    id: 'teknik-informatika',
    nama: 'Teknik Informatika',
    singkatan: 'TI',
    tagline: 'Mengembangkan solusi perangkat lunak dan sistem cerdas.',
    deskripsi:
      'Program Studi Teknik Informatika mempelajari rekayasa perangkat lunak, pemrograman, basis data, jaringan komputer, keamanan siber, dan kecerdasan artifisial. [Deskripsi resmi belum tersedia — uraian ini bersifat umum.]',
    bidangKajian: [
      'Rekayasa Perangkat Lunak',
      'Pemrograman',
      'Basis Data',
      'Jaringan Komputer',
      'Keamanan Siber',
      'Kecerdasan Artifisial',
    ],
    lab: [
      { nama: 'Laboratorium Komputer / Pemrograman', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Jaringan & Keamanan', deskripsi: '[Deskripsi resmi belum tersedia]' },
      { nama: 'Laboratorium Basis Data', deskripsi: '[Deskripsi resmi belum tersedia]' },
    ],
    proyek: [
      '[Contoh proyek mahasiswa menunggu data resmi]',
      '[Prestasi mahasiswa menunggu data resmi]',
    ],
    karier: [
      'Software developer / engineer',
      'Database administrator',
      'Network & security engineer',
      'Data / AI engineer',
    ],
    ketuaProdi: '[Nama Ketua Program Studi Teknik Informatika]',
    jumlahDosen: '[jumlah belum terverifikasi]',
  },
]
