'use client'

import { Button } from '@/components/ui/button'
import MovieSelector from './components/movie-selector/movie-selector'
import { useMovie } from '@/components/movie-provider'
import { getRandomMovie } from '@/lib/mocks/moviesMock'
import Autocomplete from './autocomplete'

export default function Home() {
  const { movie, setMovie } = useMovie()

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Movie throwback</h1>
      <Autocomplete />
      <br />
      <MovieSelector />
      <Button
        className="mt-2"
        onClick={() => {
          !movie ? setMovie(getRandomMovie()) : setMovie(undefined)
        }}
      >
        Click
      </Button>
    </main>
  )
}
