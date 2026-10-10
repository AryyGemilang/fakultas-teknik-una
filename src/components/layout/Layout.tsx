import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-electric-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="konten-utama" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
