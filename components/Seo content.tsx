/**
 * Composant SEO Content
 * 
 * Ce composant ajoute du contenu riche en mots-clés pour le SEO
 * sans affecter le design visuel de votre site.
 * 
 * Le contenu est caché visuellement (sr-only) mais reste accessible
 * aux moteurs de recherche et aux lecteurs d'écran.
 * 
 * INSTALLATION :
 * 1. Créez ce fichier : components/seo-content.tsx
 * 2. Importez-le dans votre page.tsx : import SeoContent from '@/components/seo-content'
 * 3. Ajoutez-le dans votre <main> : <SeoContent />
 */

export default function SeoContent() {
  return (
    <>
      {/* Contenu SEO caché visuellement (classe sr-only de Tailwind) */}
      <section className="sr-only" aria-label="Informations détaillées sur nos services">
        <h2>Expert en Sondages et Études de Marché au Gabon</h2>
        
        <article>
          <h3>Cabinet d'Études de Marché à Libreville</h3>
          <p>
            GOMADE GABON est le cabinet de référence pour les études de marché, sondages d'opinion 
            et enquêtes marketing au Gabon. Basé à Libreville, nous accompagnons entreprises, ONG, 
            institutions publiques et organisations internationales dans leurs prises de décisions 
            stratégiques depuis plusieurs années.
          </p>
          <p>
            Notre expertise couvre l'ensemble du spectre des études marketing : sondages quantitatifs, 
            enquêtes qualitatives, focus groups, entretiens approfondis, études de satisfaction, 
            tests de produit, analyses de marché sectorielles, veille concurrentielle et bien plus encore.
          </p>
        </article>

        <article>
          <h3>Services de Sondages d'Opinion Professionnels</h3>
          <p>
            Nos sondages d'opinion permettent de mesurer avec précision les perceptions, attitudes 
            et comportements de votre cible au Gabon. Nous utilisons des méthodologies scientifiques 
            rigoureuses garantissant la représentativité et la fiabilité des résultats.
          </p>
          <p>
            Que ce soit pour un sondage politique, une étude de notoriété de marque, une mesure 
            d'opinion publique ou une enquête de satisfaction client, GOMADE dispose des compétences 
            et de l'expérience nécessaires pour vous fournir des insights précieux et actionnables.
          </p>
        </article>

        <article>
          <h3>Enquêtes Marketing Stratégiques</h3>
          <p>
            Nos enquêtes marketing vous aident à comprendre votre marché, identifier vos clients, 
            analyser la concurrence et détecter les opportunités de croissance au Gabon. Nous collectons 
            et analysons des données qualitatives et quantitatives pour éclairer vos décisions business.
          </p>
          <ul>
            <li>Enquêtes de satisfaction client et mesure du Net Promoter Score (NPS)</li>
            <li>Études de segmentation et profilage de clientèle</li>
            <li>Tests de concept et validation de nouveaux produits</li>
            <li>Analyses du parcours client et des points de contact</li>
            <li>Études de prix et élasticité de la demande</li>
            <li>Enquêtes de notoriété assistée et spontanée</li>
            <li>Études d'image de marque et positionnement</li>
            <li>Recherches sur les comportements d'achat</li>
          </ul>
        </article>

        <article>
          <h3>Méthodologie d'Enquête Rigoureuse</h3>
          <p>
            GOMADE GABON applique les standards internationaux de la recherche marketing adaptés 
            au contexte gabonais. Notre approche méthodologique comprend :
          </p>
          <ul>
            <li>Définition précise des objectifs et problématiques de recherche</li>
            <li>Conception de questionnaires validés et pré-testés</li>
            <li>Échantillonnage représentatif selon des critères scientifiques</li>
            <li>Collecte de données multicanale (face-à-face, téléphone, en ligne, mobile)</li>
            <li>Formation et supervision rigoureuse des enquêteurs de terrain</li>
            <li>Contrôle qualité systématique à chaque étape du processus</li>
            <li>Saisie et nettoyage des données avec double vérification</li>
            <li>Analyses statistiques avancées (tris croisés, corrélations, régressions)</li>
            <li>Rapports détaillés avec visualisations claires et recommandations stratégiques</li>
          </ul>
        </article>

        <article>
          <h3>Couverture Géographique : Tout le Gabon</h3>
          <p>
            Bien que notre siège soit à Libreville, GOMADE GABON intervient sur l'ensemble du 
            territoire national. Nous réalisons des enquêtes et sondages dans toutes les provinces :
          </p>
          <ul>
            <li><strong>Estuaire</strong> : Libreville, Ntoum, Kango, Cocobeach</li>
            <li><strong>Haut-Ogooué</strong> : Franceville, Moanda, Mounana, Okondja</li>
            <li><strong>Ogooué-Maritime</strong> : Port-Gentil, Omboué, Gamba</li>
            <li><strong>Woleu-Ntem</strong> : Oyem, Bitam, Mitzic, Minvoul</li>
            <li><strong>Ngounié</strong> : Mouila, Ndendé, Tchibanga</li>
            <li><strong>Moyen-Ogooué</strong> : Lambaréné, Ndjolé</li>
            <li><strong>Ogooué-Ivindo</strong> : Makokou, Booué</li>
            <li><strong>Ogooué-Lolo</strong> : Koulamoutou, Lastoursville</li>
            <li><strong>Nyanga</strong> : Tchibanga, Mayumba</li>
          </ul>
          <p>
            Notre réseau d'enquêteurs formés et supervisés garantit une collecte de données 
            de qualité dans toutes les régions du Gabon, urbaines comme rurales.
          </p>
        </article>

        <article>
          <h3>Secteurs d'Activité et Clients</h3>
          <p>
            GOMADE GABON accompagne des clients variés dans de nombreux secteurs :
          </p>
          <ul>
            <li>Biens de consommation et grande distribution</li>
            <li>Télécommunications et technologies</li>
            <li>Banques, assurances et services financiers</li>
            <li>Santé et pharmacie</li>
            <li>Énergie et ressources naturelles</li>
            <li>Transports et logistique</li>
            <li>Tourisme et hôtellerie</li>
            <li>Médias et communication</li>
            <li>Organisations non gouvernementales (ONG)</li>
            <li>Institutions publiques et gouvernementales</li>
            <li>Organismes internationaux</li>
          </ul>
          <p>
            Nos partenaires de confiance incluent Ipsos (leader mondial des études de marché), 
            WildAid (ONG internationale) et Advise, témoignant de notre expertise reconnue et 
            de la qualité de nos services.
          </p>
        </article>

        <article>
          <h3>Types d'Études Réalisées</h3>
          <p>GOMADE propose une gamme complète d'études marketing et de sondages :</p>
          
          <h4>Études Quantitatives</h4>
          <ul>
            <li>Sondages d'opinion à grande échelle (500+ répondants)</li>
            <li>Enquêtes omnibus (questionnaires mutualisés)</li>
            <li>Panels consommateurs et tracking continu</li>
            <li>Études ad-hoc personnalisées</li>
          </ul>

          <h4>Études Qualitatives</h4>
          <ul>
            <li>Focus groups et discussions de groupe</li>
            <li>Entretiens individuels approfondis</li>
            <li>Observations ethnographiques</li>
            <li>Communautés en ligne</li>
          </ul>

          <h4>Études Spécialisées</h4>
          <ul>
            <li>Mystery shopping (clients mystère)</li>
            <li>Tests d'usage et tests produit</li>
            <li>Études de prix et trade-off</li>
            <li>Analyses conjointes</li>
          </ul>
        </article>

        <article>
          <h3>Avantages de Travailler avec GOMADE</h3>
          <ul>
            <li><strong>Expertise locale</strong> : Connaissance approfondie du marché gabonais</li>
            <li><strong>Standards internationaux</strong> : Méthodologies éprouvées et rigoureuses</li>
            <li><strong>Équipe qualifiée</strong> : Consultants expérimentés et enquêteurs formés</li>
            <li><strong>Technologies modernes</strong> : Outils CATI, CAWI, tablettes pour collecte mobile</li>
            <li><strong>Réactivité</strong> : Délais respectés et communication transparente</li>
            <li><strong>Confidentialité</strong> : Protection totale de vos données sensibles</li>
            <li><strong>Rapports actionnables</strong> : Recommandations concrètes pour la prise de décision</li>
            <li><strong>Support continu</strong> : Accompagnement avant, pendant et après l'étude</li>
          </ul>
        </article>

        <article>
          <h3>Contact et Devis Gratuit</h3>
          <p>
            Pour toute demande d'information ou devis gratuit pour votre projet de sondage, 
            enquête marketing ou étude de marché au Gabon, contactez GOMADE :
          </p>
          <ul>
            <li>Téléphone : +241 04 51 11 72</li>
            <li>Email : goodmarketingdecisionsgabon@gmail.com</li>
            <li>Adresse : Dernière Kar motors, bas de Guegue, Libreville, Gabon</li>
            <li>WhatsApp : 066 73 19 76</li>
          </ul>
          <p>
            Notre équipe vous répondra dans les 24h pour discuter de vos besoins et vous proposer 
            une solution sur mesure adaptée à vos objectifs et votre budget.
          </p>
        </article>

        <article>
          <h3>Mots-clés : Sondage, Enquête, Étude de Marché Gabon</h3>
          <p>
            Sondage Gabon, enquête marketing Gabon, étude de marché Gabon, sondage Libreville, 
            enquête Libreville, cabinet études Gabon, sondage opinion Gabon, questionnaire en ligne, 
            collecte données Gabon, analyse marché, insights marketing, recherche consommateur, 
            satisfaction client, test produit, étude notoriété, segmentation, NPS, focus group Gabon, 
            entretien qualitatif, panel consommateur, veille concurrentielle, intelligence marketing, 
            consultant marketing Gabon, agence études marché Libreville.
          </p>
        </article>
      </section>

      {/* Schema.org BreadcrumbList pour navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.gomadegabon.com"
              }
            ]
          })
        }}
      />
    </>
  )
}