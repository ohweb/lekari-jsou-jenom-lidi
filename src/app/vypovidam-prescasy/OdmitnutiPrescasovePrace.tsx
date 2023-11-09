import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const reasons = [


    {
      name: 'Zkrácený úvazek',
      description:
        'Sloužíte-li u svého hlavního zaměstnavatele, u kterého máte zkrácený pracovní úvazek (cokoliv pod 1,0), podle zákona vám nemůže být nařízena práce přesčas, a to ani v rozsahu 150 hodin ročně, jak je tomu u zaměstnanců na plný úvazek. Ať už jste zaměstnavateli písemně potvrdili, že jste ochotni pracovat přesčas, nebo jste tento souhlas vyslovili „mlčky“ tím, že se necháte do služeb rozepisovat a sloužíte je, stačí tento souhlas odvolat – oznámit zaměstnavateli, že vám už práci přesčas nemá přidělovat.',
      href: '#',
      icon: InboxIcon,
    },
    {
      name: 'Dohoda o provedení práce/o pracovní činnosti – „služby externistů“',
      description:
        'Sloužíte-li v jiné nemocnici, než kde máte hlavní pracovní poměr, nebo pokud sloužíte dobrovolně mimo hlavní pracovní poměr, nejčastěji používaným pracovněprávním institutem jsou tzv. dohody o práci mimo pracovní poměr – DPP a DPČ. Každá DPP nebo DPČ může mít jinak sjednanou výpovědní lhůtu, je tedy potřeba ji doma vyhledat a najít v ní tento údaj. V případě, že v DPP nebo DPČ není uveden, stanovuje zákon patnáctidenní výpovědní lhůtu, která začíná plynout dnem doručení výpovědi zaměstnavateli (§77).' +
        'Pokud není v DPP nebo DPČ stanovena dvouměsíční (nebo jiná) výpovědní lhůta, platí patnáctidenní. V takovém případě není možné výpověď podat nyní tak, aby platila od 1. prosince. Výpověď bude nutné doručit zaměstnavateli až 15. listopadu 2023.',
      href: '#',
      icon: UsersIcon,
    },
    {
      name: 'Hlavní pracovní poměr – služby v rámci pracovního poměru (nikoliv na dohodu) – odpracováno více než 416h přesčasů (k 1.12.23)',
      description:
        'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
      href: '#',
      icon: TrashIcon,
    },
  ]

export function OdmitnutiPrescasovePrace() {
    return (
        <section>
            <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stay on top of customer support
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <reason.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {reason.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{reason.description}</p>
                  <p className="mt-6">
                    <a href={reason.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Výpovědní vzor <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
        </section>
    )
}