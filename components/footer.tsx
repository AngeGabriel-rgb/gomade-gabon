'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-sm">G</span>
              </div>
              <span className="font-bold">GOMADE</span>
            </div>
            <p className="text-sm opacity-90">
              Cabinet d'études de marchés et sondages d'opinion au Gabon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#etudes" className="opacity-80 hover:opacity-100 transition-opacity">
                  Études de marché
                </Link>
              </li>
              <li>
                <Link href="/services#sondages" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sondages d'opinion
                </Link>
              </li>
              <li>
                <Link href="/services#enquetes" className="opacity-80 hover:opacity-100 transition-opacity">
                  Enquêtes marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">+241 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80 break-all">contact@gomade.ga</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">Libreville, Gabon</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-80">
            © 2025 GOMADE GABON. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
