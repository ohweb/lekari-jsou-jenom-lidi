import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Právní poradna',
}

export default function PravniPoradna()
{
    return(
        <>
            <div className="bg-white px-6 py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nejčastější otázky k nepřetržitému režimu práce</h1>
                    <p className="mt-6 text-xl leading-8">
                        Ve spolupráci s Mgr. Alešem Buriánkem jsme pro vás připravili nejčastější právní otázky a odpovědi.
                    </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Jaké jsou rozdíly mezi dosavadním systémem práce lékařů (8 h práce všední den, péče mimo
základní pracovní dobu zajištěna přesčasy se střídáním po 24 h v práci) a nepřetržitým režimem,
kupř. ve 12hodinových směnách?
                    </h2>
                    <p className="mt-6">
                    Rozdíl mezi uvedenými systémy je dán především povahou provozu, resp. pracovního režimu, do nějž
je lékař zařazen, kdy jeho jednotlivé typy jsou definovány v ustanovení § 78 odst. 1 písm. d) až g)
zákoníku práce takto:
d) dvousměnným pracovním režimem režim práce, v němž se zaměstnanci vzájemně pravidelně
střídají ve 2 směnách v rámci 24 hodin po sobě jdoucích,
e) vícesměnným pracovním režimem režim práce, v němž se zaměstnanci vzájemně pravidelně střídají
ve 3 nebo více směnách v rámci 24 hodin po sobě jdoucích,
f) nepřetržitým pracovním režimem režim práce, v němž se zaměstnanci vzájemně pravidelně střídají
ve směnách v nepřetržitém provozu zaměstnavatele v rámci 24 hodin po sobě jdoucích,
g) nepřetržitým provozem provoz, který vyžaduje výkon práce 24 hodin denně po 7 dnů v týdnu.
Povaha pracovního režimu se pak odráží v rozsahu stanovené týdenní pracovní doby, která je u
zaměstnanců pracujících v jednosměnném pracovním režimu 40 hodin týdně, u zaměstnanců s
vícesměnným nebo nepřetržitým pracovním režimem 37,5 hodiny týdně a u těch s dvousměnným
pracovním režimem pak 38,75 hodiny týdně.
Případný výkon práce přesčas nemá na shora uvedené žádný dopad.
</p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Jak mi může zaměstnavatel nařídit nepřetržitý režim práce? Může to udělat jednostranně?
                    </h2>
                        <p className="mt-6">
                        Obecně platí, že o rozvržení pracovní doby, včetně typu režimu, do nějž bude zaměstnanec zařazen,
jednostranně rozhoduje zaměstnavatel. Pouze tehdy, pokud by měl zaměstnanec přímo v pracovní
smlouvě nebo v jejích dodatcích či přílohách, které by byly její nedílnou součástí, uvedeno, že bude
pracovat v jiném než nepřetržitém pracovním režimu, podléhala by změna typu pracovního režimu
dohodě mezi zaměstnancem a zaměstnavatelem.
                        </p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Komu nemůže zaměstnavatel nařídit nepřetržitý režim práce? 
                    </h2>
                    <p className='mt-6'>
                    Nařízení práce v nepřetržitém pracovním režimu žádné omezení nemá (samozřejmě pomineme-li
zaměstnance, pro něž je tato práce dle pracovnělékařského posudku nevhodná).
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Jak se můžu bránit vůči nařízení nepřetržitého režimu práce?
                    </h2>
                    <p className='mt-6'>
                    Pokud není zařazení zaměstnance do nepřetržitého režimu práce podmíněno dvoustrannou dohodou,
resp. změnou pracovní smlouvy, může se zaměstnanec tomuto postupu zaměstnavatele bránit jen
nepřímo, například tím, že zaměstnavateli pro případ svého zařazení do nepřetržitého pracovního
režimu sdělí, že nebude vykonávat žádnou práci přesčas nad 150 hodin nařízené přesčasové práce
ročně.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Může mi být nařízen nepřetržitý režim práce i když pečuji o dítě? Jestli ano, co s tím?
                    </h2>
                    <p className='mt-6'>
                    Přímý zákaz zařazení zaměstnance pečujícího o malé dítě do nepřetržitého pracovního režimu zákoník
