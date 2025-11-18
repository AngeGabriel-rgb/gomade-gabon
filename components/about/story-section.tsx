'use client'

export default function StorySection() {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">À PROPOS DE GOMADE-GABON</h1>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              GOMADE-GABON est un cabinet d’études de marché et de sondage qui a pour mission d’accompagner les entreprises et institutions dans la connaissance parfaite de leurs marchés et de leurs cibles afin de les orienter vers la bonne prise de décision Marketing.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">Qui sommes-nous ?</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Nous sommes une entreprise innovante qui apporte des solutions d’études et de conseil aux entreprises par la fourniture des données fiables, actualisées et exploitables grâce à une équipe expérimentée.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">Nos services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous réalisons pour vous des enquêtes marketing et sondages au Gabon et en Afrique quel que soit votre domaine d’activité. Dynamique, ambitieux et ayant une connaissance approfondie des enjeux liés à la disponibilité et à la fiabilité des données, GOMADE-GABON est votre meilleur partenaire en matière de collecte et traitement de données au Gabon en particulier et en Afrique en général.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border">
            <div className="space-y-4">
              <div>
                <p className="text-4xl font-bold text-primary">—</p>
                <p className="text-muted-foreground">Cabinet d'études et sondages</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">—</p>
                <p className="text-muted-foreground">Interventions au Gabon et en Afrique</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">—</p>
                <p className="text-muted-foreground">Équipe expérimentée</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
