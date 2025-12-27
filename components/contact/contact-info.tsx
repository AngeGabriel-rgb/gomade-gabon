"use client"

import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react"

export default function ContactInfo() {
  const info = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+241 74 51 11 72",
      link: "tel:+24174511172",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "goodmarketingdecisionsgabon@gmail.com",
      link: "mailto:goodmarketingdecisionsgabon@gmail.com",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Dernière Kar motors, bas de Guegue, Libreville, Gabon",
      link: "#",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: Clock,
      label: "Horaires",
      value: "Lun-Ven: 08:00-18:00",
      link: "#",
      color: "bg-purple-500/10 text-purple-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Contact Cards */}
      <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Nos Coordonnées</h2>
        </div>

        <div className="space-y-3">
          {info.map((item, index) => {
            const IconComponent = item.icon
            const isClickable = item.link !== "#"

            const content = (
              <div
                key={index}
                className={`flex gap-4 p-4 rounded-xl transition-all duration-300 group ${
                  isClickable ? "hover:bg-muted cursor-pointer hover:shadow-md" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isClickable ? "group-hover:scale-110" : ""}`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground font-medium mb-0.5">{item.label}</p>
                  <p className="text-foreground font-semibold break-all text-sm sm:text-base">{item.value}</p>
                </div>
                {isClickable && (
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity self-center" />
                )}
              </div>
            )

            return isClickable ? (
              <a key={index} href={item.link}>
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>
      </div>

      {/* WhatsApp Card */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Support WhatsApp</h3>
          </div>

          <p className="opacity-90 mb-6 leading-relaxed">
            Pour une réponse rapide, contactez-nous sur WhatsApp. Notre équipe est disponible du lundi au vendredi de 8h
            à 18h.
          </p>

          <a
            href="https://wa.me/24174511172?text=Bonjour,%20je%20souhaite%20connaître%20vos%20services%20et%20obtenir%20un%20devis%20gratuit."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-emerald-600 px-6 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Ouvrir WhatsApp
          </a>
        </div>
      </div>

    </div>
  )
}
