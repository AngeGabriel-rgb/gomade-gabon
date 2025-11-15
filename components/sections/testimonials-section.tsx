'use client'

import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'GOMADE a transformé notre approche marketing. Les insights fournis ont été déterminants pour notre croissance.',
      author: 'Jean-Pierre M.',
      company: 'Directeur Commercial',
      rating: 5,
    },
    {
      quote: 'Un partenaire fiable et professionnel. Les analyses sont pointues et facilement actionables.',
      author: 'Marie K.',
      company: 'Chef de Projet',
      rating: 5,
    },
    {
      quote: 'Excellent service client et résultats dépassent nos attentes. Fortement recommandé!',
      author: 'Paul D.',
      company: 'Entrepreneur',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients pensent de notre travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
