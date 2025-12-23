"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
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
        { href: "/services#etudes", name: "Études de marché" },
        { href: "/services#sondages", name: "Sondages d'opinion" },
        { href: "/services#enquetes", name: "Enquêtes marketing" },
        { href: "/services#conseil", name: "Conseil stratégique" },
      ],
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="gap-6 justify-between md:flex">
            {/* Section Gauche - Logo et Newsletter */}
            <div className="flex-1 text-center md:text-left">
              <div className="max-w-xs mx-auto md:mx-0">
                <Link href="/" className="inline-block">
                  <Image src="/gomade.png" alt="Logo GOMADE" width={150} height={130} className="rounded" />
                </Link>
                <p className="leading-relaxed mt-2 text-[15px] opacity-90">
                  Cabinet d'études de marchés et sondages d'opinion au Gabon. Votre partenaire de confiance pour des
                  insights stratégiques.
                </p>
              </div>

              {/* Newsletter Section */}
              <div className="mx-auto md:mx-0 max-w-sm">
                <label className="block pt-4 pb-2 font-medium">Restez informé</label>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-md p-1">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 outline-none bg-transparent text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                  <button
                    onClick={handleSubmit}
                    className="p-2.5 rounded-md text-primary bg-primary-foreground hover:opacity-90 transition-opacity outline-none shadow-md focus:shadow-none sm:px-5 font-medium"
                  >
                    S'abonner
                  </button>
                </div>
              </div>
            </div>

            {/* Section Droite - Navigation */}
            <div className="flex-1 mt-10 space-y-6 items-center justify-center md:justify-between text-center md:text-left sm:flex md:space-y-0 md:mt-0">
              {footerNavs.map((item, idx) => (
                <ul className="space-y-4" key={idx}>
                  <h4 className="font-medium">{item.label}</h4>
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <Link href={el.href} className="opacity-80 hover:opacity-100 hover:underline transition-opacity">
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}

              {/* Colonne Contact */}
              <ul className="space-y-4">
                <h4 className="font-medium">Contact</h4>
                <li className="flex items-center justify-center md:justify-start gap-2 text-[15px] opacity-80">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+241 XX XXX XXXX</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-[15px] opacity-80">
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="break-all">contact@gomade.ga</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2 text-[15px] opacity-80">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>Libreville, Gabon</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8">
            <div className="py-6 flex flex-col items-center sm:flex-row sm:justify-between">
              <div className="opacity-80 text-center">&copy; 2025 GOMADE GABON. Tous droits réservés.</div>
              <div className="mt-6 sm:mt-0">
                <ul className="flex items-center space-x-4">
                  <li className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-primary-foreground transition-colors">
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </li>
                  <li className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-primary-foreground transition-colors">
                    <Link href="#" aria-label="Facebook">
                      <Facebook className="w-5 h-5" />
                    </Link>
                  </li>
                  <li className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:border-primary-foreground transition-colors">
                    <Link href="#" aria-label="Twitter">
                      <Twitter className="w-5 h-5" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
