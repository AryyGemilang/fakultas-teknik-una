import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import Section from '../components/ui/Section'
import { berita } from '../data/konten'

export default function BeritaList() {
  const [q, setQ] = useState('')
  const [params] = useSearchParams()
  const [kategori, setKategori] = useState(params.get('kategori') || 'semua')

  const kategoriUnik = useMemo(
    () => ['semua', ...Array.from(new Set(berita.map((b) => b.kategori)))],
    [],
  )

  const hasil = useMemo(() => {
    const kata = q.trim().toLowerCase()
    return berita.filter(
      (b) =>
        (kategori === 'semua' || b.kategori === kategori) &&
        (!kata || b.judul.toLowerCase().includes(kata) || b.ringkasan.toLowerCase().includes(kata)),
    )
  }, [q, kategori])

  return (
    <Section judul="Berita & Pengumuman" subjudul="Konten demonstrasi hingga berita resmi tersedia." className="bg-grid">
      <form className="mb-8 flex flex-col gap-3 sm:flex-row" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-1 items-center gap-2 rounded-md border border-white/10 bg-navy-900 px-3">
          <Search className="h-4 w-4 text-silver-400" aria-hidden="true" />
          <span className="sr-only">Cari berita</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari berita..."
            className="w-full bg-transparent py-2.5 text-sm text-white placeholder:text-silver-400 focus:outline-none"
          />
        </label>
        <div>
          <label htmlFor="filter-kategori" className="sr-only">Filter kategori</label>
          <select
            id="filter-kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-navy-900 px-3 py-2.5 text-sm text-white sm:w-48"
          >
            {kategoriUnik.map((k) => (
              <option key={k} value={k}>{k === 'semua' ? 'Semua Kategori' : k}</option>
            ))}
          </select>
        </div>
      </form>

      {hasil.length === 0 ? (
        <div className="rounded-xl border border-dashed border-white/15 bg-navy-900 p-8 text-center text-silver-400">
          Tidak ada berita yang cocok.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hasil.map((b) => (
            <article key={b.id} className="flex flex-col rounded-xl border border-white/10 bg-navy-900 p-6">
              {b.gambar && <figure className="mb-5"><img src={b.gambar} alt="Ilustrasi akademik" loading="lazy" className="aspect-video w-full rounded-lg object-cover" /><figcaption className="mt-1 text-xs text-silver-400">Foto ilustrasi · bukan dokumentasi UNA</figcaption></figure>}
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded bg-electric-500/15 px-2 py-0.5 text-electric-300">{b.kategori}</span>
                <time dateTime={b.tanggal} className="text-silver-400">{b.tanggal}</time>
              </div>
              <h2 className="mt-3 font-semibold text-white">{b.judul}</h2>
              <p className="mt-2 text-sm text-silver-400">{b.ringkasan}</p>
              <Link to={`/berita/${b.id}`} className="mt-auto pt-4 text-sm font-medium text-electric-300 hover:text-electric-400">
                Baca selengkapnya →
              </Link>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
