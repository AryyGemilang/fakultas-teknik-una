import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'

const nav = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Profil Fakultas' },
  { to: '/program-studi', label: 'Program Studi' },
  { to: '/pimpinan', label: 'Pimpinan' },
  { to: '/dosen', label: 'Dosen' },
  { to: '/berita', label: 'Berita' },
  { to: '/fasilitas', label: 'Fasilitas' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [buka, setBuka] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="border-b border-white/10 bg-[#071120] px-5 py-2 text-center text-[9px] tracking-[1.5px] text-silver-400">UNIVERSITAS ASAHAN <span className="mx-3 text-white/20">|</span> RUANG ILMU, REKAYASA, DAN INOVASI</div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Beranda Fakultas Teknik">
          <span title="Placeholder logo fakultas" className="flex h-11 w-10 items-center justify-center rounded-md bg-electric-500/15 text-electric-400 ring-1 ring-electric-500/40">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white">FAKULTAS TEKNIK</span>
            <span className="block text-xs text-silver-400">Universitas Asahan</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-electric-300 bg-electric-500/10'
                    : 'text-silver-200 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-silver-200 hover:bg-white/5 lg:hidden"
          aria-label={buka ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={buka}
          onClick={() => setBuka((v) => !v)}
        >
          {buka ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {buka && (
        <nav className="border-t border-white/10 px-4 pb-4 lg:hidden" aria-label="Navigasi seluler">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  onClick={() => setBuka(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2.5 text-sm font-medium ${
                      isActive ? 'text-electric-300 bg-electric-500/10' : 'text-silver-200'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
