'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactInfo() {
  const info = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+241 XX XXX XXXX',
      link: 'tel:+241',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@gomade.ga',
      link: 'mailto:contact@gomade.ga',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Libreville, Gabon',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun-Ven: 08:00-18:00',
      link: '#',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6">Coordonnées</h2>
        <div className="space-y-4">
          {info.map((item) => {
            const IconComponent = item.icon
            return (
              <a
                key={item.label}
                href={item.link}
                className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">{item.label}</p>
                  <p className="text-foreground font-bold">{item.value}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border">
        <h3 className="text-xl font-bold text-foreground mb-4">Support WhatsApp</h3>
        <p className="text-muted-foreground mb-4">
          Pour une réponse rapide, contactez-nous sur WhatsApp. Notre équipe est disponible du lundi au vendredi.
        </p>
        <a
          href="https://wa.me/241"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105"
        >
          Ouvrir WhatsApp
        </a>
      </div>
    </div>
  )
}
