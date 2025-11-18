'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BarChart3, TrendingUp, PieChart, ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      icon: BarChart3,
      title: 'Études de Marché',
      description: 'Analyses approfondies et détaillées pour comprendre votre secteur, vos concurrents et les opportunités de croissance. Nous utilisons des méthodologies rigoureuses pour collecter des données pertinentes.',
      image: '/service/analyse.png',
      href: '/services#etudes',
    },
    {
      icon: TrendingUp,
      title: 'Sondages d\'Opinion',
      description: 'Mesure précise de l\'opinion publique pour des décisions éclairées. Nos sondages permettent de capturer la voix du citoyen et d\'identifier les tendances émergentes dans votre région.',
      image: '/service/sondage.png',
      href: '/services#sondages',
    },
    {
      icon: PieChart,
      title: 'Enquêtes Marketing',
      description: 'Collecte et analyse stratégique de données pour optimiser vos campagnes marketing. Comprenez vos clients, segmentez votre audience et maximisez votre ROI avec nos insights détaillés.',
      image: '/service/marketing.png',
      href: '/services#enquetes',
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <Image
        src="/service/equipe.webp"
        alt="Services background"
        fill
        className="object-cover -z-20"
        priority
      />
      
      {/* Gradient overlay on top of the background image */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="max-w-3xl">
        
        
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-accent-red block">
           NOS SERVICES
          </span>
          </h2>
        </div>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mt-8">
          Des solutions adaptées à vos besoins pour transformer les données en stratégies gagnantes et prendre des décisions éclairées.
        </p>
          </div>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
        const IconComponent = service.icon
        const isEven = index % 2 === 0
        
        return (
          // removed Link wrapper so the card surface is no longer clickable
          <div
            key={service.title}
            className={`group block cursor-default`}
          >
            <div className={`border-2 md:border-4 border-border rounded-2xl overflow-hidden p-6 md:p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:border-accent-red ${
          !isEven ? 'md:[direction:rtl]' : ''
            }`}>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center`}>
            <div className={`flex flex-col justify-center ${!isEven ? 'md:[direction:ltr]' : ''}`}>
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-red/20 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
            <IconComponent className="w-7 h-7 text-accent-red" />
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 group-hover:text-accent-red transition-colors duration-300">
            {service.title}
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
            {service.description}
              </p>
              
              {/* "En savoir plus" is now a link to the service */}
              <Link
          href={service.href}
          aria-label={`En savoir plus sur ${service.title}`}
          className="inline-flex items-center gap-2 text-accent-red font-semibold transition-all duration-300 hover:underline"
              >
          <span>En savoir plus</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl group-hover:shadow-xl">
              <Image
            src={service.image || "/"}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
            </div>
          </div>
        )
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
        href="/services"
        className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2 group"
          >
        Voir tous les services
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}