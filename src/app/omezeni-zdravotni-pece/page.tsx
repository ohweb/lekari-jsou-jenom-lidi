import { Container } from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'

import imageNpkPardubice from '@/images/omezeni-zdravotni-pece/Omezeni pece NPK Pardubice.jpg'
import imageOnKladno from '@/images/omezeni-zdravotni-pece/Omezeni pece ON Kladno.png'
import imageIvancice from '@/images/omezeni-zdravotni-pece/omezení Ivančice.png'
import imageOmezeniPece from '@/images/omezeni-zdravotni-pece/Omezení péče.png'
import imageTabor from '@/images/omezeni-zdravotni-pece/Omezení péče - Tábor.jpeg'
import imageBoleslav from '@/images/omezeni-zdravotni-pece/Omezení péče Boleslav.png'
import imageBreclav from '@/images/omezeni-zdravotni-pece/omezení péče břeclav.jpg'
import imageFifejdy from '@/images/omezeni-zdravotni-pece/omezení péče fifejdy.jpg'
import imageFNOlomouc from '@/images/omezeni-zdravotni-pece/omezení péče FN Olmouc.png'
import imageFNHK from '@/images/omezeni-zdravotni-pece/Omezení péče FNHK.png'
import imageFNKV from '@/images/omezeni-zdravotni-pece/Omezení péče FNKV.png'
import imageFNM from '@/images/omezeni-zdravotni-pece/Omezení péče FNM.png'
import imageFNO from '@/images/omezeni-zdravotni-pece/Omezení péče FNO.png'
import imageFTN from '@/images/omezeni-zdravotni-pece/Omezení péče FTN.png'
import imageJablonec from '@/images/omezeni-zdravotni-pece/omezení péče jablonec.jpg'
import imageJicin from '@/images/omezeni-zdravotni-pece/OMEZENÍ PÉČE JIČÍN.png'
import imageKrn from '@/images/omezeni-zdravotni-pece/Omezení péče Krn.png'
import imageMost from '@/images/omezeni-zdravotni-pece/Omezení péče Most.png'
import imageOpava from '@/images/omezeni-zdravotni-pece/Omezení péče Opava.jpg'
import imageProstejov from '@/images/omezeni-zdravotni-pece/omezení péče Prostějov.jpg'
import imagePisek from '@/images/omezeni-zdravotni-pece/Omezení péče Písek .jpg'
import imagePribram from '@/images/omezeni-zdravotni-pece/Omezení péče Příbram.png'
import imageSlezkaNemocniceOpava from '@/images/omezeni-zdravotni-pece/Omezení péče Slezská nemocnice Opava.png'
import imageSvitavskaNemocnice from '@/images/omezeni-zdravotni-pece/Omezení péče Svitavská nemocnice.jpg'
import imageTrinec from '@/images/omezeni-zdravotni-pece/omezení péče třinec.jpg'
import imageVFN from '@/images/omezeni-zdravotni-pece/Omezení péče VFN.png'
import imageZnojmo from '@/images/omezeni-zdravotni-pece/Omezení péče Znojmo .jpg'
import imageUstiNadOrlici from '@/images/omezeni-zdravotni-pece/omezení péče ústí n orlici.jpg'

const omezeniImages = [
  { id: 1, image: imageNpkPardubice },
  { id: 2, image: imageOnKladno },
  { id: 3, image: imageIvancice },
  { id: 4, image: imageOmezeniPece },
  { id: 5, image: imageTabor },
  { id: 6, image: imageBoleslav },
  { id: 7, image: imageBreclav },
  { id: 8, image: imageFifejdy },
  { id: 9, image: imageFNOlomouc },
  { id: 10, image: imageFNHK },
  { id: 11, image: imageFNKV },
  { id: 12, image: imageFNM },
  { id: 13, image: imageFNO },
  { id: 14, image: imageFTN },
  { id: 15, image: imageJablonec },
  { id: 16, image: imageJicin },
  { id: 17, image: imageKrn },
  { id: 18, image: imageMost },
  { id: 19, image: imageOpava },
  { id: 20, image: imageProstejov },
  { id: 21, image: imagePisek },
  { id: 22, image: imagePribram },
  { id: 23, image: imageSlezkaNemocniceOpava },
  { id: 24, image: imageSvitavskaNemocnice },
  { id: 25, image: imageTrinec },
  { id: 26, image: imageVFN },
  { id: 27, image: imageZnojmo },
  { id: 28, image: imageUstiNadOrlici },
]

export const metadata: Metadata = {
  title: 'Omezení zdravotní péče',
}

export default function OmezeniZdravotniPecePage() {
  return (
    <main>
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-slate-50 py-20 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Omezení zdravotní péče
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Omezení zdravotní péče není z důvodu prostestu lékařů! Lékaři v
              prosinci nebudou stávkovat, ale řádně vykonávají svoji práci podle
              toho, jak jim to přikazuje zákon. Za zajištění provozu nemocnic
              nejsou odpovědní lékaři, ale ministerstvo zdravotnictví,
              pojišťovny a management nemocnic.
            </p>
          </div>
          <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
            {omezeniImages.map((omezeni) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: loaded staticaly, index can't change
              <li key={omezeni.id} className="">
                <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                  <Image src={omezeni.image} alt="omezeni pece" />
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  )
}
