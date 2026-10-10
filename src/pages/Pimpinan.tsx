import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import FotoOrang from '../components/ui/FotoOrang'
import { namaLengkap } from '../data/namaLengkap'
import { pimpinan } from '../data/orang'

export default function Pimpinan() {
  return (
    <Section judul="Pimpinan Fakultas Teknik" subjudul="Profil pimpinan. Identitas menunggu data resmi." className="bg-grid">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pimpinan.map((o) => (
          <article key={o.id} className="rounded-xl border border-white/10 bg-navy-900 p-5">
            <div className="aspect-square w-32 overflow-hidden rounded-lg">
              <FotoOrang orang={o} />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-white">{namaLengkap(o)}</h2>
            <p className="text-sm text-electric-300">{o.jabatan}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-silver-400">Riwayat Pendidikan</dt>
                <dd className="text-silver-300">{o.riwayatPendidikan}</dd>
              </div>
              <div>
                <dt className="text-silver-400">Pengalaman</dt>
                <dd className="text-silver-300">{o.pengalaman}</dd>
              </div>
              <div>
                <dt className="text-silver-400">Minat Riset</dt>
                <dd className="text-silver-300">{o.minatRiset.join(', ')}</dd>
              </div>
            </dl>
            <Link to={`/dosen/${o.id}`} className="mt-4 inline-block text-sm font-medium text-electric-300 hover:text-electric-400">
              Profil lengkap →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
