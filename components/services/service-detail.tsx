'use client'

import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface ServiceDetailProps {
  id: string
  title: string
  description: string
  fullDescription: string
  benefits: string[]
}

export default function ServiceDetail({
  id,
  title,
  description,
  fullDescription,
  benefits,
}: ServiceDetailProps) {
  return (
    <section id={id} className="py-20 border-t border-border even:bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-accent font-semibold mb-4">
              {description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {fullDescription}
            </p>

            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Demander plus d'informations
            </Link>
          </div>

          {/* Right Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Avantages clés
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4 items-start">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
