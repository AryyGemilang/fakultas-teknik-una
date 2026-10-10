import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'

export default function NotFound() {
  return (
    <Section judul="404 — Halaman tidak ditemukan">
      <p className="text-silver-400">
        Halaman yang Anda tuju tidak tersedia.{' '}
        <Link to="/" className="text-electric-300">Kembali ke beranda.</Link>
      </p>
    </Section>
  )
}
