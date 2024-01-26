import { Poster } from './poster'

export type Movie = {
  title: string
  description: string
  director: string
  actors: string[]
  year: number
  poster: Poster
}
