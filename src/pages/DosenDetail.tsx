import { useParams, Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import FotoOrang from '../components/ui/FotoOrang'
import { namaLengkap } from '../data/namaLengkap'
import { cariOrang } from '../data/orang'
import { programStudi } from '../data/fakultas'

export default function DosenDetail() {
  const { id } = useParams()
  const o = id ? cariOrang(id) : undefined

  if (!o) {
    return (
      <Section judul="Profil tidak ditemukan">
        <p className="text-silver-400">
          Profil yang Anda cari tidak tersedia.{' '}
          <Link to="/dosen" className="text-electric-300">Kembali ke direktori dosen.</Link>
        </p>
      </Section>
    )
  }

  const prodi = programStudi.find((p) => p.id === o.program)

  return (
    <Section className="bg-grid">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <div>
          <div className="aspect-square w-full overflow-hidden rounded-xl border border-white/10">
            <FotoOrang orang={o} />
          </div>
          {!o.foto && <p className="mt-3 text-xs text-silver-400">[Foto profil belum tersedia]</p>}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{namaLengkap(o)}</h1>
          <p className="mt-1 text-electric-300">{o.jabatan}</p>
          {prodi && <p className="mt-1 text-sm text-silver-400">{prodi.nama}</p>}

          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm font-medium text-white">NIDN / NIP</dt>
              <dd className="text-sm text-silver-400">{o.nidn || '[Belum tersedia]'}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-white">Riwayat Pendidikan</dt>
              <dd className="text-sm text-silver-400">{o.riwayatPendidikan}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-white">Pengalaman</dt>
              <dd className="text-sm text-silver-400">{o.pengalaman}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-white">Minat Riset</dt>
              <dd className="text-sm text-silver-400">{o.minatRiset.join(', ')}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-white">Biografi</dt>
              <dd className="text-sm text-silver-400">{o.biografi}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-white">Publikasi</dt>
              <dd className="text-sm text-silver-400">
                {o.scholar ? (
                  <a href={o.scholar} className="text-electric-300 hover:text-electric-400" target="_blank" rel="noreferrer">
                    Google Scholar
                  </a>
                ) : (
                  '[Tautan publikasi belum tersedia]'
                )}
              </dd>
            </div>
          </dl>

          <Link to="/dosen" className="mt-8 inline-block text-sm font-medium text-electric-300 hover:text-electric-400">
            ← Kembali ke direktori dosen
          </Link>
        </div>
      </div>
    </Section>
  )
}
