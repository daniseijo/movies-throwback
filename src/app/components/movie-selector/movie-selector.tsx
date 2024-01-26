'use client'

import { useState } from 'react'
import MoviePanel from './components/movie-panel'

export default function MovieSelector() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col  items-center">
      <MoviePanel onCommand={() => setOpen((open) => !open)}></MoviePanel>
      <p className="mt-2">{`Opened?: ${open}`}</p>
    </div>
  )
}
