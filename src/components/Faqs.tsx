import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Méně přesčasů? Nejde to, náš systém je na tom závislý.',
      answer:
        'Náš zdravotní systém je na tom závislý, protože jsme se s tím smířili. Navykli jsme si na jeho neefektivitu, a to zejména v nakládání s časem ' +
        'a prací kvalifikovaných pracovníků. Jak je možné, že mnoho zemí, s nimiž se chceme srovnávat, má zdravotnictví s minimálními přesčasy? Jak to, ' +
        'že jsou tam lidé důstojně finančně ohodnoceni již za svou základní pracovní dobu a nejsou ekonomicky nuceni do přesčasové práce? S časem ' +
        'a prací lékařů se plýtvá. Proč? Jsme levná pracovní síla. A to se musí změnit.',
    },
    {
      question: 'A kdo se postará o pacienty?',
      answer: [
        'Je správné mít na paměti dobro pacientů, koneckonců nás k tomu zavazuje nejen promoční slib, ale především naše morálka.',
        'Mnoho lékařů-zaměstnanců ale podlehlo představě, že nesou odpovědnost za provoz svých pracovišť a dostupnost zdravotní péče. ' +
        'Že jsou zodpovědní za to, co se děje v práci v době jejich nepřítomnosti.  Je to omyl. ',
        'Odpovědnost nesou ti, kteří o zdravotnictví rozhodují. To oni mají zajistit zdravotní péči pro pacienty a pracovní prostředí ' +
        'pro zdravotníky za lidských a zákonných podmínek, ale nedělají to.  Situace ve zdravotnictví nemotivuje mladé lékaře přicházet ' +
        'a starší setrvat. Od těch, kteří zůstávají, je vyžadována práce v rozporu se zákonem.  Přistupujeme na to, protože dobro pacientů ' +
        'je pro nás na prvním místě. Bereme na sebe odpovědnost, kterou mají nést jiní. A to již není udržitelné. Jsme za své pacienty odpovědní, ' +
        'když jsme v práci, ne když v ní nejsme!',
      ]
    },
  ],
  [
    {
      question: 'Ale sloužit se přeci musí!',
      answer: [
        'Nemusí!',
        'Pokud nemáte uvedený ve smlouvě vyloženě uvedený směnný provoz, tak opravdu sloužit nemusíte. Obzvláště, pokud by mělo jít přes ' +
        '150h/rok, které Vám zaměstnavatel může nařidít Lékaři 24 hodinovou pracovní dobu legální nemají a nikdy neměli. Tu mají pouze povolaní, ' +
        'která spadají pod služební zákon (hasiči, policisté atd.), kdy 24 hodin služby je následováno 48 hodinami odpočinku , a týkají se jich ' +
        'ještě další specifika. U lékařů je to tedy taktéž nazýváno nešťastně pojmem služba, ale je to v zásadě název „pracovní“ a ne „legislativní“, ' +
        'jedná se totiž o obyčejný přesčas (většinou, někdy se s tím vejdete do základní pracovní doby). A tam je maximální povolená doba práce ' +
        '12,5 hodiny v kuse. To že mnohdy lékaři slouží 24 hodin a že mnohdy místo jednoho dne odpočinku, natož dvou, je čeká další den v práci ' +
        '(a tedy 32 hodin v kuse nebo i více) je běžná praxe. A litera zákona hovoří jasně: VIII.5 Práce přesčas (§ 93)',
        '„Práci přesčas je možné konat jen výjimečně. Již z toho vyplývá, že práce přesčas nemůže být zaměstnavatelem předem rozvržena v rámci písemného rozvrhu týdenní pracovní doby (§ 84). Nedostatečné personální zabezpečení („podstav“) tudíž nemůže zaměstnavatel řešit tím, že bude dopředu rozvrhovat zaměstnanci pracovní dobu v rozsahu vyšším, než kolik činí stanovená týdenní, zkrácená stanovená týdenní nebo sjednaná kratší pracovní doba zaměstnance.“',
      ]
    },
  ],
  [
    {
      question: 'A co když sloužím na dohodu? Novela se mě netýká?',
      answer: [
        'Netýká se vás to? Přesný opak! Za prvné to, že nyní sloužíte na zvláštní DPČ/DPP je minimálně na hraně, spíše za hranou zákona. ' +
        '„Sjednání pracovní smlouvy a dohody o provedení práce či dohody o pracovní činnosti souběžně je možné pouze tehdy, pokud je druh ' +
        'vykonávané práce vymezen odlišně a odlišná práce je skutečně vykonávaná. V situaci, kdy je účelem pouze obcházení zákona, hrozí ' +
        'zaměstnavateli sankce od kontrolních orgánů.“',
        'Jak moc se tedy novela dotýká i všech, kterým se třeba povedlo si alespoň na dohodu vyjednat zajímavé finanční podmínky přesčasové ' +
        'práce/služeb? To nyní končí, přesčasy dosud schované do dohod budou nyní legální v rámci normální pracovní smlouvy a tedy budou ' +
        'odměňovány podle tabulek a bez jakýkoliv dalších výhod (nově třeba další nárok na dovolenou)…a zaměstnavatelé samozřejmě nyní rádi ' +
        'použijí argument, že je ilegální mít dvě smlouvy na jednu práci u jednoho zaměstnavatele, což nikomu z nich dosud nevadilo. ' +
        'Novela zákoníku práce umožňuje zvýšit počet dobrovolných přesčasů ze současných 416 hodin ročně na dvojnásobek a u zdravotních ' +
        'záchranářů ještě víc. Místo dohod by tak zdravotníci sloužili v rámci svého klasického úvazku.',
      ]
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Časté otázky a mýty
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Jaké jsou nejčastější otázky, kterým čelíme a mýty, které opakovaně vyvracíme? Zde naleznete odpovědi nejčastější otázky o přesčasech, odpovědnosti za péči o pacienty, právních aspektech pracovních smluv a dalších klíčových tématech, které formují každodenní život zdravotnických pracovníků.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
