'use client'

export default function PartnersSection() {
  const partners = [
    { name: 'Partenaire 1', logo: '/partenaires/ipsos.png' },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-gray-800 font-extrabold uppercase tracking-wider text-3xl md:text-5xl leading-tight mb-16">
        CEUX QUI NOUS FONT CONFIANCE
      </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
