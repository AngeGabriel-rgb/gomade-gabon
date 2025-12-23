"use client"

import { useState, useEffect } from "react"
import { X, Cookie, Settings, Check } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

// Composant utilitaire pour le switch de préférence
const PreferenceSwitch = ({ label, description, isChecked, isDisabled, onChange }: { 
    label: string, 
    description: string, 
    isChecked: boolean, 
    isDisabled: boolean, 
    onChange?: () => void 
  }) => (
  <div className={`flex items-start justify-between p-4 rounded-lg transition-all ${isDisabled ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}>
    <div className="flex-1">
      <h4 className="text-black font-medium">{label}</h4>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
    <div className="ml-4">
      {isDisabled ? (
        // Rendu pour le switch désactivé (nécessaire)
        <div className="w-12 h-6 bg-[#DB2E33] rounded-full flex items-center justify-end px-1">
          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-[#DB2E33]" />
          </div>
        </div>
      ) : (
        // Rendu pour le switch activable
        <button
          onClick={onChange}
          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
            isChecked ? "bg-[#DB2E33] justify-end" : "bg-gray-300 justify-start"
          } px-1`}
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </button>
      )}
    </div>
  </div>
);


export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, 
    analytics: false,
    marketing: false,
  })

  // ... (Logique useEffect, handleAcceptAll, handleSavePreferences, handleRejectAll, saveConsent, handleClose restent inchangées)
  
  // Raccourcir le code en laissant la logique JS derrière (omise ici pour la concision)
  useEffect(() => {
    const consent = localStorage.getItem("gomade-cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = { necessary: true, analytics: true, marketing: true }
    saveConsent(allPreferences)
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
  }

  const handleRejectAll = () => {
    const minimalPreferences: CookiePreferences = { necessary: true, analytics: false, marketing: false }
    saveConsent(minimalPreferences)
  }

  const saveConsent = (prefs: CookiePreferences) => {
    const consentData = { preferences: prefs, timestamp: new Date().toISOString(), version: "1.0" }
    localStorage.setItem("gomade-cookie-consent", JSON.stringify(consentData))

    document.cookie = `gomade_necessary=true; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    if (prefs.analytics) {
      document.cookie = `gomade_analytics=true; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    }
    if (prefs.marketing) {
      document.cookie = `gomade_marketing=true; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
    }

    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }


  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        {/* FOND BLANC et BORDURE plus claire */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Main Banner */}
          {!showPreferences && (
            <div className="p-6">
              <div className="flex items-start gap-4">
                
                {/* Cookie Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-orange-500" />
                </div>

                {/* Text Content */}
                {/* TEXTE NOIR sur fond BLANC */}
                <div className="flex-1 text-sm text-gray-700">
                  <p>
                    Ce site utilise des cookies et collecte vos données personnelles (nom, email, téléphone, entreprise) pour améliorer votre expérience et traiter vos demandes. Découvrez comment nous
                    utilisons vos données dans notre{" "}
                    <Link
                      href="/politique-cookies"
                      className="text-[#DB2E33] hover:text-[#B82530] underline transition-colors"
                    >
                      Avis sur les cookies
                    </Link>
                    .
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-800 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                {/* Bouton Personnaliser (BLANC avec bordure GRISE) */}
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser les cookies
                </button>
                {/* Bouton OK (ROUGE inchangé) */}
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-[#DB2E33] hover:bg-[#B82530] text-white rounded-lg transition-colors text-sm font-medium"
                >
                  OK!
                </button>
              </div>
            </div>
          )}

          {/* Preferences Panel */}
          {showPreferences && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                {/* TITRE NOIR sur fond BLANC */}
                <h3 className="text-lg font-semibold text-black">Paramètres des cookies</h3>
                <button
                  onClick={handleClose}
                  className="p-1 text-gray-400 hover:text-gray-800 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Utilisation du composant PreferenceSwitch pour réduire la longueur du code JSX ici */}
              <div className="space-y-4 mb-6">
                <PreferenceSwitch
                    label="Cookies nécessaires"
                    description="Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés."
                    isChecked={true}
                    isDisabled={true}
                />
                <PreferenceSwitch
                    label="Cookies analytiques"
                    description="Nous aident à comprendre comment les visiteurs interagissent avec le site."
                    isChecked={preferences.analytics}
                    isDisabled={false}
                    onChange={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                />
                <PreferenceSwitch
                    label="Cookies marketing"
                    description="Utilisés pour vous proposer des contenus personnalisés et des publicités ciblées."
                    isChecked={preferences.marketing}
                    isDisabled={false}
                    onChange={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Bouton Retour (CLAIR) */}
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Retour
                </button>
                {/* Bouton Refuser tout (CLAIR) */}
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Refuser tout
                </button>
                {/* Bouton Enregistrer (ROUGE inchangé) */}
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-[#DB2E33] hover:bg-[#B82530] text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}