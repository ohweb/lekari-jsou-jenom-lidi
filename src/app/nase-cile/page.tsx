import {Metadata} from "next";
import {Container} from "@/components/Container";

export const metadata: Metadata = {
    title: 'Naše cíle',
}

export default function NaseCile() {
    return (
        <main>
            <section
                id="nase-cile"
                aria-label="Co jsou naše hlavní cíle a proti čemu bojujeme"
                className="bg-slate-50 py-20 sm:py-32"
            >
                <Container>
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                            Naše cíle
                        </h2>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            Pracovní podmínky ve zdravotnictví jsou dlouhodobě na hraně únosnosti.
                            Zde jsou čtyři hlavními cíle naší akce Lékaři jsou jenom lidi, která se soustředí na zrušení neúměrných pracovních požadavků, zajištění spravedlivých pracovních podmínek, zlepšení dodržování pracovní legislativy a zvýšení platů zdravotnických pracovníků.
                        </p>
                    </div>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. zrušení současné podoby novely zákoníku práce (paragraf 93a)</h2>
                    <p className="mt-6">Novela přináší do zákoníku práce dalších 416 hodin/rok &quot;dobrovolných&quot; přesčasů pro zdravotníky.
                        S již existujícím limitem 416 hodin/rok to dává 832h přesčasů za rok, což je naprosto
                        neakceptovatelné. Jen pro představu, dělá to dohromady možnost pracovat 365 8hodinových směn či
                        243 12hodinových směn za rok.</p>
                    <p className="mt-6">Naprosto chápeme, že práce ve zdravotictví vyžaduje jistá specifika v legislativě (jako například, jestli je vhodnější sloužit 12h či 24h), a chceme na toto téma vést konstruktivní diskusi. Zdvojnásobení počtu přesčasů příkazem za konstrutivní diskusi nepovažujeme.</p>
                    <h3>Nebojujeme za směnný provoz ani za 12hodinové služby!</h3>
                    <p className="mt-6">Bojujeme za udržitelné zdravotnictví pro pacienty i pro všechny, kdo v něm pracují.</p>
                    <p className="mt-6">Bojujeme za zákoník práce, který zohlední specifika zdravotnického provozu a zároveň bude motivovat a chránit zaměstnance.</p>
                    <p className="mt-6">Považujeme za přijatelné, stráví-li lékař v práci 12, 16 nebo i 24 hodin s přihlédnutím ke konkrétnímu provozu, bude-li následovat náležitý odpočinek a bude-li odměněn způsobem odpovídajícím náročnosti jeho práce.Jsme si vědomi toho, že dnes české zdravotnictví stojí na přesčasové práci. Uznat a legalizovat tento stav navýšením přesčasového limitu na 832 hodin je krátkozraké a škodlivé řešení.Naši zákonodárci se s tím zjevně spokojili. My ne. Musíme to změnit. Lékaři nesmí být nuceni k přesčasové práci z ekonomických důvodů či pod různými pohrůžkami. Musí být adekvátně ohodnoceni už za práci v základní pracovní době.</p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. nastavení dlouhodobě udržitelných pracovních podmínek</h2>
                    <p className="mt-6">Pro budoucnost českého veřejného zdravotnictví je naprosto zásadní vytvořit fungující systém, do kterého lékař v 25 letech vstoupí a opustí ho za 40 let. To se momentálně neděje. Vzhledem k poměrům, které v něm panují, lékaři opouští veřejné zdravotnictví ve chvíli, kdy můžou. Nebo kdy musí, protože už tisíce hodin přesčasů nevydrží či musí z něčeho zaplatit hypotéku. Jak tedy zajistit, aby lékaři (a obecně zdravotníci) neodcházeli? Snadno, dát jim normální pracovní podmínky a plat odpovídající vysoce kvalifikované pracovní síle.</p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. důsledné dodržování a kontrola přesčasové práce</h2>
                    <p className="mt-6">Zákoník práce se zejména v nemocnicích plošně a systematicky porušuje. Stanovuje maximální délku směny na 12 hodin. Zcela běžně se pracuje dvojnásobek, někde i více než 72 hodin bez přestávky na odpočinek. Nebojujeme za směnný provoz ani za 12hodinové služby. Bojujeme za zákoník práce, který zohlední specifika zdravotnického provozu a zároveň bude motivovat a chránit zaměstnance.</p>
                    <p className="mt-6">Zákoník práce umožňuje se souhlasem zaměstnance odpracovat 416 hodin přesčasové práce ročně. Limit bývá u mnoha lékařů překročen již květnu, nezřídka i dříve. Ale pracuje se dál. Co na to stát? Co na to orgány inspekce práce? Nikdy nic nezjistily. Pracuje se dál a všem je to jedno. Nikoho to netrápí, protože pracujeme levně.</p>

                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. navýšení ceny práce lékaře v základní pracovní době na důstojnou úroveň a zajištění valorizace</h2>
                    <p className="mt-6">Český stát si cení práce lékaře po škole na 232 Kč/hod hrubého (platová tabulka 38980 Kč) a po atestaci 300Kč/hod hrubého (platová tabulka +-50000 Kč), kdy už je plně zodpovědný nejen sám za sebe, ale i za všechny, kteří pracují pod ním. Tato částka je naprosto neadekvátní a lékaři jsou tak mimojiné ekonomicky nuceni pracovat 1,5 až 2 násobek normální pracovní doby, aby si byl schopen vydělat na živobytí.</p>
                    <p className="mt-6">Je potřeba zvýšit základní hodinové ohodnocení lékařů. Dokud je lékař levná pracovní síla, je každému jedno, kolik hodin pracuje. Teprve ve chvíli, kdy bude práce lékaře, jakožto vysoce specializované pracovní síly, adekvátně ohodnocená, a to už v základní pracovní době, přestane se s ní plýtvat a začne se s ní nakládat s rozmyslem. Ale ne ve smyslu omezení péče o pacienty, právě naopak. Aby lékař za své peníze vykonával opravdu jen práci lékaře a věnoval se pacientům. A ne aby trávil čas papírováním, vyplňování tabulek a formulářů či prostě jen držel službu v nějaké nemocnici či na oddělení, kde se za celou noc či víkend skoro nic neděje a ekonomicky ani medicínsky to celé nedává smysl, ale z politických důvodů ji není možné zavřít.</p>
                    <p className="mt-6">Toto nám již bylo slíbeno v roce 2013 <a className="text-base font-semibold text-cyan-600" href="https://www.idnes.cz/zpravy/domaci/memorandum-hegera-a-odboru.A110215_083059_domaci_jw">v Hegerově memorandu <span aria-hidden="true">→</span></a></p>
                    <p className="mt-6">&ldquo;Přidávání v roce 2012 – v souvislosti s reformou se průměrný plat lékaře zvýší o deset procent a od roku 2013 pak dosáhne 1,5 až trojnásobku průměrné mzdy ve státě, v roce 2012 porostou také platy všem zdravotnickým pracovníkům&rdquo; <br />Uplynulo 10 let a nestalo se nic…</p>
                </Container>
            </section>
        </main>
    )
}
