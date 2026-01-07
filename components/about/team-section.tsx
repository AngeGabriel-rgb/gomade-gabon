 "use client"
import Image from "next/image"
import { Award, Briefcase, Target, Quote } from "lucide-react"

export default function DirectorSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/directeur.jpeg" alt="Directeur de Gomade Gabon" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

           
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Directeur Général
                </span>
              </div>

              <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                Un leadership fondé sur l'expertise et la passion
              </h1>
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Diplômé en Sciences de Gestion, j'ai depuis plusieurs années, accompagné les entreprises avec passion.
              </p>

              <p>
                Mon engagement reste inchangé : j'accorde la plus grande importance à l'excellence opérationnelle et au
                développement durable de nos partenaires.
              </p>

              <p>
                Mon expertise est couronnée de{" "}
                <span className="font-semibold text-foreground">12 années d'expériences</span> à Cible Gabon,
                Positionnement Marketing, Ipsos, Advices études et conseils... et couvre l'accompagnement stratégique,
                le conseil en gestion et la transformation digitale des entreprises.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-full bg-primary/10">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Stratégie</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Conseil en gestion</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <div className="p-2 rounded-full bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">Transformation digitale</span>
              </div>
            </div>

            <div className="relative mt-6 p-6 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <p className="text-lg font-medium text-foreground italic">
                "À Gomade-Gabon, nous mettons notre savoir-faire au service de votre croissance et de votre réussite."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
