import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import Section from '../components/ui/Section'
import { fakultas } from '../data/fakultas'

interface Field {
  nama: string
  email: string
  subjek: string
  pesan: string
}

export default function Kontak() {
  const [form, setForm] = useState<Field>({ nama: '', email: '', subjek: '', pesan: '' })
  const [error, setError] = useState<Partial<Field>>({})
  const [sukses, setSukses] = useState(false)

  const validasi = (): boolean => {
    const e: Partial<Field> = {}
    if (form.nama.trim().length < 2) e.nama = 'Nama minimal 2 karakter.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format email tidak valid.'
    if (form.subjek.trim().length < 3) e.subjek = 'Subjek minimal 3 karakter.'
    if (form.pesan.trim().length < 10) e.pesan = 'Pesan minimal 10 karakter.'
    setError(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    setSukses(false)
    if (!validasi()) return
    // Tidak ada backend. Tidak ada pengiriman pesan sungguhan.
    setSukses(true)
  }

  const ubah = (k: keyof Field) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    { setSukses(false); setForm((f) => ({ ...f, [k]: ev.target.value })) }

  const inputCls =
    'w-full rounded-md border border-white/10 bg-navy-950 px-3 py-2.5 text-sm text-white placeholder:text-silver-400 focus:outline-none focus:border-electric-500'

  return (
    <>
      <Section judul="Kontak" subjudul="Informasi kontak resmi menunggu data terverifikasi." className="bg-grid">
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="space-y-4 text-silver-300">
            <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-electric-400" aria-hidden="true" /><span>{fakultas.alamat}</span></li>
            <li className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-electric-400" aria-hidden="true" /><span>{fakultas.email}</span></li>
            <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-electric-400" aria-hidden="true" /><span>{fakultas.telepon}</span></li>
            <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-electric-400" aria-hidden="true" /><span>{fakultas.jamLayanan}</span></li>
          </ul>

          {/* Placeholder peta: iframe asli menunggu titik lokasi resmi */}
          <div className="flex min-h-56 items-center justify-center rounded-xl border border-dashed border-white/15 bg-navy-900 p-6 text-center text-sm text-silver-400">
            [Peta lokasi belum tersedia — sematkan Google Maps setelah alamat resmi diverifikasi]
          </div>
        </div>
      </Section>

      <Section judul="Siapkan Pesan" subjudul="Demo validasi lokal. Pesan tidak dikirim; integrasi email belum tersedia." className="bg-navy-900/40">
        <form onSubmit={onSubmit} noValidate className="max-w-2xl space-y-4">
          {sukses && (
            <p role="status" className="rounded-md border border-electric-500/40 bg-electric-500/10 p-3 text-sm text-electric-300">
              Validasi berhasil. Catatan: pesan belum terkirim karena integrasi backend/email belum tersedia.
            </p>
          )}

          <div>
            <label htmlFor="nama" className="mb-1 block text-sm text-silver-200">Nama</label>
            <input id="nama" value={form.nama} onChange={ubah('nama')} className={inputCls} aria-invalid={!!error.nama} aria-describedby={error.nama ? 'err-nama' : undefined} />
            {error.nama && <p id="err-nama" className="mt-1 text-xs text-red-400">{error.nama}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-silver-200">Email</label>
            <input id="email" type="email" value={form.email} onChange={ubah('email')} className={inputCls} aria-invalid={!!error.email} aria-describedby={error.email ? 'err-email' : undefined} />
            {error.email && <p id="err-email" className="mt-1 text-xs text-red-400">{error.email}</p>}
          </div>

          <div>
            <label htmlFor="subjek" className="mb-1 block text-sm text-silver-200">Subjek</label>
            <input id="subjek" value={form.subjek} onChange={ubah('subjek')} className={inputCls} aria-invalid={!!error.subjek} aria-describedby={error.subjek ? 'err-subjek' : undefined} />
            {error.subjek && <p id="err-subjek" className="mt-1 text-xs text-red-400">{error.subjek}</p>}
          </div>

          <div>
            <label htmlFor="pesan" className="mb-1 block text-sm text-silver-200">Pesan</label>
            <textarea id="pesan" rows={5} value={form.pesan} onChange={ubah('pesan')} className={inputCls} aria-invalid={!!error.pesan} aria-describedby={error.pesan ? 'err-pesan' : undefined} />
            {error.pesan && <p id="err-pesan" className="mt-1 text-xs text-red-400">{error.pesan}</p>}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-electric-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric-400"
          >
            <Send className="h-4 w-4" aria-hidden="true" /> Periksa pesan
          </button>
        </form>
      </Section>
    </>
  )
}
