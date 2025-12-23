'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af0a80bd-7501-40ee-990b-69ed1cfcde25_3840w.jpg)] bg-cover">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-fuchsia-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-48 -right-40 w-[520px] h-[520px] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto pt-24 pr-6 pb-24 pl-6 min-h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-5xl">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
            Comprenez votre marché et décidez avec confiance
          </h1>

          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center h-14 text-base font-medium bg-accent text-white rounded-xl px-8 hover:bg-accent/90 transition">
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}