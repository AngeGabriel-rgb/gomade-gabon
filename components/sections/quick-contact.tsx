'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageCircle } from 'lucide-react'

export default function QuickContact() {
  return (
    <section className="relative py-28">
      <Image
        src="/contact/collaboration.png"
        alt="Contact background"
        fill
        className="absolute inset-0 w-full h-full object-cover opacity-90 -z-10"
      />
      <div 
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          background: 'linear-gradient(137.92deg, rgba(165, 70, 73, 0.85) 20.43%, rgba(220, 60, 65, 0.8) 49.66%, rgba(200, 30, 35, 0.9) 92.38%)'
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-pretty">
              Êtes-vous prêt à transformer vos données?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Découvrez comment nos études de marché et sondages d'opinion peuvent vous aider à prendre les meilleures décisions pour votre entreprise. Contactez-nous dès aujourd'hui!
            </p>
          </div>

          <div className="flex-1 mt-8 md:mt-0 flex flex-col md:flex-row gap-4 md:justify-end w-full md:w-auto">
            <a
              href="https://wa.me/241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-accent-red px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              Nous contacter
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Formulaire complet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
