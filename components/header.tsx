"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ]

  const whatsappNumber = "24174511172"
  const whatsappMessage = encodeURIComponent("Bonjour, je souhaite connaître vos services et obtenir un devis gratuit.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="GOMADE GABON - Accueil">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/gomade.png"
              alt="GOMADE GABON Logo"
              width={48}
              height={48}
              priority
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-lg text-primary tracking-tight">GOMADE GABON</span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-1 bg-muted/50 backdrop-blur-sm rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(link.href) ? "bg-primary text-primary-foreground shadow-md" : "text-foreground hover:bg-muted"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WHATSAPP BUTTON */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 group"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Basculer le menu de navigation"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        role="navigation"
        aria-label="Navigation mobile"
      >
        <div className="px-4 py-4 space-y-2 bg-background/95 backdrop-blur-lg border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive(link.href) ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-3.5 rounded-xl font-medium w-full hover:bg-emerald-600 transition-colors mt-4"
            onClick={closeMenu}
          >
            <MessageCircle size={20} />
            <span>Contactez-nous sur WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}
