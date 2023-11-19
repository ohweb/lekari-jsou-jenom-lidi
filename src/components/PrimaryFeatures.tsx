import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

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
    description: "Požadujeme 1,5 až 3 násobek průměrné (národní) hrubé mzdy (tj 60 000 Kč pro L1, 80 000 pro L2, 120 000 pro L3 už v roce 2024),  aby bylo pro lékaře motivující zůstat i po atestaci ve veřejném zdravotnictví. Jedinou dlouhodobou zárukou je úprava odměňování zdravotníků a lékařů samostatným zákonem, kde se bude odrážet náročnost této profese.",
    href: "/nase-cile"
  },
]

export function PrimaryFeatures() {

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
        </div>
        
        <div className="mt-16 mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {hlavniBodyZajmu.map((bodZajmu) => (
              <div key={bodZajmu.title} className="flex flex-col group relative rounded-lg px-4 py-1 lg:p-6 hover:bg-white/10 lg:hover:bg-white/5">
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
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
