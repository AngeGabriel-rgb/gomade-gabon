'use client'

import { Lightbulb, Target, Heart } from 'lucide-react'

export default function MissionSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Notre mission',
      description: 'Mieux connaitre vos marchés et vos consommateurs; Identifier les dysfonctionnements de votre organisation; Faciliter votre prise de décision grâce à des données objectives et fiables; Devenir un acteur international majeur dans le domaine des études de marchés et de sondages au Gabon et dans la sous-région d\'Afrique centrale.',
    },
    {
      icon: Lightbulb,
      title: 'Qui sommes-nous ?',
      description: 'Nous sommes une entreprise innovante qui apporte des solutions d\'études et de conseil aux entreprises par la fourniture des données fiables, actualisées et exploitables grâce à une équipe expérimentée.',
    },
    {
      icon: Heart,
      title: 'Nos valeurs',
      description: 'L\'excellence, le respect du client, la franchise et l\'intégrité, le professionnalisme et la confidentialité guident chacune de nos actions.',
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
