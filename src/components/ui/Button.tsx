import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  to?: string
  variasi?: 'primer' | 'sekunder' | 'ghost'
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export default function Button({
  children,
  to,
  variasi = 'primer',
  type = 'button',
  onClick,
  disabled,
  className = '',
}: Props) {
  const dasar =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
  const gaya = {
    primer: 'bg-electric-500 text-white hover:bg-electric-400',
    sekunder:
      'border border-electric-400/60 text-electric-300 hover:bg-electric-500/10',
    ghost: 'text-silver-200 hover:text-white hover:bg-white/5',
  }[variasi]
  const cls = `${dasar} ${gaya} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
