import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import HeroSection from '@/components/sections/hero-section'
import PartnersSection from '@/components/sections/partners-section'
import ServicesPreview from '@/components/sections/services-preview'
import QuickContact from '@/components/sections/quick-contact'

// Metadata SEO optimisées pour la page d'accueil
export const metadata: Metadata = {
  title: 'Accueil - Études de Marché & Sondages d\'Opinion',
  description: 'Cabinet d\'études de marché au Gabon. Sondages d\'opinion, enquêtes marketing et analyses stratégiques professionnelles à Libreville. Transformez vos données en décisions gagnantes.',
  alternates: {
    canonical: 'https://www.gomadegabon.com',
  },
  openGraph: {
    title: 'GOMADE GABON - Expert en Sondages et Études de Marché',
    description: 'Cabinet leader en études de marché et sondages d\'opinion au Gabon. Services professionnels à Libreville.',
    url: 'https://www.gomadegabon.com',
    images: ['/gomade.png'],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <PartnersSection />
        
        {/* Section SEO cachée visuellement mais lisible par Google */}
        <section className="sr-only" aria-label="Informations SEO">
          <h2>Expertise en Sondages et Enquêtes au Gabon</h2>
          <p>
            GOMADE GABON est votre partenaire de confiance pour réaliser des sondages d'opinion, 
            enquêtes marketing et études de marché professionnelles au Gabon. Basé à Libreville, 
            notre cabinet accompagne les entreprises, ONG et institutions dans leurs décisions 
            stratégiques grâce à des méthodologies rigoureuses et des analyses approfondies.
          </p>
          <h3>Nos Services de Sondages et Études</h3>
          <ul>
            <li>Sondages d'opinion publique et politique au Gabon</li>
            <li>Enquêtes de satisfaction client et NPS</li>
            <li>Études de marché sectorielles et analyse concurrentielle</li>
            <li>Tests de produit et validation de concept</li>
            <li>Questionnaires en ligne et collecte terrain à Libreville</li>
            <li>Analyses comportementales et segmentation client</li>
            <li>Études de notoriété et image de marque</li>
            <li>Veille stratégique et intelligence économique</li>
          </ul>
          <h3>Zone d'intervention : Tout le Gabon</h3>
          <p>
            Nous intervenons dans toutes les régions du Gabon : Libreville, Port-Gentil, 
            Franceville, Oyem, Moanda, Tchibanga, Mouila, Lambaréné et toutes les provinces. 
            Notre expertise locale combinée à des standards internationaux garantit des 
            résultats fiables et actionnables.
          </p>
          <h3>Pourquoi choisir GOMADE pour vos enquêtes au Gabon ?</h3>
          <p>
            Méthodologies scientifiques, échantillonnage représentatif, questionnaires validés, 
            collecte multicanale, contrôle qualité rigoureux, analyses statistiques avancées, 
            rapports détaillés avec recommandations stratégiques. Nos partenaires incluent 
            Ipsos, WildAid et Advise, témoignant de notre expertise reconnue.
          </p>
        </section>
        
        <ServicesPreview />
        <QuickContact />
        
        {/* Schema.org FAQ pour Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Qu'est-ce qu'une étude de marché au Gabon ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Une étude de marché est une analyse approfondie permettant de comprendre votre secteur d'activité, vos concurrents, vos clients potentiels et les opportunités de croissance au Gabon. GOMADE GABON réalise des études quantitatives et qualitatives adaptées au contexte local gabonais avec des méthodologies rigoureuses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Combien coûte un sondage d'opinion au Gabon ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le coût d'un sondage dépend de plusieurs facteurs : taille de l'échantillon, zone géographique (Libreville, provinces), méthodologie utilisée (face-à-face, téléphone, en ligne) et complexité du questionnaire. GOMADE propose des devis personnalisés gratuits adaptés à votre budget et vos objectifs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quelle est la durée d'une enquête marketing ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "La durée varie selon l'ampleur du projet. Une enquête simple peut être réalisée en 2-3 semaines, tandis qu'une étude de marché complète nécessite généralement 4-8 semaines (conception, terrain, analyse, rapport). GOMADE GABON s'adapte à vos contraintes de délai."
                  }
                },
                {
                  "@type": "Question",
                  "name": "GOMADE intervient-il en dehors de Libreville ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, GOMADE GABON réalise des sondages et enquêtes sur l'ensemble du territoire gabonais : Libreville, Port-Gentil, Franceville, Oyem, Moanda, et toutes les provinces. Nous disposons d'un réseau d'enquêteurs formés dans toutes les régions du Gabon."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment garantissez-vous la qualité des sondages ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GOMADE applique des standards internationaux : échantillonnage scientifique représentatif, questionnaires pré-testés et validés, formation rigoureuse des enquêteurs, contrôle qualité à chaque étape, double vérification des données, analyses statistiques avancées. Nos partenaires comme Ipsos témoignent de notre excellence méthodologique."
                  }
                }
              ]
            })
          }}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}