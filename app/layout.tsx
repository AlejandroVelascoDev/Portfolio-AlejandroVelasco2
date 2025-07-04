import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider' 

export const metadata: Metadata = {
  title: 'Portfolio AlejandroV',
  description: 'Portfolio de AlejandroV',
  generator: 'dalexdev.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
