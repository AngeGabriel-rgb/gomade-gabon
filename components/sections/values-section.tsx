"use client"

import { useEffect } from "react"
import { Trophy, Handshake, Briefcase, Lock, Users } from "lucide-react"
import Image from "next/image"

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean
      init: () => void
    }
  }
}

export default function ValuesSection() {
  const values = [
    {
      icon: Trophy,
      title: "L'excellence",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Handshake,
      title: "Le respect du client",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "La franchise et l'intégrité",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Le professionnalisme",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Lock,
      title: "La confidentialité",
      gradient: "from-slate-400 to-gray-600",
    },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} }
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init()
          window.UnicornStudio.isInitialized = true
        }
      }
      document.head.appendChild(script)
    } else if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init()
      window.UnicornStudio.isInitialized = true
    }
  }, [])

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <Image src="valeur.webp" alt="" fill className="object-cover -z-20" priority />

      {/* Animation UnicornStudio en arrière-plan */}
      <div
        data-us-project="p7Ff6pfTrb5Gs59C7nLC"
        className="absolute w-full h-full left-0 top-0 -z-10 mix-blend-overlay opacity-60"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-primary/40 -z-10" />

      {/* Motifs décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white mb-4">
            Ce qui nous définit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">Nos Valeurs</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ce qui guide chacune de nos actions et décisions
          </p>
        </div>

        {/* Grille responsive des valeurs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value) => {
            const IconComponent = value.icon
            return (
              <div key={value.title} className="group">
                {/* Card circulaire */}
                <div className="relative aspect-square max-w-[160px] sm:max-w-[180px] mx-auto">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                  />

                  <div className="relative w-full h-full bg-white/95 backdrop-blur-sm rounded-full flex flex-col items-center justify-center p-4 sm:p-6 shadow-2xl border border-white/50 group-hover:scale-105 group-hover:shadow-primary/20 transition-all duration-300">
                    {/* Icon */}
                    <IconComponent
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary mb-2"
                      strokeWidth={1.5}
                    />

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 text-center leading-tight">
                      {value.title}
                    </h3>
                  </div>
                </div>

                {/* Description visible on hover / always on mobile */}
                <p className="mt-3 text-xs sm:text-sm text-gray-200 text-center opacity-80 group-hover:opacity-100 transition-opacity line-clamp-3 px-2">
                
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
