import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vaše příběhy',
}

export default function VasePribehyPage() {
  return (
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
        <section>
        <Testimonials/>
        </section>
    
    </main>
  )
}
