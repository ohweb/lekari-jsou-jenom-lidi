import { type Metadata } from 'next'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'
import { OdmitnutiPrescasovePrace } from './OdmitnutiPrescasovePrace'

export const metadata: Metadata = {
  title: 'Vypovídám přesčasy',
}

export default function VypovidamPrescasyPage() {
  return (
    <>
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
      <div className="bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Zkrácený úvazek
          </h2>
          <p className="mt-6">
            Sloužíte-li u svého hlavního zaměstnavatele, u kterého máte zkrácený pracovní úvazek (cokoliv pod 1,0), podle zákona vám nemůže být nařízena práce přesčas, a to ani v rozsahu 150 hodin ročně, jak je tomu u zaměstnanců na plný úvazek. Ať už jste zaměstnavateli písemně potvrdili, že jste ochotni pracovat přesčas, nebo jste tento souhlas vyslovili „mlčky“ tím, že se necháte do služeb rozepisovat a sloužíte je, stačí tento souhlas odvolat – oznámit zaměstnavateli, že vám už práci přesčas nemá přidělovat.
          </p>
          <p className="mt-6">
            <a href='#' className="text-sm font-semibold leading-6 text-indigo-600">
              Výpovědní vzor <span aria-hidden="true">→</span>
            </a>
          </p>          
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Dohoda o provedení práce/o pracovní činnosti – „služby externistů“
          </h2>
          <p className="mt-6">
          Sloužíte-li v jiné nemocnici, než kde máte hlavní pracovní poměr, nebo pokud sloužíte dobrovolně mimo hlavní pracovní poměr, nejčastěji používaným pracovněprávním institutem jsou tzv. dohody o práci mimo pracovní poměr – DPP a DPČ. Každá DPP nebo DPČ může mít jinak sjednanou výpovědní lhůtu, je tedy potřeba ji doma vyhledat a najít v ní tento údaj. V případě, že v DPP nebo DPČ není uveden, stanovuje zákon patnáctidenní výpovědní lhůtu, která začíná plynout dnem doručení výpovědi zaměstnavateli (§77). 
Pokud není v DPP nebo DPČ stanovena dvouměsíční (nebo jiná) výpovědní lhůta, platí patnáctidenní. V takovém případě není možné výpověď podat nyní tak, aby platila od 1. prosince. Výpověď bude nutné doručit zaměstnavateli až 15. listopadu 2023.
          </p>
          <p className="mt-6">
            <a href='#' className="text-sm font-semibold leading-6 text-indigo-600">
              Výpovědní vzor <span aria-hidden="true">→</span>
            </a>
          </p>
                    
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Hlavní pracovní poměr – služby v rámci pracovního poměru (nikoliv na dohodu) – odpracováno více než 416h přesčasů (k 1.12.23)
          </h2>
          <p className="mt-6">
          V případě plného pracovního úvazku je zásadní, kolik hodin přesčasové práce již letos zaměstnanec odpracoval. V některých nemocnicích se bude lišit údaj oficiální (mj. uvedený na výplatním lístku) s reálným, jelikož mnoho nemocnic se snaží, aby součet oficiálně vykázaných přesčasů nepřekročil ročně 416 hodin.
Přiznává-li zaměstnavatel na výplatních lístcích veškeré přesčasy a jejich součet za leden až září 2023 překročil 416 hodin, postup při ukončení další přesčasové práce je jednoduchý. Stačí zaměstnavateli prokazatelně a v dostatečném předstihu oznámit, že došlo k vyčerpání zákonného limitu a práci přesčas dále nelze přidělovat.
Pokud zaměstnavatel množství přesčasů na výplatním lístku upravuje tak, aby nepřekročil roční limit 416 hodin, je nutné si spočítat reálné množství přesčasové práce. V některých nemocnicích lékaři vyplňují fiktivní výkaz (na cca 35 h měsíčně) a reálný, kde mají skutečný počet přesčasových hodin a často i odměnu. U velkého množství lékařů bude bohužel nutné dohledat rozpisy služeb a spočítat přesčasové hodiny ručně. Nezapomínejte odečítat ze služeb, po kterých navazuje pracovní den, 8 hodin náhradního volna, odcházíte-li po službě domů, případně odečítat další poskytnuté náhradní volno. Pokud reálné množství přesčasů překročilo 416 hodin, další postup je stejný jako při „přiznaných“ přesčasech.
Přehled a výpočet přesčasové práce lze přiložit k oznámení o ukončení výkonu práce přesčas buď v okamžiku, kdy jej lékař učiní, nebo dodatečně na žádost zaměstnavatele, pokud zpochybní, že již byl vyčerpán roční limit 416 hodin.
Doporučujeme lékařům, kteří vykazují fiktivní množství přesčasů (typicky 35 hodin měsíčně), aby v září až listopadu vykazovali skutečné, resp. maximální množství přesčasové práce, tzn. do 416 hodin.

          </p>
          <p className="mt-6">
            <a href='#' className="text-sm font-semibold leading-6 text-indigo-600">
              Výpovědní vzor <span aria-hidden="true">→</span>
            </a>
          </p>          
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Hlavní pracovní poměr – (služby nikoliv na dohodu) – odpracováno mezi 150 a 416 h přesčasů
          </h2>
          <p className="mt-6">
          (nutno přečíst i předchozí část o přesčasech nad 416 hodin)
<a href="https://lkcr.cz/aktuality/100424cs-sekce-mladych-lekaru-clk-stanovisko-k-vypovidani-prescasu">Přečtěte si také Právní stanoviska ČLK </a>
Zákoník práce umožňuje přidělovat práci přesčas nad 150 h ročně pouze na základě dohody zaměstnavatele a zaměstnance. Tato dohoda se v některých nemocnicích obnovuje každý rok, často je však součástí pracovní smlouvy! Vyhledejte svou pracovní smlouvu, v případě, že je tam souhlas s přesčasovou prací nad 416 hodin zakotven, váš souhlas trvá během celého pracovního poměru, dokud není vypovězen. výpovědní formulář zde
V případě, že se zaměstnavatelem nemáte uzavřenou platnou písemnou dohodu o práci přesčas nad 150 hodin a zároveň nad tento limit práci přesčas akceptujete, souhlas vyslovujete „mlčky“ pro každý nařízený přesčas zvlášť. Přesto je potřeba zaměstnavateli předem dát předem najevo, že v prosinci neplánujete práci nad rámec pracovní smlouvy vykonávat. výpovědní formulář zde

          </p>
          <p className="mt-6">
            <a href='#' className="text-sm font-semibold leading-6 text-indigo-600">
              Výpovědní vzor <span aria-hidden="true">→</span>
            </a>
          </p>
          
        </div>
      </div>
    </section>
    


    <section>
      <div className="bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Obcházení přesčasových limitů vykazováním pracovní pohotovosti
          </h2>
          <p className="mt-6">
            Z mnoha nemocnic dostáváme zprávy o tom, že lékařům je vykazována pracovní pohotovost za dobu, kterou strávili na pracovišti. Neexistuje nic jako pracovní pohotovost na pracovišti, pohotovost se z definice vykonává mimo pracoviště. Snižuje-li zaměstnavatel uměle množství vykázaných přesčasů tím, že část služby vykazuje jako pracovní pohotovost, započítejte si čas takové „pracovní pohotovosti“ jako práci přesčas. Následně postupujte podle jednoho ze dvou posledních odstavců podle toho, jestli práce přesčas již překročila limit 416 hodin nebo nikoliv. V případě, že zaměstnavatel zpochybní překročení limitu, je potřeba mu prokazatelně doručit informaci, že jelikož jste byli přítomni na pracovišti, nejedná se o pracovní pohotovost, ale o práci přesčas a že jste schopni mu tuto skutečnost doložit.
          </p>


          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Dohoda o provedení práce/o pracovní činnosti – obcházení přesčasového limitu zaměstnavatelem
          </h2>
          <p className='mt-6'>
            Mnoho nemocnic služby lékařů neproplácí jako přesčasy, ale s lékaři uzavírá na služby DPP nebo DPČ. Jedná se velmi častou praxi, která je ale nelegální (v rozporu s § 34b zákoníku práce) a v mnoha ohledech škodlivá pro zaměstnance. Pro výpověď ze služeb v tomto režimu platí stejný postup jako pro DPP/DPČ externistů (viz výše).
          </p>
          <p className='mt-6'>
            CAVE! Jelikož zaměstnavatel, jehož lékaři slouží na DPP/DPČ, nevykazuje přesčasy v rámci hlavního pracovního poměru lékaře, vzniká obava, jestli zaměstnavatel nevyužije skutečnosti, že formálně (díky DPP/DPČ) pro něj zaměstnavatel ještě v tomto roce neodpracoval žádné přesčasy a bude požadovat, aby v prosinci pracoval v režimu nařízených přesčasů (do 150 h ročně).
          </p>
          <p className='mt-6'>
            Bude-li takto zaměstnavatel argumentovat, je nutné jej upozornit na ilegalitu souběhu HPP a DPP/DPČ, která činí DPP/DPČ ze své podstaty neplatnou. Tím pádem lze hodiny odpracované na DPP/DPČ považovat za práci vykonanou v přesčasovém režimu.
          </p>
          

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Jiné situace
          </h2>
          <p className="mt-6">
            Nacházíte-li se v jiné pracovněprávní situaci a není vám jasné, jak přesčasy vypovědět, obraťte se na nás e-mailem na sekcemladychlekaruclk@gmail.com, do předmětu e-mailu uveďte „Výpověď přesčasů“, řešení najdeme.
          </p>


          
        </div>
      </div>
    </section>
    </main>
    </>
  )
}
