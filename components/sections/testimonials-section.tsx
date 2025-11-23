'use client'

import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Wow, c'est absolument incroyable - un grand bravo à l'équipe pour avoir apporté ces super-pouvoirs d'IA à plus de développeurs visuels !",
      author: "Jean-Pierre M.",
      role: "Co-fondateur & CEO",
      handle: "@jeanpierre",
    },
    {
      quote: "GOMADE a transformé notre approche marketing. Les insights fournis ont été déterminants pour notre croissance. J'adore la fluidité du début à la fin.",
      author: "Marie K.",
      role: "Directrice Commerciale",
      handle: "@mariek",
    },
    {
      quote: "C'est de la pure magie. ✨ → Sitemaps en secondes → Wireframes en minutes → Copie complète écrite avec l'IA. Ça sauve la journée pour les designers web et produit !",
      author: "Paul D.",
      role: "Designer & Créateur de contenu",
      handle: "@pauld",
    },
    {
      quote: "Très excité par ce nouveau constructeur de site génératif alimenté par l'IA. J'adore le message et le positionnement : 'pour vous donner du pouvoir, pas pour vous remplacer'. Un langage stratégique pour faire monter à bord même les designers sceptiques.",
      author: "Sophie L.",
      role: "Designer",
      handle: "@sophiel",
    },
    {
      quote: "Attends quoi ?! Tu me dis que j'ai pu produire tout ça avec juste un prompt ? Dès que c'est arrivé, je me suis inscrit au plan le plus élevé TOUT DE SUITE. Si vous êtes un web designer, c'est honnêtement une évidence.",
      author: "Thomas R.",
      role: "Designer & Développeur Webflow",
      handle: "@thomasr",
    },
    {
      quote: "Yoooooooo, c'est 🔥. C'est l'une de mes équipes préférées que j'ai vu évoluer dans l'espace web. Ils tracent un sillon énorme dans lequel les designers et développeurs peuvent vibrer.",
      author: "Lucas V.",
      role: "Designer & Développeur",
      handle: "@lucasv",
    },
    {
      quote: "C'est le produit de site web IA le plus excitant que j'ai vu — excellent travail !!! Semble particulièrement puissant pour les professionnels du web sérieux cherchant à construire à l'échelle.",
      author: "Julie B.",
      role: "Co-fondatrice",
      handle: "@julieb",
    },
    {
      quote: "Les nouveaux outils d'IA Sitemap et Wireframe changent la donne ! Cela peut absolument accélérer notre développement et changera la façon dont nous construisons et concevons les sites à l'avenir.",
      author: "Karim A.",
      role: "Designer & Développeur",
      handle: "@karima",
    },
    {
      quote: "C'est fou. La quantité de temps et d'effort qui va dans ce que l'IA vient de générer en quelques secondes 🤯. Ça revitalise le plaisir dans le web design.",
      author: "Alexandre M.",
      role: "Designer",
      handle: "@alexm",
    },
  ]

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous aidons les équipes à construire mieux et plus vite.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-background p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.handle}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Fade out effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
