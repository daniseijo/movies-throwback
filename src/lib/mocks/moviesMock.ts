import { Movie } from '@/app/types/movie'

export const movieMocks: Movie[] = [
  {
    title: 'Indiana Jones and the Last Crusade',
    description: `In 1938, an art collector appeals to eminent archaeologist Dr. Indiana Jones to embark on a search for the Holy Grail. Indy learns that a medieval historian has vanished while searching for it, and the missing man is his own father, Dr. Henry Jones Sr.. He sets out to rescue his father by following clues in the old man's notebook, which his father had mailed to him before he went missing. Indy arrives in Venice, where he enlists the help of a beautiful academic, Dr. Elsa Schneider, along with Marcus Brody and Sallah. Together they must stop the Nazis from recovering the power of eternal life and taking over the world!`,
    director: 'Steven Spielberg',
    actors: ['Harrison Ford', 'Sean Connery'],
    year: 1989,
    poster: {
      src: 'https://image.tmdb.org/t/p/w1280/sizg1AU8f8JDZX4QIgE4pjUMBvx.jpg',
      alt: 'Indiana Jones and the Last Crusade poster',
    },
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    description: `Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.`,
    director: 'Peter Jackson',
    actors: ['Elijah Wood', 'Viggo Mortensen'],
    year: 2001,
    poster: {
      src: 'https://image.tmdb.org/t/p/w1280/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
      alt: 'The Lord of the Rings: The Fellowship of the Ring poster',
    },
  },
]

export function getRandomMovie() {
  return movieMocks[Math.floor(Math.random() * movieMocks.length)]
}
