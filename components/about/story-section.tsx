"use client"

import Image from "next/image"

export default function StorySection() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Colonne gauche */}
        <div className="bg-slate-50 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            À PROPOS DE <br /> GOMADE-GABON
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            GOMADE-GABON est un cabinet d'études de marché et de sondage qui a pour mission d'accompagner les
            entreprises et institutions dans la connaissance parfaite de leurs marchés et de leurs cibles afin de les
            orienter vers la bonne prise de décision Marketing.
          </p>

          <div className="relative h-[250px] lg:h-[300px] rounded-2xl overflow-hidden group">
            <Image
              src="/succes.webp"
              alt="Notre mission"
              fill
              style={{ objectFit: "cover" }}
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                <span className="text-white">Votre Décision Compte !</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Colonne droite */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Qui sommes-nous ?</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Nous sommes une entreprise innovante qui apporte des solutions d'études et de conseil aux entreprises par la
            fourniture des données fiables, actualisées et exploitables grâce à une équipe expérimentée.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3">Nos services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous réalisons pour vous des enquêtes marketing et sondages au Gabon et en Afrique quel que soit votre
            domaine d'activité. Dynamique, ambitieux et ayant une connaissance approfondie des enjeux liés à la
            disponibilité et à la fiabilité des données, GOMADE-GABON est votre meilleur partenaire en matière de
            collecte et traitement de données au Gabon en particulier et en Afrique en général.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Nos missions</h2>
          <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
            <li>• Mieux connaitre vos marchés et vos consommateurs;</li>
            <li>• Identifier les dysfonctionnements de votre organisation;</li>
            <li>• Faciliter votre prise de décision grâce à des données objectives et fiables;</li>
            <li>
              • Devenir un acteur international majeur dans le domaine des études de marchés, de sondages au Gabon et
              notamment dans la sous-région région d'Afrique centrale.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
