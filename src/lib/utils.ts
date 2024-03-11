import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function rangeUntil1901() {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: currentYear - 1900 }, (_, i) => currentYear - i)
}

export function trimParagraph(text: string, maxCharacters: number, ending = '...') {
  if (text.length <= maxCharacters) return text

  let trimmedStr = text.slice(0, maxCharacters)
  trimmedStr = trimmedStr.slice(0, trimmedStr.lastIndexOf(' '))

  return trimmedStr + ending
}
