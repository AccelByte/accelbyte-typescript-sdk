import React, { ReactNode } from 'react'

export function Snippet({ children }: { children: ReactNode }) {
  return (
    <pre className="max-h-[600px] w-full border border-slate-500 bg-slate-200 rounded p-2 overflow-y-auto whitespace-pre text-xs">
      {children}
    </pre>
  )
}
