'use client'

export default function PartnersSection() {
  const partners = [
    { name: 'Partenaire 1', initial: 'P1' },
    { name: 'Partenaire 2', initial: 'P2' },
    { name: 'Partenaire 3', initial: 'P3' },
    { name: 'Partenaire 4', initial: 'P4' },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm font-semibold mb-12 uppercase tracking-wide">
          Partenaires de confiance
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary text-sm">{partner.initial}</span>
              </div>
              <span className="ml-4 font-medium text-foreground hidden sm:inline">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
