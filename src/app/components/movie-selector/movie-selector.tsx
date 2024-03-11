'use client'

import { useState } from 'react'
import MoviePanel from './components/movie-panel'
import { cn } from '@/lib/utils'

export type MovieSelectorProps = {
  className?: string
}

export default function MovieSelector({ className }: MovieSelectorProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <MoviePanel onCommand={() => setOpen((open) => !open)}></MoviePanel>
      {/* <p className="mt-2">{`Opened?: ${open}`}</p> */}
    </div>
  )
}
