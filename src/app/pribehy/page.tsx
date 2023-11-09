import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vaše příběhy',
}

export default function VasePribehyPage() {
  return (
    <main>
        <section>
        <Testimonials/>
        </section> 
    </main>
  )
}
