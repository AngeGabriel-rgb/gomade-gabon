'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function QuickContact() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à explorer vos marchés?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:contact@gomade.ga"
            className="flex items-center gap-3 bg-white text-primary px-6 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-all hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            contact@gomade.ga
          </a>
          <a
            href="https://wa.me/241"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            <Phone size={20} />
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="bg-white text-primary px-6 py-4 rounded-lg font-bold hover:bg-primary-foreground transition-all hover:scale-105 shadow-lg"
          >
            Formulaire de contact
          </Link>
        </div>
      </div>
    </section>
  )
}
