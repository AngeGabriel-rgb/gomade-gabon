'use client'

import { CheckCircle } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    {
      title: 'Expertise',
      description: 'Des professionnels expérimentés au service de vos besoins',
    },
    {
      title: 'Fiabilité',
      description: 'Des données précises et méthodologies éprouvées',
    },
    {
      title: 'Innovation',
      description: 'Utilisation des dernières technologies d\'analyse',
    },
    {
      title: 'Confidentialité',
      description: 'Protection absolue de vos données et résultats',
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nos Valeurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce qui guide chacune de nos actions et décisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="flex gap-4 p-6 bg-card rounded-lg border border-border">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
