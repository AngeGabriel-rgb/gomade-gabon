'use client'

export default function StorySection() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche */}
        <div className="bg-slate-50 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            À PROPOS DE <br /> GOMADE-GABON
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            GOMADE-GABON est un cabinet d'études de marché et de sondage qui a pour mission d'accompagner les entreprises et institutions dans la connaissance parfaite de leurs marchés et de leurs cibles afin de les orienter vers la bonne prise de décision Marketing.
          </p>
        </div>

        {/* Colonne droite */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Qui sommes-nous ?</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Nous sommes une entreprise innovante qui apporte des solutions d'études et de conseil aux entreprises par la fourniture des données fiables, actualisées et exploitables grâce à une équipe expérimentée.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3">Nos services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous réalisons pour vous des enquêtes marketing et sondages au Gabon et en Afrique quel que soit votre domaine d'activité. Dynamique, ambitieux et ayant une connaissance approfondie des enjeux liés à la disponibilité et à la fiabilité des données, GOMADE-GABON est votre meilleur partenaire en matière de collecte et traitement de données au Gabon en particulier et en Afrique en général.
          </p>
        </div>
      </div>
    </section>
  )
}