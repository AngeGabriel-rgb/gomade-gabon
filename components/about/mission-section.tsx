'use client'

import { Lightbulb, Target, Heart } from 'lucide-react'

export default function MissionSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Fournir aux décideurs les insights fiables dont ils ont besoin pour transformer leurs marchés et atteindre leurs objectifs stratégiques.',
    },
    {
      icon: Lightbulb,
      title: 'Notre Vision',
      description: 'Être le premier cabinet gabonais de référence en études de marché et sondages d\'opinion, reconnu pour son excellence et son impact.',
    },
    {
      icon: Heart,
      title: 'Nos Valeurs',
      description: 'Intégrité, rigueur, innovation et engagement envers nos clients constituent les fondations de notre travail quotidien.',
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <div key={pillar.title} className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
