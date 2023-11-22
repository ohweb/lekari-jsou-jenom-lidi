import { type Metadata } from 'next'
import LegalFaq from '@/components/LegalFaqs/LegalFaq'
import getLegalFaqs from '@/components/LegalFaqs/getLegalFaqs'

export const metadata: Metadata = {
  title: 'Právní poradna',
}

export default function PravniPoradna() {
  const legalFaqs = getLegalFaqs()
  return (
    <>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y divide-gray-900/10 text-base leading-7 text-gray-700">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Nejčastější otázky k nepřetržitému režimu práce
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Ve spolupráci s Mgr. Alešem Buriánkem jsme pro vás připravili
              nejčastější právní otázky a odpovědi.
            </p>
          </div>
          <dl className="mt-16 space-y-12 divide-y divide-gray-900/10">
            {legalFaqs.map((oneLegalFaq) => (
              <LegalFaq
                question={oneLegalFaq.data.question}
                answer={oneLegalFaq.content}
                key={oneLegalFaq.data.id}
              />
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}
