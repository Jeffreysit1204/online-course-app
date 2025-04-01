import React from 'react'

type TabsProps = {
  children: React.ReactNode
  defaultValue: string
}

export function Tabs({ children }: TabsProps) {
  return <div className="tabs">{children}</div>
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="tabs-list">{children}</div>
}

type TabsTriggerProps = {
  children: React.ReactNode
  value: string
}

export function TabsTrigger({ children, value }: TabsTriggerProps) {
  return <button data-value={value}>{children}</button>
}

export function TabsContent({ children }: { children: React.ReactNode }) {
  return <div className="tabs-content">{children}</div>
}
