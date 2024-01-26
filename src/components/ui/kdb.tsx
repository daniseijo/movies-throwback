import { cn } from '@/lib/utils'

export type KbdProps = {
  className?: string
  letter: string
}

export function Kbd({ letter, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        className,
        'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
      )}
    >
      <span className="text-xs">⌘</span>
      {letter}
    </kbd>
  )
}
