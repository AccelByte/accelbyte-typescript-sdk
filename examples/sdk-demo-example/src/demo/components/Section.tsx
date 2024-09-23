import React, { ReactNode } from 'react'

export function Section({ children }: { children: ReactNode }) {
  return <section className="flex flex-col items-start gap-y-4 w-full">{children}</section>
}

export function SectionContent({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-y-6 w-full">{children}</div>
}
