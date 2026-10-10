export type ProgramId = 'teknik-sipil' | 'teknik-mesin' | 'teknik-informatika'

export interface Program {
  id: ProgramId
  nama: string
  singkatan: string
  tagline: string
  deskripsi: string
  bidangKajian: string[]
  lab: { nama: string; deskripsi: string }[]
  proyek: string[]
  karier: string[]
  ketuaProdi: string
  jumlahDosen: string
}

export interface Orang {
  id: string
  nama: string // kosongkan bila belum resmi -> tampil placeholder
  gelar: string
  jabatan: string
  program: ProgramId | 'fakultas'
  foto?: string
  riwayatPendidikan: string
  pengalaman: string
  minatRiset: string[]
  biografi: string
  nidn?: string
  scholar?: string
}

export interface Berita {
  id: string
  judul: string
  ringkasan: string
  isi: string[]
  tanggal: string
  kategori: string
  gambar?: string
  unggulan?: boolean
}

export interface Fasilitas {
  id: string
  nama: string
  deskripsi: string
  kategori: 'laboratorium' | 'bengkel' | 'pembelajaran' | 'umum'
  status: 'terverifikasi' | 'placeholder'
}

export interface Fakultas {
  nama: string
  universitas: string
  visi: string
  misi: string[]
  tujuan: string[]
  sejarah: string[]
  alamat: string
  email: string
  telepon: string
  jamLayanan: string
  mediaSosial: { label: string; url: string }[]
}
