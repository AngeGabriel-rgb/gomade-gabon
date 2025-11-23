"use client"

import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Notre Mission - Large card on the left */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
            <Image
              src="https://i.pinimg.com/736x/30/df/82/30df8204fdaacc4db94bb6f77ffe6a46.jpg"
              alt="Notre mission"
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Notre Mission</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 leading-tight">
                Faciliter votre prise de décision grâce à des données objectives et fiables.
              </h2>
            </div>
          </div>

          {/* Right column with two stacked cards */}
          <div className="flex flex-col gap-6">
            
            {/* Qui sommes-nous ? - SANS DÉGRADÉ DE COULEUR DEVANT L'IMAGE */}
            <div className="relative h-[240px] rounded-2xl overflow-hidden p-8 bg-white"> {/* Ajout de bg-white pour un fond blanc si l'image est très transparente */}
              
              {/* IMAGE DE FOND : Opacité ajustée à 0.2 pour plus de présence */}
              <Image
                src="https://i.pinimg.com/736x/d0/f5/24/d0f5240f66c42235b53bdc51d7e12f23.jpg"
                alt="Motif de fond"
                fill
                style={{ objectFit: 'cover', opacity: 0.2 }} 
                quality={60}
              />
              
              {/* ❌ RETIRÉ : L'élément div du dégradé a été supprimé ici. */}
              
              <div className="relative z-10">
                <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Qui sommes-nous ?</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 leading-tight">Une entreprise innovante.</h3>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  Nous apportons des solutions d'études et de conseil aux entreprises par la fourniture des données
                  fiables, actualisées et exploitables grâce à une équipe.
                </p>
              </div>
            </div>

            {/* Nos valeurs */}
            <div className="relative h-[240px] rounded-2xl overflow-hidden group">
              <Image
                src="https://i.pinimg.com/736x/fe/eb/75/feeb75183886b4e710ea2990a3131b38.jpg"
                alt="Nos valeurs"
                fill
                style={{ objectFit: 'cover' }}
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="text-red-600 font-bold text-sm uppercase tracking-wide">Nos Valeurs</span>
                <h3 className="text-2xl font-bold mt-2 leading-tight">Excellence, respect et intégrité.</h3>
                <p className="mt-2 text-sm text-white/90">
                  Le professionnalisme et la confidentialité guident chacune de nos actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}