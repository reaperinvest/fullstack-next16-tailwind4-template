import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'my_app',
  description: 'Next.js 16 + Tailwind v4 + Clean Architecture',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
