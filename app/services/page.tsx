import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ServiceDetail from "@/components/services/service-detail"
import GoBackButton from "@/components/go-back-button"
import Breadcrumb from "@/components/ui/breadcrumb"
import { BarChart3, TrendingUp, PieChart } from "lucide-react"

export default function ServicesPage() {
  const servicePaths = [{ label: "Services", href: "/services", isCurrent: true }]

  const services = [
    {
      id: "etudes",
      icon: BarChart3,
      title: "Études de Marché",
      description:
        "Nous intervenons dans la réalisation des études de marchés. Vous avez un projet et vous souhaitez vérifier s'il est cohérent du point de vue commercial et qu'il y'a une réelle opportunité à saisir? nous sommes disposés à vous accompagner et à analyser les tendances de votre futur marché.",
      backgroundImage: "https://i.pinimg.com/1200x/9a/28/cd/9a28cdf44c9efa4453d78171edcf8896.jpg",
    },
    {
      id: "sondages",
      icon: TrendingUp,
      title: "Sondages d'Opinion",
      description:
        "Nous intervenons dans la réalisation de vos sondages. Grâce à nos sondages sur mesure, vous serez capable d'identifier les éléments de satisfaction de vos clients et de mettre en place des actions pour améliorer vos produits ou services, voire de changer de stratégie.",
      backgroundImage: "https://i.pinimg.com/1200x/24/86/4f/24864fa604c48845ee9e64ebc6441c3c.jpg",
    },
    {
      id: "enquetes",
      icon: PieChart,
      title: "Enquêtes Marketing",
      description:
        "Nos enquêtes marketing vous permettent de comprendre votre audience cible, de tester de nouveaux concepts et d'optimiser vos campagnes marketing. Collecte et analyse de données pour maximiser votre ROI.",
      backgroundImage: "https://i.pinimg.com/736x/44/9e/b4/449eb4f6ef9a4a502045e600f4469ed2.jpg",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* En-tête de page avec Bouton Retour et Fil d'Ariane */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-2">
            <GoBackButton />
            <h1 className="text-3xl font-bold text-gray-900">Nos Services</h1>
          </div>

          <div className="ml-2">
            <Breadcrumb paths={servicePaths} />
          </div>
        </div>

        {/* Services List intégré */}
        <section className="bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">Nos Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nous réalisons pour vous des enquêtes Marketing et sondages au Gabon et en Afrique quel que soit votre domaine d’activité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="group relative overflow-hidden rounded-xl hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.backgroundImage})` }}
                    />

                    <div className="absolute inset-0 bg-[#B3CFE5]/20 group-hover:bg-white/95 transition-all duration-300" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Top-left corner */}
                      <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#B3CFE5] group-hover:w-20 transition-all duration-500 delay-100" />
                      <div className="absolute top-0 left-0 w-0.5 h-0 bg-[#B3CFE5] group-hover:h-20 transition-all duration-500 delay-100" />

                      {/* Top-right corner */}
                      <div className="absolute top-0 right-0 w-0 h-0.5 bg-[#B3CFE5] group-hover:w-20 transition-all duration-500 delay-200" />
                      <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#B3CFE5] group-hover:h-20 transition-all duration-500 delay-200" />

                      {/* Bottom-right corner */}
                      <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#B3CFE5] group-hover:w-20 transition-all duration-500 delay-300" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#B3CFE5] group-hover:h-20 transition-all duration-500 delay-300" />

                      {/* Bottom-left corner */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B3CFE5] group-hover:w-20 transition-all duration-500 delay-400" />
                      <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#B3CFE5] group-hover:h-20 transition-all duration-500 delay-400" />
                    </div>

                    <div className="relative z-10 p-8 min-h-[400px] flex flex-col justify-between">
                      <div>
                        <div className="w-14 h-14 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                          <IconComponent className="w-7 h-7 text-[#B3CFE5]" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>

                        <p className="text-foreground leading-relaxed text-balance opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-4">
                        <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground rounded-lg font-semibold text-foreground hover:bg-foreground hover:text-background transition-all">
                          EN SAVOIR PLUS
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
        <ServiceDetail
          id="etudes"
          title="Études de Marché"
          description="Vérifier la cohérence commerciale de votre projet"
          fullDescription="Nous intervenons dans la réalisation des études de marchés. Vous avez un projet et vous souhaitez vérifier s'il est cohérent du point de vue commercial et qu'il y'a une réelle opportunité à saisir? nous sommes disposés à vous accompagner et à analyser les tendances de votre futur marché."
          benefits={[
            "Vérification de la cohérence commerciale",
            "Analyse des tendances de marché",
            "Identification des opportunités",
            "Étude de faisabilité complète",
            "Recommandations stratégiques fondées sur les données",
          ]}
        />
        <ServiceDetail
          id="sondages"
          title="Sondages d'Opinion"
          description="Identifier les éléments de satisfaction de vos clients"
          fullDescription="Nous intervenons dans la réalisation de vos sondages. Grâce à nos sondages sur mesure, vous serez capable d'identifier les éléments de satisfaction de vos clients et de mettre en place des actions pour améliorer vos produits ou services, voire de changer de stratégie."
          benefits={[
            "Identification des éléments de satisfaction clients",
            "Sondages sur mesure adaptés à vos besoins",
            "Actions correctives et stratégiques",
            "Amélioration continue des produits/services",
            "Rapports détaillés avec recommandations",
          ]}
        />
        <ServiceDetail
          id="enquetes"
          title="Enquêtes Marketing"
          description="Optimiser vos stratégies marketing"
          fullDescription="Nos enquêtes marketing vous permettent de comprendre votre audience cible, de tester de nouveaux concepts et d'optimiser vos campagnes marketing. Collecte et analyse de données pour maximiser votre ROI."
          benefits={[
            "Tests de concepts et prototypes",
            "Segmentation client avancée",
            "Mesure de satisfaction client",
            "Analyse du parcours client",
            "Recommandations d'optimisation",
          ]}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}