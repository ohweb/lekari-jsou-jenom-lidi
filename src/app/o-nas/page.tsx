import Partners from '@/components/Partners'
import { type Metadata } from 'next'

import tymMyval from '@/images/nas-tym/tym-myval.jpg'
import tymPrada from '@/images/nas-tym/tym-prada-honza.jpg'
import tymPavelka from '@/images/nas-tym/tym-pavelka-martin.jpg'
import tymHilserova from '@/images/nas-tym/tym-hilserova-monika.jpg'
import tymPitrova from '@/images/nas-tym/tym-pitrova-hana.jpg'
import tymSvobodova from '@/images/nas-tym/tym-svobodova-marie.jpg'
import tymDunajova from '@/images/nas-tym/tym-dunajova-klara.jpg'
import tymSplino from '@/images/nas-tym/tym-splino-filip.jpg'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'O nás',
}

const values = [
  {
    name: 'Be world-class',
    description:
      'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
  },
  {
    name: 'Share everything you know',
    description:
      'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
  },
  {
    name: 'Always learning',
    description:
      'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
  },
  {
    name: 'Be supportive',
    description:
      'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  },
  {
    name: 'Take responsibility',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Enjoy downtime',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]

const images = [
  { image: tymMyval },
  { image: tymHilserova },
  { image: tymPavelka },
  { image: tymPrada },
  { image: tymSvobodova },
  { image: tymPitrova },
  { image: tymDunajova },
  { image: tymSplino },
]

export default function ONas() {
  return (
    <>
      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Náš tým
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {images.map((value) => (
            <Image src={value.image} alt="člen týmu" key={value.image.src} />
          ))}
        </dl>
      </div>

      {/* Logo cloud */}
      <div className="relative isolate -z-10 mt-32 sm:mt-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Podpořili nás
          </h2>
          <Partners />
        </div>
      </div>
    </>
  )
}
