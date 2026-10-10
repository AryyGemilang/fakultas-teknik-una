import { User } from 'lucide-react'
import type { Orang } from '../../data/types'
import { namaLengkap } from '../../data/namaLengkap'

/** Foto potret dengan fallback inisial, memakai lazy loading. */
export default function FotoOrang({
  orang,
  className = '',
}: {
  orang: Orang
  className?: string
}) {
  if (orang.foto) {
    return (
      <img
        src={orang.foto}
        alt={`Foto ${namaLengkap(orang)}`}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`[Foto ${namaLengkap(orang)} belum tersedia]`}
      className={`flex h-full w-full items-center justify-center bg-navy-800 text-silver-400 ${className}`}
    >
      <User className="h-10 w-10" aria-hidden="true" />
    </div>
  )
}
