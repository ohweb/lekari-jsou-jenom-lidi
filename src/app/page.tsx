import {CallToAction} from '@/components/CallToAction'
import {Faqs} from '@/components/Faqs'
import {Hero} from '@/components/Hero'
import {PrimaryFeatures} from '@/components/PrimaryFeatures'
import {Testimonials} from '@/components/Testimonials'
import LatestBlogPosts from '@/components/Posts/LatestBlogPosts'

import avatarImageFemale1 from '@/images/avatars/doctor-female-01.png'
import avatarImageFemale2 from '@/images/avatars/doctor-female-02.png'
import avatarImageFemale3 from '@/images/avatars/doctor-female-03.png'
import avatarImageFemale4 from '@/images/avatars/doctor-female-04.png'
import avatarImageFemale5 from '@/images/avatars/doctor-female-05.png'
import avatarImageFemale9 from '@/images/avatars/doctor-female-09.png'
import avatarImageFemale10 from '@/images/avatars/doctor-female-10.png'
import avatarImageMale1 from '@/images/avatars/doctor-male-01.png'

const limitedTestimonials = [
    [
        {
            content: 'Jsem máma dvou školkových dětí, s plným úvazkem v chirurgickém oboru. Každý měsíc odpracuji přes 200 hodin v noci a o víkendech. Vzhledem ke své pracovní době přicházím o velkou část života svých dětí. Nikdy jsem je třeba nevyzvedla ze školky. Pokud bych měla možnost odcházet po službě domů, mohla bych s nimi trávit velkou část dne, vzít je na výlet. Proto vypovídám přesčasy.',
            image: avatarImageFemale1,
        },
        {
            content: 'Před MD jsem se z vyčerpání ze služeb stávala jiným člověkem a špatným lékařem a ani jsem si to pořádně neuvědomovala, až do chvíle, než jsem kvůli těhotenství přestala sloužit. Najednou jsem v práci byla víc trpělivá, víc mě to bavilo, chodila jsem domu spokojenější.',
            image: avatarImageFemale2,
        },
    ],
    [
        {
            content: 'V nemocnici šlo o práci na 1,5-2 úvazky, bez šance nějak ovlivnit množství přesčasové práce, ačkoli jsem měla 3 a později 4 malé děti. Šlo o práci bez šance získat atestaci, bez šance absolvovat povinné stáže v rámci předatestační přípravy. Vše kvůli špatné personální situaci na oddělení, jak mi bylo opakovaně řečeno ze strany managementu.',
            image: avatarImageFemale9,
        },
        {
            content:
                'Oba jsme s manželem sloužili každý více než deset let 7 až 14 služeb měsíčně v nemocnicích Stod, Klatovy, Plzeň, Domažlice, bez nároku na volno po službě, rozvedli jsme se…',
            image: avatarImageFemale4,
        },
        {
            content: 'Volali mi 4 dny po porodu, jestli nevezmu sobotní (24h) službu',
            image: avatarImageFemale10,
        },
    ],
    [
        {
            content:
                'Kvůli přesčasům jsem po letech byla dotlačená k výpovědi v práci, snažila jsem se ke zkrácenému úvazku domluvit na menším počtu služeb, než měli kolegové s celým úvazkem, což se mi samozřejmě nepovedlo.',
            image: avatarImageFemale3,
        },
        {
            content:
                'Pri pohovoru mi bylo receno, ze "sluzby jsou dobrovolne, ale pokud nebudete slouzit, ani nemusite nastupovat". Dokud jsem otěhotněla, bylo zcela běžné, že jsem byla v praci po i 32 hod. Samozrejme, ne všechny služby byly pekelné, prece jen nejsem traumatolog, ovšem byly i narocne sluzby, po kterých se mi nejednou stalo, že jsem málem usla za volantem po cestě domů. Věřím, že nejsem jediny lekar, ktery dojizdi do prace, a jet po 72 hodinách v práci třeba 60 km domů již není jen nebezpečí pro pacienta, ale i pro samotného lékaře!',
            image: avatarImageFemale5,
        },
    ],
]

export default function Home() {
    return (
        <main>
            <Hero/>
            <LatestBlogPosts/>
            <PrimaryFeatures/>
            <Faqs/>
            <CallToAction/>
            <Testimonials testimonials={limitedTestimonials}/>
        </main>
    )
}
