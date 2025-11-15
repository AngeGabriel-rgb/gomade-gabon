import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'
import ServicesList from '@/components/services/services-list'
import ServiceDetail from '@/components/services/service-detail'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServicesList />
        <ServiceDetail
          id="etudes"
          title="Études de Marché"
          description="Comprenez votre marché en profondeur"
          fullDescription="Nos études de marché fournissent une analyse complète de votre secteur, de la concurrence, des tendances et des opportunités. Nous utilisons des méthodologies reconnues pour collecter et analyser les données essentielles à votre stratégie."
          benefits={[
            'Analyse compétitive approfondie',
            'Identification des tendances de marché',
            'Évaluation du potentiel de croissance',
            'Analyse des consommateurs et besoins',
            'Recommandations stratégiques',
          ]}
        />
        <ServiceDetail
          id="sondages"
          title="Sondages d'Opinion"
          description="Mesurez l'opinion publique et les perceptions"
          fullDescription="Les sondages d'opinion permettent de mesurer les attitudes, les perceptions et les intentions du public. Essentiels pour les campagnes politiques, les initiatives publiques et les stratégies de communication."
          benefits={[
            'Méthodologies scientifiques et rigoureuses',
            'Représentativité de l\'échantillon garantie',
            'Analyses statistiques avancées',
            'Visualisations claires des résultats',
            'Rapports détaillés et interprétations',
          ]}
        />
        <ServiceDetail
          id="enquetes"
          title="Enquêtes Marketing"
          description="Optimisez vos stratégies marketing"
          fullDescription="Nos enquêtes marketing vous permettent de comprendre votre audience cible, de tester de nouveaux concepts et d'optimiser vos campagnes marketing. Collecte et analyse de données pour maximiser votre ROI."
          benefits={[
            'Tests de concepts et prototypes',
            'Segmentation client avancée',
            'Mesure de satisfaction client',
            'Analyse du parcours client',
            'Recommandations d\'optimisation',
          ]}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
