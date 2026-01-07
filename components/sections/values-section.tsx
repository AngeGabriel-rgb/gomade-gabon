import Image from "next/image"
import { Trophy, Handshake, Briefcase, Lock, Users } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Trophy,
      title: "L'excellence",
      description: "Nous visons toujours l'excellence dans nos livrables et nos méthodes de travail.",
    },
    {
      icon: Handshake,
      title: "Le respect du client",
      description: "Son implication durant tout le déroulement du projet est important pour nous.",
    },
    {
      icon: Users,
      title: "La franchise et l'intégrité",
      description: "Nous ne proposons rien au-delà des compétences qui sont nôtres.",
    },
    {
      icon: Briefcase,
      title: "Le professionnalisme",
      description:
        "Nous mettons uniquement des compétences au service du client pour une solution idoine au problème posé.",
    },
    {
      icon: Lock,
      title: "La confidentialité",
      description:
        "Nous garantissons la stricte confidentialité des informations qui nous sont fournies avant, pendant et après notre action.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.pinimg.com/1200x/73/a0/74/73a074286e4ed8ca6c36345232b2fb39.jpg"
          alt="Image de fond pour la section Valeurs"
          fill
          className="object-cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-800/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90 mb-6">
            Ce qui nous définit
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">Nos Valeurs</h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Les principes fondamentaux qui guident chacune de nos actions et décisions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.slice(0, 3).map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Icône avec cercle de fond */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>

                {/* Numéro décoratif */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-white/5 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          {values.slice(3, 5).map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Icône avec cercle de fond */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                    <IconComponent className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>

                {/* Numéro décoratif */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-white/5 select-none">
                  {String(index + 4).padStart(2, "0")}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
        </div>
      </div>
    </section>
  )
}
