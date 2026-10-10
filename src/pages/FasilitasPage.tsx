import { useState } from 'react'
import Section from '../components/ui/Section'
import { fasilitas } from '../data/konten'

const kategoriLabel: Record<string, string> = {
  laboratorium: 'Laboratorium',
  bengkel: 'Bengkel',
  pembelajaran: 'Pembelajaran',
  umum: 'Umum',
}

export default function FasilitasPage() {
  const kategori = ['semua', 'laboratorium', 'bengkel', 'pembelajaran', 'umum']
  const [aktif, setAktif] = useState('semua')
  const hasil = fasilitas.filter((f) => aktif === 'semua' || f.kategori === aktif)

  return (
    <>
      <Section judul="Fasilitas & Laboratorium" subjudul="Daftar masih placeholder; status resmi menunggu verifikasi." className="bg-grid">
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori fasilitas">
          {kategori.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={aktif === k}
              onClick={() => setAktif(k)}
              className={`rounded-full px-3 py-1 text-sm ${
                aktif === k
                  ? 'bg-electric-500 text-white'
                  : 'border border-white/10 text-silver-300 hover:bg-white/5'
              }`}
            >
              {k === 'semua' ? 'Semua' : kategoriLabel[k]}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((f) => (
            <article key={f.id} className="rounded-xl border border-white/10 bg-navy-900 p-5">
              <span className="text-xs text-electric-300">{kategoriLabel[f.kategori]}</span>
              <h2 className="mt-1 font-semibold text-white">{f.nama}</h2>
              <p className="mt-2 text-sm text-silver-400">{f.deskripsi}</p>
              {f.status === 'placeholder' && (
                <span className="mt-3 inline-block rounded bg-amber-500/10 px-2 py-0.5 text-xs text-amber-300/90">
                  Belum terverifikasi
                </span>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section judul="Organisasi & Kegiatan Mahasiswa" className="bg-navy-900/40">
        <div className="rounded-xl border border-dashed border-white/15 bg-navy-900 p-8 text-center text-silver-400">
          [Daftar organisasi mahasiswa, seminar, dan kompetisi resmi menunggu data terverifikasi]
        </div>
      </Section>
    </>
  )
}
