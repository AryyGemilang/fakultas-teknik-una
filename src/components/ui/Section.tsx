import type { ReactNode } from 'react'

export default function Section({
  id,
  judul,
  subjudul,
  children,
  className = '',
}: {
  id?: string
  judul?: string
  subjudul?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(judul || subjudul) && (
          <header className="mb-8 max-w-3xl">
            {judul && (
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {judul}
              </h2>
            )}
            {subjudul && (
              <p className="mt-2 text-silver-400">{subjudul}</p>
            )}
            <div className="mt-4 h-1 w-16 rounded bg-electric-500" />
          </header>
        )}
        {children}
      </div>
    </section>
  )
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-amber-300/90 text-sm">
      {children}
    </span>
  )
}