práce nestanoví. Na druhé straně nicméně zákoník práce reflektuje potřebu zvýšené ochrany takových
zaměstnanců, a to v ustanovení § 241 zákoníku práce, kde se doslova uvádí:
(1) Zaměstnavatel je povinen přihlížet při zařazování do směn též k potřebám zaměstnankyně nebo
zaměstnance pečujícího o dítě.
(2) Požádá-li
a) těhotná zaměstnankyně,
b) zaměstnankyně nebo zaměstnanec pečující o dítě mladší než 15 let, nebo
c) zaměstnankyně nebo zaměstnanec, kteří převážně sami dlouhodobě pečují o osobu, která se podle
zvláštního právního předpisu považuje za osobu závislou na pomoci jiné fyzické osoby ve stupni II
(středně těžká závislost), ve stupni III (těžká závislost) nebo stupni IV (úplná závislost)77a),
zaměstnavatele písemně o kratší pracovní dobu podle § 80 nebo o jinou vhodnou úpravu
stanovené týdenní pracovní doby nebo kratší pracovní doby, je zaměstnavatel povinen žádosti
vyhovět, nebrání-li tomu vážné provozní důvody. Nevyhoví-li zaměstnavatel žádosti, je povinen to
písemně odůvodnit.
(3) Požádá-li zaměstnankyně nebo zaměstnanec, jejichž žádosti o kratší pracovní dobu podle odstavce
2 bylo vyhověno, zaměstnavatele písemně o obnovení nebo částečné obnovení rozsahu původní
týdenní pracovní doby a zaměstnavatel této žádosti nevyhoví, je povinen to písemně odůvodnit.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Kolik směn mi může zaměstnavatel měsíčně rozvrhnout, pokud jsem vypověděl práci přesčas?
Kolik směn mi může zaměstnavatel měsíčně rozvrhnout, pokud jsem nevypověděl práci přesčas, ale
konal jsem ji v posledních měsících?
                    </h2>
                    <p className='mt-6'>
                    Skutečnost, že zaměstnanec vypověděl dohodu o práci přesčas nemá na možnost zaměstnavatele
rozvrhovat pracovní směny, resp. na jejich počet a délku, žádný vliv. Zákoník práce stanoví pouze
maximální délku směny, a to na 12 hodin. Kratší maximální délku směny stanoví § 94 odst. 1 zákoníku
práce pro noční práci:
Délka směny zaměstnance pracujícího v noci nesmí překročit 8 hodin v rámci 24 hodin po sobě
jdoucích; není-li to z provozních důvodů možné, je zaměstnavatel povinen rozvrhnout stanovenou
týdenní pracovní dobu tak, aby průměrná délka směny nepřekročila 8 hodin v období nejdéle 26 týdnů
po sobě jdoucích, přičemž při výpočtu průměrné délky směny zaměstnance pracujícího v noci se
vychází z pětidenního pracovního týdne.
Jiné zákonné limity pro rozvrh směn stanoveny nejsou, tj. samozřejmě s výjimkou maximální
stanovené týdenní pracovní doby (viz shora odpověď na první otázku) a nutnosti dodržet nepřetržitý
denní odpočinek (minimálně 8 hodin během 24 hodin po sobě jdoucích) a nepřetržitý odpočinek v
týdnu (minimálně 24 hodin).
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Může zaměstnavatel při nepřetržitém režimu práce kombinovat různé délky směn? Za jakých
podmínek?
                    </h2>
                    <p className='mt-6'>
                    Ano, zaměstnavatel může kombinovat různě dlouhé směny, a to se stejnými omezeními, která jsou
uvedena v odpovědi na předchozí otázku.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Jak poznám situaci, kdy nás zaměstnavatel reálně převedl do nepřetržitého režimu práce, ale snaží
se tak neučinit i formálně (s nutností přiznat příplatek apod.)?
                    </h2>
                    <p className='mt-6'>
                    Převedení do nepřetržitého pracovního režimu z jednosměnného režimu zaměstnanec pozná
především tak, že se mu stanovená délka pracovní doby zkrátí na 37,5 hodiny týdně.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    V pracovní smlouvě mám uvedeno: jednosměnný provoz, 40 h týdně.
Je možné mi nařídit práci např. od 22:00 do 6:00 pětkrát v týdnu (vč. víkendu)?
Je možné mi nařídit 8hodinovou směnu v jakoukoliv denní dobu v průběhu 7 dnů, budou-li
dodrženy požadavky týkající se nepřetržitého denního a týdenního odpočinku?
                    </h2>
                    <p className='mt-6'>
                    Ano, takový postup zaměstnavatele je obecně možný.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Pokud je možné mi naplánovat směny v jakoukoliv dobu a střídá mě ve službě kolega nejedná se již
o nepřetržitý režim práce? Příklad: kolega A nevypověděl přesčasovou práci a hodlá pokračovat i
nadále v dosavadním (24h) režimu služeb, ale 3 kolegové B, C, D přesčasovou práci odmítli a mají se
střídat v 8h směnách během 24 hodin.
                    </h2>
                    <p className='mt-6'>
                    Ano, popsaný režim je i dle shora uvedené definice možno považovat za nepřetržitý pracovní režim,
