'use client'

import { Trophy, Heart, Handshake, Briefcase, Lock, Zap, Users, Target } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    {
      icon: Trophy,
      title: "L'excellence",
      description: 'Nous visons toujours l\'excellence dans nos livrables et nos méthodes.',
    },
    {
      icon: Handshake,
      title: 'Le respect du client',
      description: 'L\'implication du client durant tout le déroulement du projet est importante pour nous.',
    },
    {
      icon: Users,
      title: 'La franchise et l\'intégrité',
      description: 'Nous ne proposons rien au-delà des compétences qui sont nôtres.',
    },
    {
      icon: Briefcase,
      title: 'Le professionnalisme',
      description: 'Nous mettons uniquement des compétences au service du client pour une solution idoine au problème posé.',
    },
    {
      icon: Lock,
      title: 'La confidentialité',
      description: 'Nous garantissons la stricte confidentialité des informations fournies avant, pendant et après notre action.',
    },
    {
      icon: Zap,
      title: 'L\'efficacité',
      description: 'Nous optimisons chaque processus pour livrer des résultats rapides et mesurables.',
    },
    {
      icon: Target,
      title: 'La précision',
      description: 'Chaque détail compte pour atteindre vos objectifs avec exactitude.',
    },
    {
      icon: Heart,
      title: 'L\'engagement',
      description: 'Nous nous impliquons pleinement dans chaque projet avec passion et dévouement.',
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 -z-20" />
      
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200/30 to-rose-200/20 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-gradient-to-tr from-rose-200/40 to-red-200/30 rounded-full blur-3xl -z-10 opacity-50" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full blur-3xl -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-red">
            Nos Valeurs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce qui guide chacune de nos actions et décisions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <div 
                key={value.title} 
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle container */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110 border-3 border-gray-200 bg-white/60 hover:border-orange-300">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" />
                </div>
                
                {/* Text content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
