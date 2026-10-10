import type { Orang } from './types'

/** Gabungkan nama + gelar; placeholder bila nama belum tersedia. */
export function namaLengkap(o: Orang): string {
  if (!o.nama) return o.id === 'dekan' ? '[Nama Dekan]' : o.id === 'wakil-dekan' ? '[Nama Wakil Dekan]' : o.id.startsWith('kaprodi-') ? '[Nama Ketua Program Studi]' : '[Nama Dosen]'
  return o.gelar ? `${o.nama}, ${o.gelar}` : o.nama
}
