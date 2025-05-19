"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: string
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
}: Props) {
  return (
    <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme} enableSystem>
      {children}
    </NextThemesProvider>
  )
}
