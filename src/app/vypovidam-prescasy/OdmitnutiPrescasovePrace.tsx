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
        'V případě plného pracovního úvazku je zásadní, kolik hodin přesčasové práce již letos zaměstnanec odpracoval. V některých nemocnicích se bude lišit údaj oficiální (mj. uvedený na výplatním lístku) s reálným, jelikož mnoho nemocnic se snaží, aby součet oficiálně vykázaných přesčasů nepřekročil ročně 416 hodin.' +
        'Přiznává-li zaměstnavatel na výplatních lístcích veškeré přesčasy a jejich součet za leden až září 2023 překročil 416 hodin, postup při ukončení další přesčasové práce je jednoduchý. Stačí zaměstnavateli prokazatelně a v dostatečném předstihu oznámit, že došlo k vyčerpání zákonného limitu a práci přesčas dále nelze přidělovat.' +
        'Pokud zaměstnavatel množství přesčasů na výplatním lístku upravuje tak, aby nepřekročil roční limit 416 hodin, je nutné si spočítat reálné množství přesčasové práce. V některých nemocnicích lékaři vyplňují fiktivní výkaz (na cca 35 h měsíčně) a reálný, kde mají skutečný počet přesčasových hodin a často i odměnu. U velkého množství lékařů bude bohužel nutné dohledat rozpisy služeb a spočítat přesčasové hodiny ručně. Nezapomínejte odečítat ze služeb, po kterých navazuje pracovní den, 8 hodin náhradního volna, odcházíte-li po službě domů, případně odečítat další poskytnuté náhradní volno. Pokud reálné množství přesčasů překročilo 416 hodin, další postup je stejný jako při „přiznaných“ přesčasech.V případě plného pracovního úvazku je zásadní, kolik hodin přesčasové práce již letos zaměstnanec odpracoval. V některých nemocnicích se bude lišit údaj oficiální (mj. uvedený na výplatním lístku) s reálným, jelikož mnoho nemocnic se snaží, aby součet oficiálně vykázaných přesčasů nepřekročil ročně 416 hodin.' +
        'Přiznává-li zaměstnavatel na výplatních lístcích veškeré přesčasy a jejich součet za leden až září 2023 překročil 416 hodin, postup při ukončení další přesčasové práce je jednoduchý. Stačí zaměstnavateli prokazatelně a v dostatečném předstihu oznámit, že došlo k vyčerpání zákonného limitu a práci přesčas dále nelze přidělovat.' +
        'Pokud zaměstnavatel množství přesčasů na výplatním lístku upravuje tak, aby nepřekročil roční limit 416 hodin, je nutné si spočítat reálné množství přesčasové práce. V některých nemocnicích lékaři vyplňují fiktivní výkaz (na cca 35 h měsíčně) a reálný, kde mají skutečný počet přesčasových hodin a často i odměnu. U velkého množství lékařů bude bohužel nutné dohledat rozpisy služeb a spočítat přesčasové hodiny ručně. Nezapomínejte odečítat ze služeb, po kterých navazuje pracovní den, 8 hodin náhradního volna, odcházíte-li po službě domů, případně odečítat další poskytnuté náhradní volno. Pokud reálné množství přesčasů překročilo 416 hodin, další postup je stejný jako při „přiznaných“ přesčasech.' +
        'Přehled a výpočet přesčasové práce lze přiložit k oznámení o ukončení výkonu práce přesčas buď v okamžiku, kdy jej lékař učiní, nebo dodatečně na žádost zaměstnavatele, pokud zpochybní, že již byl vyčerpán roční limit 416 hodin.' +
        'Doporučujeme lékařům, kteří vykazují fiktivní množství přesčasů (typicky 35 hodin měsíčně), aby v září až listopadu vykazovali skutečné, resp. maximální množství přesčasové práce, tzn. do 416 hodin.' +
        'Přehled a výpočet přesčasové práce lze přiložit k oznámení o ukončení výkonu práce přesčas buď v okamžiku, kdy jej lékař učiní, nebo dodatečně na žádost zaměstnavatele, pokud zpochybní, že již byl vyčerpán roční limit 416 hodin.' +
        'Doporučujeme lékařům, kteří vykazují fiktivní množství přesčasů (typicky 35 hodin měsíčně), aby v září až listopadu vykazovali skutečné, resp. maximální množství přesčasové práce, tzn. do 416 hodin.',
      href: '#',
      icon: TrashIcon,
    },
    {
      name: 'Hlavní pracovní poměr – (služby nikoliv na dohodu) – odpracováno mezi 150 a 416 h přesčasů',
      description:
        '(nutno přečíst i předchozí část o přesčasech nad 416 hodin)' +
        'Přečtěte si také Právní stanoviska ČLK' +
        'Zákoník práce umožňuje přidělovat práci přesčas nad 150 h ročně pouze na základě dohody zaměstnavatele a zaměstnance. Tato dohoda se v některých nemocnicích obnovuje každý rok, často je však součástí pracovní smlouvy! Vyhledejte svou pracovní smlouvu, v případě, že je tam souhlas s přesčasovou prací nad 416 hodin zakotven, váš souhlas trvá během celého pracovního poměru, dokud není vypovězen. výpovědní formulář zde'+
        'V případě, že se zaměstnavatelem nemáte uzavřenou platnou písemnou dohodu o práci přesčas nad 150 hodin a zároveň nad tento limit práci přesčas akceptujete, souhlas vyslovujete „mlčky“ pro každý nařízený přesčas zvlášť. Přesto je potřeba zaměstnavateli předem dát předem najevo, že v prosinci neplánujete práci nad rámec pracovní smlouvy vykonávat. výpovědní formulář zde',
      href: '#',
      icon: TrashIcon,
    },
  ]

export function OdmitnutiPrescasovePrace() {
    return (
        <section>
            <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
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