import { useParams, Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { programStudi } from '../data/fakultas'
import { dosen } from '../data/orang'
import { namaLengkap } from '../data/namaLengkap'

export default function ProgramStudiDetail() {
  const { id } = useParams()
  const p = programStudi.find((x) => x.id === id)

  if (!p) {
    return (
      <Section judul="Program studi tidak ditemukan">
        <p className="text-silver-400">
          Program studi yang Anda cari tidak tersedia.{' '}
          <Link to="/program-studi" className="text-electric-300">Kembali ke daftar program studi.</Link>
        </p>
      </Section>
    )
  }

  const dosenProdi = dosen.filter((d) => d.program === p.id)

  return (
    <>
      <Section judul={p.nama} subjudul={p.tagline} className="bg-grid">
        <p className="max-w-3xl text-silver-300">{p.deskripsi}</p>
      </Section>

      <Section judul="Bidang Kajian" subjudul="Area keilmuan umum; ketersediaan spesialisasi resmi menunggu kurikulum.">
        <ul className="flex flex-wrap gap-2">
          {p.bidangKajian.map((b) => (
            <li key={b} className="rounded-full border border-electric-500/40 bg-electric-500/10 px-3 py-1 text-sm text-electric-300">
              {b}
            </li>
          ))}
        </ul>
      </Section>

      <Section judul="Laboratorium & Pembelajaran Praktik" className="bg-navy-900/40">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.lab.map((l) => (
            <div key={l.nama} className="rounded-lg border border-white/10 bg-navy-900 p-4">
              <h3 className="font-medium text-white">{l.nama}</h3>
              <p className="mt-1 text-sm text-silver-400">{l.deskripsi}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section judul="Proyek & Prestasi Mahasiswa">
        <ul className="space-y-2 text-silver-300">
          {p.proyek.map((pr, i) => (
            <li key={i} className="rounded-lg border border-dashed border-white/15 bg-navy-900 p-4">{pr}</li>
          ))}
        </ul>
      </Section>

      <Section judul="Peluang Karier" className="bg-navy-900/40">
        <ul className="grid gap-3 sm:grid-cols-2">
          {p.karier.map((k) => (
            <li key={k} className="rounded-lg border border-white/10 bg-navy-900 p-4 text-silver-300">{k}</li>
          ))}
        </ul>
      </Section>

      <Section judul="Pimpinan & Dosen Program Studi">
        <p className="text-silver-400">Ketua Program Studi: <span className="text-white">{p.ketuaProdi}</span></p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dosenProdi.map((d) => (
            <li key={d.id} className="rounded-lg border border-white/10 bg-navy-900 p-4">
              <Link to={`/dosen/${d.id}`} className="font-medium text-white hover:text-electric-300">
                {namaLengkap(d)}
              </Link>
              <p className="text-sm text-silver-400">{d.jabatan}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
