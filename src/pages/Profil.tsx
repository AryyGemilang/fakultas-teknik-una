import Section from '../components/ui/Section'
import { fakultas } from '../data/fakultas'
import { pimpinan } from '../data/orang'

export default function Profil() {
  return (
    <>
      <Section judul="Profil Fakultas Teknik" subjudul={`${fakultas.nama}, ${fakultas.universitas}`} className="bg-grid">
        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-white">Sejarah</h3>
            <div className="mt-3 space-y-3 text-silver-300">
              {fakultas.sejarah.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-navy-900 p-6">
              <h3 className="text-lg font-semibold text-white">Visi</h3>
              <p className="mt-3 text-silver-300">{fakultas.visi}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy-900 p-6">
              <h3 className="text-lg font-semibold text-white">Misi</h3>
              <ul className="mt-3 space-y-2 text-silver-300">
                {fakultas.misi.map((m, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-electric-400">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Tujuan</h3>
            <ul className="mt-3 space-y-2 text-silver-300">
              {fakultas.tujuan.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-electric-400">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Struktur Organisasi</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pimpinan.map((p) => (
                <div key={p.id} className="rounded-lg border border-white/10 bg-navy-900 p-4">
                  <p className="text-sm text-silver-400">{p.jabatan}</p>
                  <p className="mt-1 font-medium text-white">
                    {p.nama || '[Nama Pejabat]'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-white/15 bg-navy-900 p-6 text-silver-400">
            [Lingkungan akademik dan sarana prasarana resmi Fakultas Teknik menunggu data
            terverifikasi.]
          </div>
        </div>
      </Section>
    </>
  )
}
