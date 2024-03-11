'use client'

import { Button } from '@/components/ui/button'
import MovieSelector from './components/movie-selector/movie-selector'
import { useMovie } from '@/components/movie-provider'
import { getRandomMovie } from '@/lib/mocks/moviesMock'
import Autocomplete from './autocomplete'
import { SelectYear } from './components/movie-selector/components/select-year'
import { MovieSearchBar } from './components/movie-search-bar'

export default function Home() {
  const { movie, setMovie } = useMovie()

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Movies throwback</h1>
      <br />
      <div className="scroll-m-20 text-lg font-semibold tracking-tight flex items-center gap-2">
        {'Han pasado los mismos años desde'}
        <MovieSelector className="w-24 h-36" />
        {'hasta hoy, que desde'}
        {movie && <SelectYear />}
        {'a todas estas:'}
      </div>
      <Button
        className="mt-2 mb-4"
        onClick={() => {
          !movie ? setMovie(getRandomMovie()) : setMovie(undefined)
        }}
      >
        Click
      </Button>
      <Autocomplete />
      <MovieSearchBar className="mt-8" />
    </main>
  )
}
