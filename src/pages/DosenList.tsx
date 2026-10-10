import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Section from '../components/ui/Section'
import FotoOrang from '../components/ui/FotoOrang'
import { namaLengkap } from '../data/namaLengkap'
import { dosen } from '../data/orang'
import { programStudi } from '../data/fakultas'

export default function DosenList() {
  const [q, setQ] = useState('')
  const [prodi, setProdi] = useState('semua')
  const [jabatan, setJabatan] = useState('semua')
  const jabatanResmi = [...new Set(dosen.map(d => d.jabatan).filter(j => j && !j.startsWith('[')))]

  const hasil = useMemo(() => {
    const kata = q.trim().toLowerCase()
    return dosen.filter((d) => {
      const cocokProdi = prodi === 'semua' || d.program === prodi
      const cocokNama =
        !kata ||
        d.nama.toLowerCase().includes(kata) ||
        d.minatRiset.join(' ').toLowerCase().includes(kata)
      return cocokProdi && cocokNama && (jabatan === 'semua' || d.jabatan === jabatan)
    })
  }, [q, prodi, jabatan])

  return (
    <Section judul="Direktori Dosen" subjudul="Cari dan filter dosen Fakultas Teknik." className="bg-grid">
      <form className="mb-8 flex flex-col gap-3 sm:flex-row" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-1 items-center gap-2 rounded-md border border-white/10 bg-navy-900 px-3">
          <Search className="h-4 w-4 text-silver-400" aria-hidden="true" />
          <span className="sr-only">Cari nama dosen</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama atau bidang keahlian..."
            className="w-full bg-transparent py-2.5 text-sm text-white placeholder:text-silver-400 focus:outline-none"
          />
        </label>
        <div>
          <label htmlFor="filter-prodi" className="sr-only">Filter program studi</label>
          <select
            id="filter-prodi"
            value={prodi}
            onChange={(e) => setProdi(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-navy-900 px-3 py-2.5 text-sm text-white sm:w-56"
          >
            <option value="semua">Semua Program Studi</option>
            {programStudi.map((p) => (
              <option key={p.id} value={p.id}>{p.nama}</option>
            ))}
          </select>
        </div>
      </form>
      {jabatanResmi.length > 0 && <label className="mb-5 block text-sm">Jabatan akademik <select className="ml-3 rounded bg-navy-900 p-2" value={jabatan} onChange={e => setJabatan(e.target.value)}><option value="semua">Semua jabatan</option>{jabatanResmi.map(j => <option key={j}>{j}</option>)}</select></label>}

      <p className="mb-4 text-sm text-silver-400" aria-live="polite">
        {hasil.length} profil ditampilkan. Profil kosong merupakan placeholder, bukan jumlah dosen resmi.
      </p>

      {hasil.length === 0 ? (
        <div className="rounded-xl border border-dashed border-white/15 bg-navy-900 p-8 text-center text-silver-400">
          Tidak ada dosen yang cocok dengan pencarian.
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hasil.map((d) => (
            <li key={d.id}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-navy-900 p-5">
                <div className="aspect-square w-28 overflow-hidden rounded-lg">
                  <FotoOrang orang={d} />
                </div>
                <h2 className="mt-4 font-semibold text-white">{namaLengkap(d)}</h2>
                <p className="text-sm text-electric-300">{d.jabatan}</p>
                <p className="mt-1 text-sm text-silver-300">{programStudi.find(p => p.id === d.program)?.nama}</p>
                <p className="mt-1 text-xs text-silver-400">{d.minatRiset[0]}</p>
                <Link to={`/dosen/${d.id}`} className="mt-auto pt-4 text-sm font-medium text-electric-300 hover:text-electric-400">
                  Lihat profil →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
