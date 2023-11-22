import {type Metadata} from 'next'
import LegalFaq from "@/components/LegalFaqs/LegalFaq";
import getLegalFaqs from "@/components/LegalFaqs/getLegalFaqs";

export const metadata: Metadata = {
    title: 'Právní poradna',
}


export default function PravniPoradna() {
    const legalFaqs = getLegalFaqs()
    return (
        <>
            <div className="bg-white px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Nejčastější otázky k nepřetržitému režimu práce
                    </h1>
                    <p className="mt-6 text-xl leading-8">
                        Ve spolupráci s Mgr. Alešem Buriánkem jsme pro vás
                        připravili nejčastější právní otázky a odpovědi.
                    </p>
                    <dl className="mt-10 space-y-12 divide-y divide-gray-900/10">
                        {legalFaqs.map((oneLegalFaq) => (
                            <LegalFaq question={oneLegalFaq.data.question}
                                      answer={oneLegalFaq.content}
                                      key={oneLegalFaq.data.id}/>
                        ))}
                    </dl>
                </div>
            </div>

        </>
    )
}
