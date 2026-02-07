import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded transition-colors duration-200 no-underline'

  const variantClasses = {
    primary: 'bg-gradient-primary text-white hover:shadow-lg active:shadow-md hover:scale-105 active:scale-100',
    secondary: 'bg-gradient-to-r from-blue-100 to-blue-50 text-blue-900 hover:shadow-md active:shadow-sm hover:scale-105 active:scale-100',
    outline: 'border-2 border-gradient-to-r from-blue-500 to-blue-600 text-primary-600 bg-gradient-blue-light hover:shadow-md active:shadow-sm hover:scale-105 active:scale-100',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const allClasses = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    return (
      <a href={href} className={allClasses} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={allClasses} onClick={onClick}>
      {children}
    </button>
  )
}
