'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll,
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses,
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns,
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
  },
]
const hlavniBodyZajmu = [
  {
    title: "Zrušení § 93a",
    description: "Požadujeme zrušit § 93a, kterým se zvyšuje objem přesčasové práce pro zdravotníky a upravit režim 24 hodinových směn, tj. úpravit § 90. Požadujeme, aby byl ve zdravotnických zařízeních důsledně dodržován zákoník práce.",
    href: "/nase-cile"
  },
  {
    title: "Nastavení přijatelných pracovních podmínek",
    description: "Chceme nastavit přijatelné a dlouhodobě udržitelné pracovní podmínky. Navrhujeme legislativně ukotvit systém benefitů, jako jsou výsluhy, rehabilitační a lázeňská péče a podmínky pro dřívější odchod do důchodu bez krácení penze. Trváme na důsledném dodržování povinnosti zaměstnavatelů zajistit mladým lékařům atestační přípravu v zákoně stanovené době.",
    href: "/nase-cile"
  },
  {
    title: "Upravení odměňování samostatným zákonem",
    description: "Požadujeme samostatným zákonem upravit odměňování zdravotníků a lékařů, které se bude odvíjet od náročnosti profese a naplní závěry Memoranda, které v roce 2011 podepsala Vláda ČR s Lékařským odborovým klubem – Svazem českých lékařů po akci „Děkujeme, odcházíme“ a slibu, který dal ministr zdravotnictví doc. MUDr. Leoš Heger, CSc. Odborovému svazu zdravotnictví a sociální péče ČR, že se adekvátně navýšení platů lékařů zvýší platy ostatních zdravotníků.",
    href: "/nase-cile"
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />

      <Container className='relative'>
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Klíčové body našeho zájmu
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Lorem ipsum dolor et sit amet 
          </p>
        </div>
        
        <div className="mt-16 mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {hlavniBodyZajmu.map((bodZajmu) => (
              <div className="group relative rounded-lg px-4 py-1 lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
              <div key={bodZajmu.title} className="flex flex-col">
                <h3>
                <dt className="font-display text-xl text-white">
                  {bodZajmu.title}
                </dt>
                </h3>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-7 text-gray-100 group-hover:text-white">
                  <p className="flex-auto">{bodZajmu.description}</p>
                  <p className="mt-6">
                    <a href={bodZajmu.href} className="text-sm font-semibold leading-6 text-white-400">
                      Zjistit více <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div></div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
