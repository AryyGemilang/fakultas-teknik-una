import { useParams, Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { berita } from '../data/konten'

export default function BeritaDetail() {
  const { id } = useParams()
  const b = berita.find((x) => x.id === id)

  if (!b) {
    return (
      <Section judul="Berita tidak ditemukan">
        <p className="text-silver-400">
          Berita yang Anda cari tidak tersedia.{' '}
          <Link to="/berita" className="text-electric-300">Kembali ke daftar berita.</Link>
        </p>
      </Section>
    )
  }

  return (
    <Section className="bg-grid">
      <article className="mx-auto max-w-3xl">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded bg-electric-500/15 px-2 py-0.5 text-electric-300">{b.kategori}</span>
          <time dateTime={b.tanggal} className="text-silver-400">{b.tanggal}</time>
        </div>
        <h1 className="mt-3 text-3xl font-bold text-white">{b.judul}</h1>
        {b.gambar && <figure className="mt-6"><img src={b.gambar} alt="Ilustrasi akademik" className="aspect-video w-full rounded-lg object-cover" /><figcaption className="mt-2 text-xs text-silver-400">Foto ilustrasi · bukan dokumentasi UNA</figcaption></figure>}
        <p className="mt-4 text-lg text-silver-300">{b.ringkasan}</p>
        <div className="mt-6 space-y-4 text-silver-300">
          {b.isi.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mt-8 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-300/90">
          Catatan: konten ini adalah materi demonstrasi, bukan pengumuman resmi.
        </p>
        <Link to="/berita" className="mt-8 inline-block text-sm font-medium text-electric-300 hover:text-electric-400">
          ← Kembali ke daftar berita
        </Link>
      </article>
    </Section>
  )
}
