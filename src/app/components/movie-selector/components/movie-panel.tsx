import { useMovie } from '@/components/movie-provider'
import { Kbd } from '@/components/ui/kdb'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect } from 'react'

const COMMAND_KEY = 'K'

export type MoviePanelProps = {
  className?: string
  onCommand?: () => void
}

export default function MoviePanel({ className, onCommand }: MoviePanelProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === COMMAND_KEY.toLowerCase() && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onCommand?.()
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onCommand])

  const { movie } = useMovie()

  return (
    <button className={cn(className, 'border rounded-lg relative w-48 h-72')} onClick={onCommand}>
      {movie ? (
        <div className="p-1">
          <Kbd letter={COMMAND_KEY} className="absolute right-0 top-0 m-3" />
          <Image src={movie.poster.src} alt={movie.poster.alt} width={200} height={300} className="rounded" priority />
        </div>
      ) : (
        <div className="p-1">
          <p className="text-sm text-muted-foreground">Which what movie do you want to compare?</p>
          <br />
          <Kbd letter={COMMAND_KEY} />
        </div>
      )}
    </button>
  )
}
