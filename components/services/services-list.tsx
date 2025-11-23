"use client"



import { BarChart3, TrendingUp, PieChart } from "lucide-react"



export default function ServicesList() {

  const services = [

    {

      id: "etudes",

      icon: BarChart3,

      title: "Études de Marché",

      description:

        "Nous intervenons dans la réalisation des études de marché pour vérifier la cohérence commerciale d'un projet et analyser les tendances de votre futur marché.",

      backgroundImage: "https://i.pinimg.com/1200x/9a/28/cd/9a28cdf44c9efa4453d78171edcf8896.jpg",

    },

    {

      id: "sondages",

      icon: TrendingUp,

      title: "Sondages d'Opinion",

      description:

        "Grâce à nos sondages sur mesure, vous identifierez les éléments de satisfaction de vos clients et pourrez mettre en place des actions correctives ou repenser votre stratégie.",

      backgroundImage: "https://i.pinimg.com/1200x/24/86/4f/24864fa604c48845ee9e64ebc6441c3c.jpg",

    },

    {

      id: "enquetes",

      icon: PieChart,

      title: "Enquêtes Marketing",

      description:

        "Collecte et analyse stratégique de données pour optimiser vos campagnes marketing, segmenter votre audience et maximiser votre ROI.",

      backgroundImage: "https://i.pinimg.com/736x/44/9e/b4/449eb4f6ef9a4a502045e600f4469ed2.jpg",

    },

  ]



  return (

    <section className="pt-32 pb-20 bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Nos Services</h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">

            Des solutions d'études et de recherche adaptées à vos besoins spécifiques.

          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

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

  )

}