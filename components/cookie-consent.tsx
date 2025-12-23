"use client"

import { useState, useEffect } from "react"
import { X, Cookie, Settings, Check } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("gomade-cookie-consent")
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    saveConsent(allPreferences)
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
  }

  const handleRejectAll = () => {
    const minimalPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    saveConsent(minimalPreferences)
  }

  const saveConsent = (prefs: CookiePreferences) => {
    const consentData = {
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: "1.0",
    }
    localStorage.setItem("gomade-cookie-consent", JSON.stringify(consentData))

    // Set cookies based on preferences
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
    // Close without saving (will show again next visit)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#2D2D2D] rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Main Banner */}
          {!showPreferences && (
            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Cookie Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>

                {/* Text Content */}
                <div className="flex-1 text-sm text-gray-300">
                  <p>
                    Ce site utilise des cookies et collecte vos données personnelles (nom, email, téléphone, entreprise) pour améliorer votre expérience et traiter vos demandes. Découvrez comment nous
                    utilisons vos données dans notre{" "}
                    <Link
                      href="/politique-cookies"
                      className="text-[#DB2E33] hover:text-[#FF5A60] underline transition-colors"
                    >
                      Avis sur les cookies
                    </Link>
                    .
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 px-6 py-3 border border-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser les cookies
                </button>
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
                <h3 className="text-lg font-semibold text-white">Paramètres des cookies</h3>
                <button
                  onClick={handleClose}
                  className="p-1 text-gray-400 hover:text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Cookies nécessaires</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Essentiels au fonctionnement du site et au traitement sécurisé de vos données personnelles. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-[#DB2E33] rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#DB2E33]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Cookies analytiques</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Nous aident à comprendre comment les visiteurs interagissent avec le site. Vos données anonymisées sont collectées pour améliorer nos services.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? "bg-[#DB2E33] justify-end" : "bg-gray-600 justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Cookies marketing</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Permettent la personnalisation de votre expérience. Vos préférences et données de navigation sont collectées pour adapter le contenu et les offres.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? "bg-[#DB2E33] justify-end" : "bg-gray-600 justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-6 py-3 border border-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Retour
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-6 py-3 border border-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Refuser tout
                </button>
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
