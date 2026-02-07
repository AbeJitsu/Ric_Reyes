import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'light' | 'navy'
  id?: string
}

export function Section({ children, className, background = 'white', id }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-blue-50',
    navy: 'bg-gradient-to-r from-blue-900 to-blue-800 text-white',
  }

  return (
    <section id={id} className={cn('py-12 sm:py-16 lg:py-20', bgClasses[background], className)}>
      {children}
    </section>
  )
}
