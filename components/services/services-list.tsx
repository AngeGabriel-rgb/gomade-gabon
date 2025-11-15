'use client'

import { BarChart3, TrendingUp, PieChart, ArrowRight } from 'lucide-react'

export default function ServicesList() {
  const services = [
    {
      id: 'etudes',
      icon: BarChart3,
      title: 'Études de Marché',
      description: 'Analyse approfondie de votre marché, concurrence et opportunités pour une stratégie éclairée.',
    },
    {
      id: 'sondages',
      icon: TrendingUp,
      title: 'Sondages d\'Opinion',
      description: 'Mesure rigoureuse de l\'opinion publique pour vos campagnes et initiatives.',
    },
    {
      id: 'enquetes',
      icon: PieChart,
      title: 'Enquêtes Marketing',
      description: 'Collecte et analyse de données pour optimiser vos stratégies et augmenter votre ROI.',
    },
  ]

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h1>
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
                className="group p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  En savoir plus
                  <ArrowRight size={20} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
