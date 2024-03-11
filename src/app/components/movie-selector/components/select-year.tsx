'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from '@/components/ui/select'
import { rangeUntil1901 } from '@/lib/utils'
import { useState } from 'react'

export function SelectYear() {
  const [value, setValue] = useState('default')

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-auto">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">el estreno de la película</SelectItem>
        <SelectSeparator />
        {rangeUntil1901().map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
