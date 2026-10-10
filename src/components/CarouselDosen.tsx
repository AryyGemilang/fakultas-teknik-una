import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Orang } from '../data/types'
import { programStudi } from '../data/fakultas'

import FotoOrang from './ui/FotoOrang'
import { namaLengkap } from '../data/namaLengkap'
import { Link } from 'react-router-dom'

/** Kembalikan jumlah kartu per tampilan berdasarkan lebar window. */
function perTampilan(): number {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function CarouselDosen({ orang }: { orang: Orang[] }) {
  const [per, setPer] = useState(perTampilan)
  const [index, setIndex] = useState(0)
  const sentuhX = useRef<number | null>(null)

  useEffect(() => {
    const onResize = () => setPer(perTampilan())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maksIndex = Math.max(0, orang.length - per)
  // Jaga indeks tetap valid saat jumlah kartu/tampilan berubah, tanpa effect.
  const indexAman = Math.min(index, maksIndex)

  const geser = useCallback(
    (delta: number) => setIndex((i) => Math.min(maksIndex, Math.max(0, Math.min(i, maksIndex) + delta))),
    [maksIndex],
  )

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); geser(e.key === 'ArrowLeft' ? -1 : 1) }
  }

  if (orang.length === 0) {
    return (
      <p className="rounded-lg border border-white/10 bg-navy-900 p-6 text-silver-400">
        Belum ada data dosen.
      </p>
    )
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Dosen Fakultas Teknik"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div
        className="overflow-hidden"
        onTouchStart={(e) => (sentuhX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (sentuhX.current === null) return
          const dx = e.changedTouches[0].clientX - sentuhX.current
          if (Math.abs(dx) > 40) geser(dx < 0 ? 1 : -1)
          sentuhX.current = null
        }}
      >
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${indexAman * (100 / per)}%)` }}
        >
          {orang.map((o, i) => (
            <li
              key={o.id}
              className="shrink-0 px-2"
              style={{ width: `${100 / per}%` }}
              inert={i < indexAman || i >= indexAman + per}
              aria-hidden={i < indexAman || i >= indexAman + per}
            >
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-navy-900 p-4">
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <FotoOrang orang={o} />
                </div>
                <h3 className="mt-4 font-semibold text-white">{namaLengkap(o)}</h3>
                <p className="text-sm text-silver-400">{o.jabatan}</p>
                <p className="mt-1 text-xs text-electric-300">
                  {programStudi.find(p => p.id === o.program)?.nama ?? 'Fakultas Teknik'}
                </p>
                <Link
                  to={`/dosen/${o.id}`}
                  className="mt-auto pt-4 text-sm font-medium text-electric-300 hover:text-electric-400"
                >
                  Lihat profil →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => geser(-1)}
            disabled={indexAman === 0}
            aria-label="Dosen sebelumnya"
            className="rounded-md border border-white/10 p-2 text-silver-200 hover:bg-white/5 disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => geser(1)}
            disabled={indexAman >= maksIndex}
            aria-label="Dosen berikutnya"
            className="rounded-md border border-white/10 p-2 text-silver-200 hover:bg-white/5 disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <Link
          to="/dosen"
          className="text-sm font-semibold text-electric-300 hover:text-electric-400"
        >
          Lihat Semua Dosen →
        </Link>
      </div>
    </div>
  )
}
