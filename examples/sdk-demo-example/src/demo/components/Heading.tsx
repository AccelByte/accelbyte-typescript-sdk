import React, { ReactNode } from 'react'

const TEXT_SIZE_RECORD = {
  h1: 'text-2xl',
  h2: 'text-xl',
  h3: 'text-lg'
} as const

const FONT_WEIGHT_RECORD = {
  h1: 'font-bold',
  h2: 'font-bold',
  h3: 'font-semibold'
} as const

export function Heading({ level, children, className = '' }: { level: 1 | 2 | 3; children: ReactNode; className?: string }) {
  const tagKey = `h${level}` as const
  const Tag = tagKey as keyof JSX.IntrinsicElements

  const text = children?.toString()!
  const id = convertHeadingToId(text)

  return (
    <Tag className={`${FONT_WEIGHT_RECORD[tagKey]} ${TEXT_SIZE_RECORD[tagKey]} ${className}`} id={id}>
      {children}
    </Tag>
  )
}

function convertHeadingToId(headingText: string) {
  return (
    headingText
      // Convert text to lowercase
      .toLowerCase()
      // Replace spaces with hyphens
      .replace(/\s+/g, '-')
      // Remove any non-alphanumeric characters (except hyphens)
      .replace(/[^\w\-]/g, '')
  )
}
