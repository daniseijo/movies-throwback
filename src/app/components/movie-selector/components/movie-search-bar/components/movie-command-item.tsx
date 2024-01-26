import { CommandItem } from '@/components/ui/command'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export type MovieCommandItemProps = {
  className?: string
  isLoading?: boolean
  onSelect?: (value: string) => void
  value: string
}

export default function MovieCommandItem({ isLoading = false, className, ...props }: MovieCommandItemProps) {
  return (
    <CommandItem className={cn(className, 'cursor-pointer')} {...props}>
      {isLoading ? (
        <>
          <Skeleton className="w-12 h-18" />
          <div className="ml-2">
            <Skeleton className="h-6 w-64 mb-2" />
            <Skeleton className="h-4 w-10 mb-2" />
            <Skeleton className="h-4 w-40" />
          </div>
        </>
      ) : (
        <>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BZTM3ZTJhNTYtNWUwYS00NmE1LTkxMTMtZTdjNTk1MjljZDIyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"
            alt="tal"
            width={40}
            height={10}
            className="rounded w-12 h-18"
          />
          <div className="ml-2">
            <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">Indiana Jones and the Last Crusade</h3>
            <p className="text-sm text-muted-foreground">1989</p>
            <p className="text-sm text-muted-foreground">Harrison Ford, Sean Connery</p>
          </div>
        </>
      )}
    </CommandItem>
  )
}
