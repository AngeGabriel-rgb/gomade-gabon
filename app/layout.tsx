import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CookieConsent } from "@/components/cookie-consent"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gomadegabon.com'),
  
  title: {
    default: 'GOMADE GABON - Études de Marché, Sondages d\'Opinion & Enquêtes Marketing',
    template: '%s | GOMADE GABON'
  },
  
  description: 'Cabinet d\'études de marché au Gabon spécialisé en sondages d\'opinion, enquêtes marketing et analyses stratégiques. Expert en collecte de données et insights business à Libreville.',
  
  keywords: [
    'sondage gabon',
    'enquête marketing gabon',
    'étude de marché gabon',
    'sondage libreville',
    'enquête marketing libreville',
    'cabinet d\'études gabon',
    'sondage d\'opinion gabon',
    'questionnaire en ligne gabon',
    'analyse de marché gabon',
    'études stratégiques gabon',
    'collecte de données gabon',
    'insights marketing gabon',
    'recherche marketing gabon',
    'gomade gabon'
  ],
  
  authors: [{ name: 'GOMADE GABON' }],
  creator: 'GOMADE GABON',
  publisher: 'GOMADE GABON',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'fr_GA',
    url: 'https://www.gomadegabon.com',
    siteName: 'GOMADE GABON',
    title: 'GOMADE GABON - Expert en Études de Marché et Sondages au Gabon',
    description: 'Cabinet leader en études de marché, sondages d\'opinion et enquêtes marketing au Gabon. Transformez vos données en décisions stratégiques gagnantes.',
    images: [
      {
        url: '/gomade.png',
        width: 1200,
        height: 630,
        alt: 'GOMADE GABON - Cabinet d\'Études de Marché',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'GOMADE GABON - Études de Marché & Sondages',
    description: 'Expert en sondages d\'opinion et enquêtes marketing au Gabon',
    images: ['/gomade.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    // À ajouter après inscription sur Google Search Console
    google: 'google-site-verification=nFYCIR-AoyLtnEqkcN_JZREZA7D8CA76oCgrgeXjqUQ',
    // yandex: 'votre-code-yandex',
    // bing: 'votre-code-bing',
  },
  
  alternates: {
    canonical: 'https://www.gomadegabon.com',
  },
  
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
        url: '/Asset 2.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Asset 2.svg',
  },
  
  other: {
    'geo.region': 'GA-ES',
    'geo.placename': 'Libreville',
    'geo.position': '0.4162;9.4673',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        {/* JSON-LD Schema pour le référencement local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "GOMADE GABON",
              "image": "https://www.gomadegabon.com/gomade.png",
              "description": "Cabinet d'études de marché, sondages d'opinion et enquêtes marketing au Gabon",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dernière Kar motors, bas de Guegue",
                "addressLocality": "Libreville",
                "addressRegion": "Estuaire",
                "addressCountry": "GA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "0.4162",
                "longitude": "9.4673"
              },
              "url": "https://www.gomadegabon.com",
              "telephone": "+24174511172",
              "email": "goodmarketingdecisionsgabon@gmail.com",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://wa.me/24174511172"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Gabon"
              },
              "serviceType": [
                "Études de marché",
                "Sondages d'opinion",
                "Enquêtes marketing",
                "Analyses stratégiques",
                "Collecte de données"
              ]
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}