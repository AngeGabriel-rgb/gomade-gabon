"use client"

import Image from 'next/image' // Importez le composant Image de Next.js
import { Trophy, Handshake, Briefcase, Lock, Users } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Trophy,
      title: "L'excellence",
      description: "Nous visons toujours l'excellence dans nos livrables et nos méthodes.",
      gradient: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50/80",
    },
    {
      icon: Handshake,
      title: "Le respect du client",
      description: "L'implication du client durant tout le déroulement du projet est importante pour nous.",
      gradient: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50/80",
    },
    {
    icon: Users,
    title: "La franchise et l'intégrité",
    description: "Nous ne proposons rien au-delà des compétences qui sont nôtres.",
    gradient: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50/80",
    },
    {
      icon: Briefcase,
      title: "Le professionnalisme",
      description:
        "Nous mettons uniquement des compétences au service du client pour une solution idoine au problème posé.",
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50/80",
    },
    {
      icon: Lock,
      title: "La confidentialité",
      description:
        "Nous garantissons la stricte confidentialité des informations fournies avant, pendant et après notre action.",
      gradient: "from-slate-400 to-gray-600",
      bgColor: "bg-slate-50/80",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden text-white">
      {/* Conteneur pour l'image de fond next/image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.pinimg.com/1200x/73/a0/74/73a074286e4ed8ca6c36345232b2fb39.jpg" // REMPLACEZ PAR LE CHEMIN DE VOTRE IMAGE
          alt="Image de fond pour la section Valeurs"
          fill // Remplit le parent
          style={{ objectFit: 'cover' }} // S'assure que l'image couvre le conteneur
          quality={80} // Qualité de l'image (optionnel, 75 par défaut)
          priority // Charge l'image prioritairement si elle est au-dessus du pli
        />
        {/* Overlay pour assombrir l'image et améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Ajustez l'opacité (0-100) */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">Nos Valeurs</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ce qui guide chacune de nos actions et décisions
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {values.slice(0, 5).map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={value.title} className="group relative">
                {/* Elliptical container */}
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-slate-200 rounded-full blur-xl opacity-50" />

                  {/* Main ellipse card */}
                  <div className="relative w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-6 shadow-lg border border-slate-200">
                    {/* Icon */}
                    <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-red-600 mb-2" strokeWidth={2} />

                    {/* Title inside ellipse */}
                    <h3 className="text-sm md:text-base font-bold text-slate-900 text-center leading-tight">
                      {value.title}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}