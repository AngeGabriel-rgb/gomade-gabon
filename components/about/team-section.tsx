"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function DirectorSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://i.pinimg.com/736x/e2/b8/48/e2b8485465354adc9d2fac66a33484c0.jpg"
              alt="Directeur de Gomade Gabon"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Directeur Générale
                </span>
              </div>

              <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                Gomade Gabon accompagne les entreprises vers l'excellence
              </h1>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Depuis plusieurs années, nous servons avec passion nos clients au Gabon. Notre engagement reste inchangé
                : nous accordons la plus grande importance à l'excellence opérationnelle et au développement durable de
                nos partenaires.
              </p>

              <p>
                Notre expertise couvre l'accompagnement stratégique, le conseil en gestion, et la transformation
                digitale des entreprises gabonaises. Nous mettons notre savoir-faire au service de votre croissance et
                de votre réussite.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Clients accompagnés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
