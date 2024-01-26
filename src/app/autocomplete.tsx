'use client'

import { Button } from '@/components/ui/button'
import {
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandDialog,
  CommandEmpty,
} from '@/components/ui/command'
import { Kbd } from '@/components/ui/kdb'
import { Skeleton } from '@/components/ui/skeleton'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Autocomplete() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const [value, setValue] = useState('')

  const data = [
    { placeId: 1, description: 'hola' },
    { placeId: 2, description: 'adios' },
    { placeId: 3, description: 'que tal' },
  ]
  return (
    <>
      <Button
        variant="outline"
        className="text-muted-foreground w-full flex justify-between"
        onClick={() => setOpen((open) => !open)}
      >
        <div>Search a movie...</div>
        <Kbd letter="K" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={value}
          onValueChange={(value) => {
            setValue(value)
          }}
          // disabled={!ready}
          placeholder="Search a movie"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup>
            <CommandItem className="cursor-pointer" onSelect={() => setOpen((open) => !open)}>
              <Skeleton className="w-12 h-18" />
              <div className="ml-2">
                <Skeleton className="h-6 w-64 mb-2" />
                <Skeleton className="h-4 w-10 mb-2" />
                <Skeleton className="h-4 w-40" />
              </div>
            </CommandItem>
            {data.map(({ placeId, description }) => (
              <CommandItem
                key={placeId}
                value={description}
                className="cursor-pointer"
                onSelect={() => setOpen((open) => !open)}
              >
                <Image
                  src="https://image.tmdb.org/t/p/w1280/5h45gK147AAJpLLC7Cicr597urz.jpg"
                  alt="tal"
                  width={40}
                  height={10}
                  className="rounded w-12 h-18"
                />
                <div className="ml-2">
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    Indiana Jones and the Last Crusade
                  </h3>
                  <p className="text-sm text-muted-foreground">1989</p>
                  <p className="text-sm text-muted-foreground">Harrison Ford, Sean Connery</p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
