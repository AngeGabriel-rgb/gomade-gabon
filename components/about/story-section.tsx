'use client'

export default function StorySection() {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Notre Histoire
            </h1>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              GOMADE GABON est un cabinet d'études de marchés et sondages d'opinion fondé avec la conviction que les données fiables sont la base de toute stratégie réussie.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Depuis notre création, nous accompagnons les entreprises, institutions et organisations gabonaises dans la compréhension approfondie de leurs marchés et de leurs cibles.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre engagement envers l'excellence et la rigueur méthodologique fait de nous le partenaire de confiance des décideurs pour orienter leurs stratégies vers le succès.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border">
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-bold text-primary">100+</p>
                <p className="text-muted-foreground">Projets réalisés</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">10+</p>
                <p className="text-muted-foreground">Années d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
