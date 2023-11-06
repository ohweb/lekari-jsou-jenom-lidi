import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImageFemale1 from '@/images/avatars/doctor-female-01.png'
import avatarImageFemale2 from '@/images/avatars/doctor-female-02.png'
import avatarImageFemale3 from '@/images/avatars/doctor-female-03.png'
import avatarImageFemale4 from '@/images/avatars/doctor-female-04.png'
import avatarImageFemale5 from '@/images/avatars/doctor-female-05.png'
import avatarImageFemale6 from '@/images/avatars/doctor-female-06.png'
import avatarImageFemale7 from '@/images/avatars/doctor-female-07.png'
import avatarImageFemale8 from '@/images/avatars/doctor-female-08.png'
import avatarImageFemale9 from '@/images/avatars/doctor-female-09.png'
import avatarImageFemale10 from '@/images/avatars/doctor-female-10.png'
import avatarImageFemale11 from '@/images/avatars/doctor-female-11.png'
import avatarImageMale1 from '@/images/avatars/doctor-male-01.png'
import avatarImageMale2 from '@/images/avatars/doctor-male-02.png'
import avatarImageMale3 from '@/images/avatars/doctor-male-03.png'
import avatarImageMale4 from '@/images/avatars/doctor-male-04.png'
import avatarImageMale5 from '@/images/avatars/doctor-male-05.png'

