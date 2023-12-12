import { Metadata } from 'next'
import { Container } from '@/components/Container'
import React from 'react'

export const metadata: Metadata = {
  title: 'Plné znění dohody',
}

export default function OmezeniZdravotniPecePage() {
  return (
    <main>
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Plné znění dohody
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Níže naleznete plné znění dohody, podepsané dne 8. prosince 2023.
            </p>
          </div>
          <div>
            <img src="/images/dohoda-1.jpg" alt="Dohoda - strana 1" />
            <img src="/images/dohoda-2.jpg" alt="Dohoda - strana 2" />
            <img src="/images/dohoda-3.jpg" alt="Dohoda - strana 3" />
            <img src="/images/dohoda-4.jpg" alt="Dohoda - strana 4" />
            <img src="/images/dohoda-5.jpg" alt="Dohoda - strana 5" />
          </div>
        </Container>
      </section>
    </main>
  )
}
