'use client'

export default function TeamSection() {
  const team = [
    {
      name: 'Direction',
      role: 'Direction Générale',
      bio: 'Pilotage stratégique et accompagnement des clients.'
    },
    {
      name: 'Équipe d\'Études',
      role: 'Analystes et Consultants',
      bio: 'Experts en méthodes quantitatives et qualitatives pour fournir des données exploitables.'
    },
    {
      name: 'Responsable Sondages',
      role: 'Mesure d\'opinion',
      bio: 'Conception et mise en œuvre de sondages sur mesure.'
    },
    {
      name: 'Chef de Projet',
      role: 'Coordination & Qualité',
      bio: 'Pilotage des études et garantie de la qualité des livrables.'
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des professionnels passionnés et expérimentés au service de votre succès.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-6 bg-card rounded-xl border border-border hover:border-accent transition-colors text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary text-2xl">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
