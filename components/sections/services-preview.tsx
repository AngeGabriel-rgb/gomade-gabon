'use client'

import Link from 'next/link'
import { BarChart3, TrendingUp, PieChart } from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      icon: BarChart3,
      title: 'Études de Marché',
      description: 'Analyses approfondies pour comprendre votre secteur et vos concurrents.',
      href: '/services#etudes',
    },
    {
      icon: TrendingUp,
      title: 'Sondages d\'Opinion',
      description: 'Mesure de l\'opinion publique pour des décisions éclairées.',
      href: '/services#sondages',
    },
    {
      icon: PieChart,
      title: 'Enquêtes Marketing',
      description: 'Collecte et analyse de données pour optimiser vos campagnes.',
      href: '/services#enquetes',
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins pour transformer les données en stratégies gagnantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
