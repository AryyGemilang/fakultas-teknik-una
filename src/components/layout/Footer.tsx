import { Link } from 'react-router-dom'
import { GraduationCap, Mail, MapPin, Phone, Clock } from 'lucide-react'
import { fakultas } from '../../data/fakultas'
import { programStudi } from '../../data/fakultas'

const tahun = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-electric-500/15 text-electric-400 ring-1 ring-electric-500/40">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-white">
              FAKULTAS TEKNIK
              <span className="block text-xs font-normal text-silver-400">
                {fakultas.universitas}
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-silver-400">
            Situs pengembangan Fakultas Teknik Universitas Asahan. Konten sebagian masih berupa
            placeholder menunggu data resmi.
          </p>
        </div>

        <nav aria-label="Tautan program studi">
          <h3 className="text-sm font-semibold text-white">Program Studi</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {programStudi.map((p) => (
              <li key={p.id}>
                <Link to={`/program-studi/${p.id}`} className="text-silver-400 hover:text-electric-300">
                  {p.nama}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Tautan berguna">
          <h3 className="text-sm font-semibold text-white">Tautan Berguna</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/profil" className="text-silver-400 hover:text-electric-300">Profil Fakultas</Link></li>
            <li><Link to="/pimpinan" className="text-silver-400 hover:text-electric-300">Pimpinan</Link></li>
            <li><Link to="/dosen" className="text-silver-400 hover:text-electric-300">Direktori Dosen</Link></li>
            <li><Link to="/berita" className="text-silver-400 hover:text-electric-300">Berita</Link></li>
            <li><Link to="/fasilitas" className="text-silver-400 hover:text-electric-300">Fasilitas</Link></li>
            <li><Link to="/kontak" className="text-silver-400 hover:text-electric-300">Kontak</Link></li>
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-silver-400">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />{fakultas.alamat}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />{fakultas.email}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />{fakultas.telepon}</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-electric-400" aria-hidden="true" />{fakultas.jamLayanan}</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {fakultas.mediaSosial.map((s) => (
              <span
                key={s.label}
                aria-label={`${s.label} (belum tersedia)`}
                aria-disabled="true"
                className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-silver-400 hover:text-electric-300"
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-silver-400 sm:px-6 lg:px-8">
        © {tahun} Fakultas Teknik {fakultas.universitas}. Seluruh data
        institusional wajib diverifikasi sebelum publikasi.
      </div>
    </footer>
  )
}
