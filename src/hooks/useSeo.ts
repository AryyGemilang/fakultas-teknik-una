import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { programStudi } from '../data/fakultas'
import { berita } from '../data/konten'
import { cariOrang } from '../data/orang'
import { namaLengkap } from '../data/namaLengkap'

const judulMap: Record<string, string> = {
  '/': 'Beranda',
  '/profil': 'Profil Fakultas',
  '/program-studi': 'Program Studi',
  '/pimpinan': 'Pimpinan',
  '/dosen': 'Direktori Dosen',
  '/berita': 'Berita & Pengumuman',
  '/fasilitas': 'Fasilitas',
  '/kontak': 'Kontak',
}

/** Set judul dokumen dan kembalikan fokus ke atas pada perubahan rute. */
export default function useSeo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const segmen = '/' + pathname.split('/')[1]
    const id = pathname.split('/')[2]
    const orang = id && segmen === '/dosen' ? cariOrang(id) : undefined
    const nama = (id && segmen === '/program-studi' ? programStudi.find(p => p.id === id)?.nama : undefined)
      ?? (id && segmen === '/berita' ? berita.find(b => b.id === id)?.judul : undefined)
      ?? (orang ? namaLengkap(orang) : undefined)
      ?? judulMap[pathname] ?? 'Halaman tidak ditemukan'
    document.title = `${nama} — Fakultas Teknik Universitas Asahan`
    document.querySelector('meta[name="description"]')?.setAttribute('content', `${nama}. Jelajahi Fakultas Teknik Universitas Asahan: Teknik Sipil, Teknik Mesin, dan Teknik Informatika. Data resmi menunggu verifikasi.`)
    window.scrollTo({ top: 0 })
    document.getElementById('konten-utama')?.focus({ preventScroll: true })
  }, [pathname])
}
