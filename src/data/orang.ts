import type { Orang } from './types'

// ============================================================
// PLACEHOLDER PIMPINAN & DOSEN.
// JANGAN mengisi nama, gelar, NIDN/NIP, atau biografi tanpa data resmi.
// Semua field identitas sengaja dibiarkan kosong agar ditampilkan
// sebagai placeholder oleh komponen UI.
// ============================================================

export const pimpinan: Orang[] = [
  {
    id: 'dekan',
    nama: '',
    gelar: '',
    jabatan: 'Dekan Fakultas Teknik',
    program: 'fakultas',
    riwayatPendidikan: '[Riwayat Pendidikan]',
    pengalaman: '[Pengalaman Akademik dan Profesional]',
    minatRiset: ['[Minat riset belum tersedia]'],
    biografi: '[Biografi singkat belum tersedia]',
  },
  {
    id: 'wakil-dekan',
    nama: '',
    gelar: '',
    jabatan: 'Wakil Dekan Fakultas Teknik',
    program: 'fakultas',
    riwayatPendidikan: '[Riwayat Pendidikan]',
    pengalaman: '[Pengalaman Akademik dan Profesional]',
    minatRiset: ['[Minat riset belum tersedia]'],
    biografi: '[Biografi singkat belum tersedia]',
  },
  {
    id: 'kaprodi-ts',
    nama: '',
    gelar: '',
    jabatan: 'Ketua Program Studi Teknik Sipil',
    program: 'teknik-sipil',
    riwayatPendidikan: '[Riwayat Pendidikan]',
    pengalaman: '[Pengalaman Akademik dan Profesional]',
    minatRiset: ['[Minat riset belum tersedia]'],
    biografi: '[Biografi singkat belum tersedia]',
  },
  {
    id: 'kaprodi-tm',
    nama: '',
    gelar: '',
    jabatan: 'Ketua Program Studi Teknik Mesin',
    program: 'teknik-mesin',
    riwayatPendidikan: '[Riwayat Pendidikan]',
    pengalaman: '[Pengalaman Akademik dan Profesional]',
    minatRiset: ['[Minat riset belum tersedia]'],
    biografi: '[Biografi singkat belum tersedia]',
  },
  {
    id: 'kaprodi-ti',
    nama: '',
    gelar: '',
    jabatan: 'Ketua Program Studi Teknik Informatika',
    program: 'teknik-informatika',
    riwayatPendidikan: '[Riwayat Pendidikan]',
    pengalaman: '[Pengalaman Akademik dan Profesional]',
    minatRiset: ['[Minat riset belum tersedia]'],
    biografi: '[Biografi singkat belum tersedia]',
  },
]

// Dataset dosen. ID stabil: dosen-ts-01, dosen-tm-01, dosen-ti-01, dst.
// Kosongkan nama/gelar sampai data resmi tersedia.
const buatDosen = (
  program: Orang['program'],
  jumlah: number,
): Orang[] =>
  Array.from({ length: jumlah }, (_, i) => {
    const kode = program === 'teknik-sipil' ? 'ts' : program === 'teknik-mesin' ? 'tm' : 'ti'
    return {
      id: `dosen-${kode}-${String(i + 1).padStart(2, '0')}`,
      nama: '',
      gelar: '',
      jabatan: '[Jabatan Akademik]',
      program,
      riwayatPendidikan: '[Riwayat Pendidikan]',
      pengalaman: '[Pengalaman]',
      minatRiset: ['[Bidang keahlian belum tersedia]'],
      biografi: '[Biografi singkat belum tersedia]',
    }
  })

export const dosen: Orang[] = [
  ...buatDosen('teknik-sipil', 6),
  ...buatDosen('teknik-mesin', 6),
  ...buatDosen('teknik-informatika', 6),
]

export const semuaOrang: Orang[] = [...pimpinan, ...dosen]

export const cariOrang = (id: string): Orang | undefined =>
  semuaOrang.find((o) => o.id === id)
