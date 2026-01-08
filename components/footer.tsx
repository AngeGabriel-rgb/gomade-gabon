"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, ArrowRight, Send } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      console.log("Newsletter subscription:", email)
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  const footerNavs = [
    {
      label: "Navigation",
      items: [
        { href: "/", name: "Accueil" },
        { href: "/services", name: "Services" },
        { href: "/about", name: "À propos" },
        { href: "/contact", name: "Contact" },
      ],
    },
    {
      label: "Services",
      items: [
        { href: "/services#etudes", name: "Études de Marché" },
        { href: "/services#sondages", name: "Sondages d'Opinion" },
        { href: "/services#enquetes", name: "Enquêtes Marketing" },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary-foreground/20 to-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/gomade.png" alt="Logo GOMADE" width={120} height={100} className="rounded-lg shadow-lg" />
            </Link>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Cabinet d'Études de Marchés, Sondages d'Opinion et Enquêtes Marketing au Gabon. Votre partenaire de confiance pour des
              insights stratégiques.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/profile.php?id=100085517989223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          {footerNavs.map((nav, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {nav.label}
              </h4>
              <ul className="space-y-3">
                {nav.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-sm opacity-80 hover:opacity-100 hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-200 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+24174511172"
                  className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="pt-1.5">+241 74 51 11 72</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:goodmarketingdecisionsgabon@gmail.com"
                  className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span className="pt-1.5 break-all text-xs sm:text-sm">goodmarketingdecisionsgabon@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <span className="pt-1.5">Dernière Kar motors, bas de Guegue, Libreville</span>
              </li>
            </ul>
          </div>
        </div>

      
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-sm opacity-60">&copy; {new Date().getFullYear()} GOMADE GABON. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
