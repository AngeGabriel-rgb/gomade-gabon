"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle, Loader, User, Mail, Phone, Building2, FileText, MessageSquare } from "lucide-react"
import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "etudes",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error")
      setErrorMessage("Configuration EmailJS manquante. Veuillez vérifier vos variables d'environnement.")
      return
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          to_email: "goodmarketingdecisionsgabon@gmail.com",
        },
        publicKey,
      )

      if (response.status === 200) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", company: "", service: "etudes", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.")
      console.error("EmailJS error:", error)
    }
  }

  const serviceOptions = [
    { value: "etudes", label: "Études de Marché" },
    { value: "sondages", label: "Sondages d'Opinion" },
    { value: "enquetes", label: "Enquêtes Marketing" },
    { value: "autre", label: "Autre" },
  ]

  const inputClasses = (fieldName: string) => `
    w-full pl-12 pr-4 py-3.5 rounded-xl border-2 bg-background text-foreground 
    placeholder-muted-foreground transition-all duration-200
    ${
      focusedField === fieldName
        ? "border-primary ring-4 ring-primary/10"
        : "border-border hover:border-muted-foreground/50"
    }
    focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10
  `

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-xl">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Formulaire de Contact</h2>
        <p className="text-muted-foreground">Remplissez le formulaire et nous vous répondrons rapidement.</p>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Nom complet <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              required
              className={inputClasses("name")}
              placeholder="Votre nom complet"
            />
          </div>
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className={inputClasses("email")}
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Téléphone
            </label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("phone")}
                placeholder="+241 74 51 11 72"
              />
            </div>
          </div>
        </div>

        {/* Company & Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="relative">
            <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
              Entreprise
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("company")}
                placeholder="Nom de l'entreprise"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
              Service intéressé
            </label>
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                onFocus={() => setFocusedField("service")}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses("service")} cursor-pointer appearance-none`}
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              required
              rows={5}
              className={`${inputClasses("message")} pl-12 resize-none`}
              placeholder="Détaillez votre demande..."
            />
          </div>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-900 dark:text-emerald-100">Message envoyé avec succès!</p>
              <p className="text-sm text-emerald-800 dark:text-emerald-200">
                Nous vous recontacterons dans les plus brefs délais.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="flex gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-destructive">Erreur lors de l'envoi</p>
              <p className="text-sm text-destructive/80">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
        >
          {status === "loading" && <Loader className="w-5 h-5 animate-spin" />}
          {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Nous respectons votre confidentialité. Vos données ne seront jamais partagées.
        </p>
      </div>
    </form>
  )
}
