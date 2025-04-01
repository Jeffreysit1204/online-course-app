import React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ border: '1px solid #ccc', padding: '1rem' }}>{children}</div>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div style={{ padding: '1rem' }}>{children}</div>
}
