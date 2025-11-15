'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ]

  // WhatsApp configuration
  const whatsappNumber = '062489699'
  const whatsappMessage = encodeURIComponent('Bonjour, je souhaite connaître vos services et obtenir un devis gratuit.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    closeMenu()
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-border/20 animate-slide-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        
        {/* LOGO - Taille réduite */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
          onClick={() => handleNavClick('/')}
          aria-label="GOMADE GABON - Accueil"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/gomade.png"
              alt="GOMADE GABON Logo"
              width={48}
              height={48}
              priority
              className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="hidden sm:inline font-bold text-base md:text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            GOMADE GABON
          </span>
        </Link>

        {/* DESKTOP NAVIGATION - Espacement réduit */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative px-3 py-1.5 text-foreground font-medium text-sm group"
              aria-current={activeLink === link.href ? 'page' : undefined}
              tabIndex={0}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />
            </Link>
          ))}
        </div>

        {/* WHATSAPP BUTTON - Call To Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 lg:px-5 py-2 rounded-lg font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl group"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Basculer le menu de navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION - Slide Down Animation */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t border-border/20 animate-fade-in-up"
          role="navigation"
          aria-label="Navigation mobile"
        >
          <div className="px-4 py-4 space-y-2 flex flex-col bg-muted/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-foreground font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                onClick={() => handleNavClick(link.href)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-medium w-full hover:shadow-lg transition-shadow mt-2"
              onClick={closeMenu}
            >
              <MessageCircle size={20} />
              <span>Contactez-nous</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
