import { type Metadata } from 'next'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'
import { OdmitnutiPrescasovePrace } from './OdmitnutiPrescasovePrace'

export const metadata: Metadata = {
  title: 'Vypovídám přesčasy',
}

export default function VypovidamPrescasyPage() {
  return (
    <>
    <main>
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Vypovídám přesčasy.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Výpověď přesčasové práce doručte zaměstnavateli v průběhu měsíce září ve dvou kopiích.
            Na jedné z nich zaměstnavatel (podatelna nemocnice, personální oddělení, sekretariát
            nebo přímý nadřízený) potvrdí svým podpisem a razítkem, druhou si ponechá. Další info 
            v textu níže.
          </p>
        </div>
      </Container>
    </section>
    <OdmitnutiPrescasovePrace />
    <section>
      <h2>Jak vypovědět</h2>
    </section>
    </main>
    </>
  )
}
