'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af0a80bd-7501-40ee-990b-69ed1cfcde25_3840w.jpg)] bg-cover">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-40 w-[520px] h-[520px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 mx-auto pt-16 pr-6 pb-16 pl-6">
        {/* Left Column - Text & CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white">
            Comprenez votre marché et décidez avec confiance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
            GOMADE GABON est un cabinet d'études de marchés et de sondages d'opinion qui accompagne les entreprises et institutions dans la connaissance approfondie de leurs marchés et de leurs cibles, afin de les orienter vers des prises de décisions marketing.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center h-11 transition text-sm font-medium bg-accent text-white rounded-xl pr-4 pl-4">
              Contactez-nous
            </Link>
          
          </div>

         
        </div>

        {/* Right Column - Dashboard Cards */}
        <div className="lg:col-span-6">
          <div className="relative sm:p-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gradient-to-b from-white/[0.03] to-transparent border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
            <div className="grid grid-cols-12 gap-3">
              {/* Left tall card column */}
              <div className="col-span-12 md:col-span-6 space-y-3">
                {/* Sprint Overview Card */}
                <div className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d57793a-634a-4c7d-9968-fced612582e1_800w.jpg" alt="Product board" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white">Aperçu des enquêtes</p>
                      <p className="text-lg font-semibold tracking-tight"></p>
                    </div>
                    <span className="inline-flex items-center h-8 px-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
                      <svg width="18" height="18" viewBox="0 0 24 24" className="mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 3v18h18"></path>
                        <path d="M19 9l-6 6-4-4-4 4"></path>
                      </svg>
                     L'excellence
                    </span>
                  </div>
                </div>

                {/* Backlog Grooming Card */}
                <div className="relative h-28 rounded-2xl overflow-hidden border border-white/40 bg-white/[0.06]">
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 border border-white/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 7h18"></path>
                          <path d="M6 4h12v16H6z"></path>
                          <path d="M8 11h8"></path>
                          <path d="M8 15h5"></path>
                        </svg>
                      </span>
                      <div>
                        <p className="text-white font-medium tracking-tight">Campagne d'études</p>
                        <p className="text-xs text-white/60">Le professionnalisme</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column cards */}
              <div className="col-span-12 md:col-span-6 space-y-3">
                {/* Release Train Card */}
                <div className="relative h-32 rounded-2xl overflow-hidden border border-white/40 bg-white/[0.06]">
                  <div className="absolute inset-0 flex flex-col justify-center px-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/30">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <path d="M12 7v10"></path>
                      <path d="M8 12h8"></path>
                      <path d="M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"></path>
                    </svg>
                    </span>
                    <div>
                    <p className="text-white font-medium tracking-tight">Sondages</p>
                    <p className="text-xs text-white/60">Le professionnalisme</p>
                    </div>
                  </div>
                  </div>
                </div>

                {/* New Metrics */}
                <div className="grid grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-2">+20</p>
                    <div className="h-0.5 w-8 bg-blue-500 mx-auto mb-2"></div>
                    <p className="text-xs sm:text-sm text-white/70">Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-2">60</p>
                    <div className="h-0.5 w-8 bg-blue-500 mx-auto mb-2"></div>
                    <p className="text-xs sm:text-sm text-white/70">Projets</p>
                  </div>
            
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-2">100</p>
                    <div className="h-0.5 w-8 bg-blue-500 mx-auto mb-2"></div>
                    <p className="text-xs sm:text-sm text-white/70">Enquêteurs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
