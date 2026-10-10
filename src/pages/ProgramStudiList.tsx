import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { programStudi } from '../data/fakultas'

export default function ProgramStudiList() {
  return (
    <Section judul="Program Studi" subjudul="Program studi di lingkungan Fakultas Teknik Universitas Asahan." className="bg-grid">
      <div className="grid gap-6 md:grid-cols-3">
        {programStudi.map((p) => (
          <article key={p.id} className="flex flex-col rounded-xl border border-white/10 bg-navy-900 p-6">
            <h2 className="text-xl font-semibold text-white">{p.nama}</h2>
            <p className="mt-2 text-sm text-electric-300">{p.tagline}</p>
            <p className="mt-3 text-sm text-silver-400">{p.deskripsi}</p>
            <Link
              to={`/program-studi/${p.id}`}
              className="mt-auto pt-4 text-sm font-semibold text-electric-300 hover:text-electric-400"
            >
              Lihat detail →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