const testimonials = [
  [
    {
      content:
        'Jsem máma dvou školkových dětí, s plným úvazkem v chirurgickém oboru. Každý měsíc odpracuji přes 200 hodin v noci a o víkendech. Vzhledem ke své pracovní době přicházím o velkou část života svých dětí. Nikdy jsem je třeba nevyzvedla ze školky. Pokud bych měla možnost odcházet po službě domů, mohla bych s nimi trávit velkou část dne, vzít je na výlet. Proto vypovídám přesčasy.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale1,
      },
    },
    {
      content:
        'Před MD jsem se z vyčerpání ze služeb stávala jiným člověkem a špatným lékařem a ani jsem si to pořádně neuvědomovala, až do chvíle, než jsem kvůli těhotenství přestala sloužit. Najednou jsem v práci byla víc trpělivá, víc mě to bavilo, chodila jsem domu spokojenější.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale2,
      },
    },
        {
      content:
        'Z nemocnice jsem odešla (dala jsem výpověď) a v podstatě hlavní důvod, proč se již nechci vracet na žádné dětské oddělení (i když mě obor baví), jsou právě služby (přesčasová práce), které pro mě jako matku samoživitelku se dvěma malými dětmi jsou neslučitelné s péčí o děti/rodinu.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale3,
      },
    },
    {
      content:
        'Naše personální situace je kritická, sloužím zatím krátce (2 měsíce), nicméně po službě domů nechodíme. A já už dlouho doufám, že mě vysvobodí těhotenství.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale4,
      },
    },
    {
      content:
        'Sloužila jsem do 5.měsíce kvůli penězům, o vyrovnávací příspěvek jsem požádala a nedostala nic.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale5,
      },
    },
    {
      content:
        'Sloužila jsem ještě 14 dní před nástupem na MD. Špatná personální situace.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale6,
      },
    },
    {
      content:
        'Pracuji na klinice, kde jako matka s malými dětmi nejsem nucena sloužit, ale dobrovolně si beru jednu až dvě služby, protože si tím člověk alespoň trochu přivydělá. Ovšem manžel je také lékař a peníze za jeho služby jsou pro nás naprosto nezbytné, bez nich bychom asi neměli kde bydlet. Pokud by se dodržoval Zákoník práce a tabulkové platy zůstaly na současné výši, tak bychom zřejmě měli problém vyžít.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale7,
      },
    },
    {
      content:
        'Pracujem na detskom oddelení a pred atestaciou sa mňa aj ostatných kolegýň primár pravidelne pýtal kedy plánujeme materskú a podobne zálezitosti. Myslela som, že sa potrebuje zariadiť do budúcna, tak som napriek nevhodnosti otázky pravdivo odpovedala že niekedy po atestacii. Primár sa nahneval a chcel aby som mu sľúbila, že otehotniem najskôr za rok po atestacii, lebo svojou prácou a službami sa musím odvďačiť jemu a nemocnici že mi umožnili odatestovat. Ohradila som sa, že rozhodne nič odkladať nebudem, načo mi bolo povedané že nemám predsa 40 aby mi tikali biologické hodiny a že existuje antikoncepcia. Pomyslela som si svoje, ale nič som neslubila a v máji 2022 úspešne odatestovala, stáže aj všetko mi bolo umožnené. Otehotnela som v septembri 2022, hneď som to oznámila s tým, že služby ktoré mám rozpísané odslúžim a v októbri ak sa tehotenstvo potvrdí už slúžiť nebudem. Primár má ale rozpísal aj na október s tým, že keď tak to potom prepíše. V realite ale za mnou na konci septembra prišiel, že buď tie služby odslúžim alebo si to mám zariadiť sama,lebo on nič prepisovať nebude. A že je zvykom že na našom oddelení tehotné slúžia aspoň nejaké 3 služby, tak by som mohla byť ochotná aj ja…. Po tejto skúsenosti a správaní primára sa tam už nevrátim, budem si hľadať prácu v súkromnom sektore. Podotýkam že som nekonfliktny typ človeka a vždy som bola ochotná kolegom pomáhat, ale slúžiť v tehotenstve je podľa mňa nemysliteľne.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale8,
      },
    },
  ],
  [
    {
      content:
        'V nemocnici šlo o práci na 1,5-2 úvazky, bez šance nějak ovlivnit množství přesčasové práce, ačkoli jsem měla 3 a později 4 malé děti. Šlo o práci bez šance získat atestaci, bez šance absolvovat povinné stáže v rámci předatestační přípravy. Vše kvůli špatné personální situaci na oddělení, jak mi bylo opakovaně řečeno ze strany managementu.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale9,
      },
    },
    {
      content:
        'Volali mi 4 dny po porodu, jestli nevezmu sobotní (24h) službu',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale10,
      },
    },
    {
      content:
        'Vydržal som 2 roky po škole. Z toho rok a pol cca 110 hodín prescas mesačne. Skončil som vyhorený a v starostlivosti psychiatra. Teraz mením pracovisko, kde nebudem pracovať prescas.',
      author: {
        name: '',
        role: '',
        image: avatarImageMale1,
      },
    },
    {
      content:
        'Současně nastavený systém spěje ke kolapsu a navýšení zákonného limitu jeho směřování neřeší, ba konzervuje. Už si nechci lhát do kapsy, že vydržím cca 80 hodin práce navíc každý měsíc až do důchodu. Nejsem nadčlověk a potřebuju si po práci na dětském JIPu odpočinout, abych ji pak mohl dál vykonávat kvalitně a měl motivaci v ní zůstat. Ač se jedná o iniciativu Mladých lékařů, tak se tato problematika týká i lidí, kterým je přes 60 let. Generace současných absolventů (ke které už bohužel nepatřím) není línější nebo méně zapálená a pracovitá. Jenom zná svou cenu a víc si váží hodnot jako je rodina a mezilidské vztahy. A na tom není nic, za co bychom se měli stydět.',
      author: {
        name: '',
        role: '',
        image: avatarImageMale2,
      },
    },
    {
      content:
        'Odešla jsem z nemocnice po 3 letech úplně fyzicky i psychicky vyřízená, sloužili jsme 6 služeb měsíčně, nemálo kolegů slouží pa-so-ne, dobrovolné to bylo jen zčásti- sloužit méně nešlo, kdo by zajistil provoz, tlak ze stran vedení a kolegů je obrovský, nelze říct - nesloužím... Jediná cesta byla odejít.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale11,
      },
    },
    {
      content:
        'Již několik let si procházím syndromem vyhoření z neustálého tlaku a zvyšování požadavků na naše pracovní nasazení s nutností boje o každé navýšení/valorizace platu a tendencí kriminalizace lékařů ze strany "klientů" i zaměstnavatele, bez jakéhokoliv uznání. Jsem naplněná pocitem totální marnosti našeho počínání. ',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale1,
      },
    },
    {
      content:
        '6 služeb měsíčně ve schématu: člověk je sám na 2 oddělení, 2 JIPy, úrazovku a Emergency (pokud jsou oba starší zrovna na sále - a to bylo často). S délkou služeb obvykle kolem 34 až 36 hodin, pak rychle na pár hodin domů vyspat a opět do práce.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale2,
      },
    },
    {
      content:
        'Dokončím atestaci a okamžitě odcházím z nemocnice pokud budou platy stejné. Přesčasy mi nepřekáží, když mi je někdo adekvátně zaplatí (1000Kč/hod. a více).',
      author: {
        name: '',
        role: '',
        image: avatarImageMale3,
      },
    },
    {
      content:
        'Bez služeb jako neatestovany doktor neutáhnu rodinný rozpočet.',
      author: {
        name: '',
        role: '',
        image: avatarImageMale4,
      },
    },
    {
      content:
        'Sloužil jsem přes 20 let jako”otrok”. I díky tomu se mi po 16 letech rozpadla rodina. Ve špitálu jsem strávil “mládí i střední věk”. Želežničaři, policisté,hasiči atd. šli po službě domů. My jsme museli “držet hubu a krok” a “ sloužit zdraví lidu”.',        
      author: {
        name: '',
        role: '',
        image: avatarImageMale5,
      },
    },
  ],
  [
    {
      content:
        'Kvůli přesčasům jsem po letech byla dotlačená k výpovědi v práci, snažila jsem se ke zkrácenému úvazku domluvit na menším počtu služeb, než měli kolegové s celým úvazkem, což se mi samozřejmě nepovedlo.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale3,
      },
    },
    {
      content:
        'Oba jsme s manželem sloužili každý více než deset let 7 až 14 služeb měsíčně v nemocnicích Stod, Klatovy, Plzeň, Domažlice, bez nároku na volno po službě, rozvedli jsme se…',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale4,
      },
    },
    {
      content:
        'Pri pohovoru mi bylo receno, ze "sluzby jsou dobrovolne, ale pokud nebudete slouzit, ani nemusite nastupovat". Dokud jsem otěhotněla, bylo zcela běžné, že jsem byla v praci po i 32 hod. Samozrejme, ne všechny služby byly pekelné, prece jen nejsem traumatolog, ovšem byly i narocne sluzby, po kterých se mi nejednou stalo, že jsem málem usla za volantem po cestě domů. Věřím, že nejsem jediny lekar, ktery dojizdi do prace, a jet po 72 hodinách v práci třeba 60 km domů již není jen nebezpečí pro pacienta, ale i pro samotného lékaře!',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale5,
      },
    },
    {
      content:
        'Náš přednosta již od Vaší tiskovky s ohlášením iniciativ nebuď mýval střídavě shazuje tuto akci, osobně napadá zejména doktora Přádu a skrytě i méně skrytě vyhrožuje nám, mladým lékařům, nemožností atestace, finančním postihem apod. Vrcholem bylo prohlášení, že my přeci zákoník práce dodržujeme.',
      author: {
        name: '',
        role: '',
        image: avatarImageFemale6,
      },
    },
    {
      content:
        'Po více než 24h v práci (přesně to bylo asi 26h) jsem dělal ranní vizitu u dítěte, které 2 dny nato zemřelo a myslím si, že kdybych byl odpočatější, a hlavně už tolik nespěchal domů k rodině, mohl bych vizitu provést pečlivěji (resp. se nad tím více zamyslet) a možná o pár hodin dříve zasáhnout, což by prognózu dítěte mohlo ovlivnit, možná ho i zachránit.',
      author: {
        name: '',
        role: '',
        image: avatarImageMale1,
      },
    },
    {
      content:
        'Bohužel již nezapadám věkem ani délku lékařské praxe mezi mladé lékaře. T.č. mám 14 let od ukončení vysoké školy, 6 let od složení atestace z vnitřního lékařství, uf toto letí…. Přes covidové období jsem byl primářem interního odd. nemocnice …. Jak se všude píše, proto aby člověk zajistil rodinu - ženu na mateřské, hypotéku a leasing, musel jsem odsloužit nemalý počet hodin v rámci DPČ či DPP. Po atestaci navíc jako lékař záchranné služby, LSPP. Tedy celkem kromě hlavního úvazku (168h)  další 4 dohody na činnosti s odpracovanými 100-120h měsíčně. Dost jsem řekl v situaci, kdy z malé okresní nemocnice začali odcházet lékaři a jediným řešením vedení nemocnice bylo nutit nás zbylé do zvyšování počtu hodin na přesčasech, v mém případě DPP, DPČ. Proto jsem odešel  do soukromé sféry, založil s manželkou na "zelené louce" interní ambulanci a ambulanci všeobecného praktického lékaře. Nyní mám osobní život. Na víkend a dny státního volna se těšíme a nemáme stres z toho, komu službu napsat, popřípadě spíše si ji vzít sám, protože jako vedoucí to nakonec musíte zajistit.',
      author: {
        name: '',
        role: '',
        image: avatarImageMale2,
      },
    },
    {
      content:
        'Za rok celkově 1200 hodin přesčasů, z toho 95% o víkendu, protože jsou lépe zaplacené. Takto ,,otročím,, z důvodu naprosto směšného základního platu, za který bych neuživil rodinu s ženou v očekávání dítěte a už vůbec ne v kombinaci se splácením hypotéky. Pokud finanční ohodnocení v nemocnici a soukromé sféře v mém oboru zůstane tak rozdílné i v době, kdy budu atestovaný a bude mi připadat, že svůj obor již dostatečně umím, tak odejdu do soukromého sektoru.',
      author: {
        name: '',
        role: '',
        image: avatarImageMale3,
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Vaše příběhy
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Skutečné příběhy od Vás, lékařek a lékařů. Mladých i těch s letitými zkušenostmi se špatně nastaveným systémem služeb, přesčasů a bezohledných požadavků na lékaře.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
