import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GOMADE GABON - Études de Marché & Sondages d\'Opinion',
  description: 'Cabinet d\'études de marchés et sondages d\'opinion. Accompagnez votre entreprise vers des décisions stratégiques éclairées.',
  icons: {
    icon: [
      {
        url: '/gomade.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/gomade.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/gomades.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/gomade.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