resp. nepřetržitý provoz. K uvedenému je třeba doplnit, že zaměstnavatel není oprávněn příp.
zvýhodňovat v rámci rozpisu pracovní doby ty zaměstnance, kteří nedali výpověď dohody o práci
přesčas (v opačném případě by se jednalo o postup v rozporu s ustanovením § 16 odst. 1 zákoníku
práce, tedy s povinností zaměstnavatele zajišťovat rovné zacházení se všemi zaměstnanci). Jinak s
ohledem na aktuální právní úpravu nepřetržitého denního odpočinku je až do příp. nabytí účinnosti
zákoníku práce výkon práce v rozsahu 24 hodin po sobě jdoucích nelegální, resp. v rozporu se
zákonem.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    V pracovní smlouvě nemám upravený režim práce ani stanovenou délku týdenní pracovní doby. Je
možné, aby nám zaměstnavatel nařídil 8hodinové směny, aniž by nás převedl do nepřetržitého
režimu práce? 4 lékaři na ranní, 2 na odpolední a 2 na noční?
Je možné nařídit nepřetržitý režim práce při nižším než plném úvazku? Je možně při kratším úvazku
nařídit 8h směny kdykoliv v průběhu dne?
                    </h2>
                    <p className='mt-6'>
                    Ano, takový postup zaměstnavatele je obecně možný.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Zaměstnavatel mi zrušil již potvrzenou dovolenou na prosinec. Mám s manželkou koupené letenky,
musí zaměstnavatel nahradit škodu i za manželku?
                    </h2>
                    <p className='mt-6'>
                    V ustanovení § 217 odst. 3 zákoníku práce se doslova uvádí:

Zaměstnavatel je povinen nahradit zaměstnanci náklady, které mu bez jeho zavinění vznikly proto, že
zaměstnavatel změnil jemu určenou dobu čerpání dovolené nebo že ho odvolal z dovolené.
Je tedy nesporné, že náklady na letenky a příp. zaplacené ubytování je zaměstnavatel při změně
termínu čerpání dovolené, k níž došlo již po koupi zájezdu, povinen nahradit samotnému
zaměstnanci. Ve vztahu k manželce zaměstnance zákoník práce žádný přímý nárok na náhradu jejích
nákladů na takto zmařenou dovolenou nestanoví a tuto problematiku neřeší ani relevantní judikatura.
Dle mého soudu by dle konkrétních okolností bylo možné uvažovat o žalobě manželky na náhradu
újmy, kterou jí zaměstnavatel způsobil zmařením dovolené v případě, že by změna doby čerpání
dovolené nebyla objektivně nutná.
                    </p>
                    
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    Zaměstnavatel mi zrušil do konce roku dovolenou, zbývají mi vyčerpat 3 týdny. Musí mi je proplatit,
pokud je nechci převést do dalšího roku nebo je na zaměstnavateli, kolik dovolené mi převede do
dalšího roku?
                    </h2>
                    <p className='mt-6'>
                    Převedení dovolené do dalšího roku je v uvedeném případě skutečně na rozhodnutí zaměstnavatele.
Nevyčerpaná část dovolené se proplácí pouze v případě ukončení pracovního poměru.
Pro úplnost níže doplňuji ustanovení § 218 zákoníku práce, které upravuje situaci, kdy nebyla ani do
30.6. následujícího kalendářního roku vyčerpána dovolená převedená do dalšího roku:
(1) Čerpání dovolené podle § 211 je zaměstnavatel povinen zaměstnanci určit tak, aby dovolenou
vyčerpal v kalendářním roce, ve kterém zaměstnanci právo na dovolenou vzniklo, ledaže v tom
zaměstnavateli brání překážky v práci na straně zaměstnance nebo naléhavé provozní důvody.
(2) S přihlédnutím k oprávněným zájmům zaměstnance lze na základě jeho písemné žádosti část
dovolené za kalendářní rok, na kterou vzniklo právo v příslušném kalendářním roce a která přesahuje
4 týdny a u pedagogických pracovníků a akademických pracovníků vysokých škol 6 týdnů, převést do
následujícího kalendářního roku.
(3) Nemůže-li být dovolená vyčerpána podle odstavce 1 nebo byla-li její část převedena podle
odstavce 2, je zaměstnavatel povinen určit ji zaměstnanci tak, aby byla vyčerpána nejpozději do konce
následujícího kalendářního roku, není-li v odstavci 5 stanoveno jinak.
(4) Není-li čerpání dovolené určeno nejpozději do 30. června následujícího kalendářního roku, má
právo určit čerpání dovolené rovněž zaměstnanec. Čerpání dovolené je zaměstnanec povinen písemně
oznámit zaměstnavateli alespoň 14 dnů předem, pokud se nedohodne se zaměstnavatelem na jiné
době oznámení.
(5) Nemůže-li být dovolená vyčerpána ani do konce následujícího kalendářního roku proto, že
zaměstnanec byl uznán dočasně práce neschopným nebo z důvodu čerpání mateřské anebo
rodičovské dovolené, je zaměstnavatel povinen určit dobu čerpání této dovolené po skončení těchto
překážek v práci.
                    </p>
</div></div>
    
        </>
    )
}
