'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/*
          Modification clé :
          - gap-8 mb-8: espace entre les colonnes.
          - md:grid-cols-4: affiche 4 colonnes sur les écrans moyens et plus.
          - grid-cols-1: affiche 1 colonne sur mobile.
          - text-center: Centre le texte dans les colonnes sur mobile.
          - md:text-left: Annule le centrage du texte et aligne à gauche sur les écrans moyens et plus.
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start"> {/* Ajout de flex pour centrer le logo sur mobile */}
            
            {/* Logo et Nom de l'entreprise */}
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4 hover:opacity-90 transition-opacity">
              <Image
                src="/gomade.png" // REMPLACEZ PAR LE CHEMIN RÉEL DE VOTRE LOGO
                alt="Logo GOMADE"
                width={115}
                height={100} 
                className="rounded"
              />
              <span className="font-bold text-lg">GOMADE GABON</span>
            </Link>
            
            <p className="text-sm opacity-90 max-w-xs mx-auto md:mx-0"> {/* Ajout de mx-auto pour centrer la description */}
              Cabinet d'études de marchés et sondages d'opinion au Gabon.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
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
          <div className="flex flex-col items-center md:items-start">
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
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-sm uppercase">Contact</h4>
            
            {/* Liste de Contact : utilisation de justify-center sur mobile */}
            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
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

            {/* Liens Sociaux : utilisation de justify-center sur mobile */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
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