// next.config.js (ou next.config.mjs)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... autres configurations (output, etc.)

  images: {
    // Liste des domaines externes autorisés pour le composant <Image>
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**', // Autoriser tous les chemins sur ce domaine
      },
      // Ajoutez d'autres domaines si nécessaire
    ],
    // Ancienne méthode (pour les versions plus anciennes de Next.js):
    // domains: ['i.pinimg.com'], 
  },
};

module.exports = nextConfig;