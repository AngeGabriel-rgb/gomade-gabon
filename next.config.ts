/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration de déploiement standalone
  output: 'standalone',

  // TypeScript - garder ignoreBuildErrors si nécessaire
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configuration des images optimisée pour SEO et performance
  images: {
    // Formats modernes pour meilleure performance
    formats: ['image/webp', 'image/avif'],
    
    // Tailles d'images responsive
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Qualités optimisées (75-80% = bon compromis qualité/poids)
    qualities: [75, 80],
    
    // Domaines externes autorisés
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      // Ajoutez d'autres domaines si nécessaire
    ],
    
    // Si vous avez besoin de désactiver l'optimisation (non recommandé pour SEO)
    // unoptimized: false,
  },

  // Compression pour améliorer la vitesse de chargement (important SEO)
  compress: true,

  // Headers SEO et sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ]
  },

  // Redirections SEO (ajoutez si nécessaire)
  async redirects() {
    return [
      // Exemple : redirection www vers non-www (ou inverse)
      // Décommentez et adaptez selon votre préférence
      /*
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'gomadegabon.com',
          },
        ],
        destination: 'https://www.gomadegabon.com/:path*',
        permanent: true,
      },
      */
    ]
  },

  // Désactiver le header "Powered by Next.js" (sécurité)
  poweredByHeader: false,

  // Activer le trailing slash si nécessaire
  // trailingSlash: false,
}

module.exports = nextConfig