'use client'

import { Movie } from '@/app/types/movie'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

interface MovieState {
  movie: Movie | undefined
  setMovie(mode: Movie | undefined): void
}

const defaultMovieState: MovieState = {
  movie: undefined,
  setMovie: () => {},
}

const MovieContext = createContext(defaultMovieState)

export const useMovie = () => useContext(MovieContext)

export const MovieProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [movie, setMovie] = useState<Movie | undefined>(undefined)

  return <MovieContext.Provider value={{ movie, setMovie }}>{children}</MovieContext.Provider>
}
