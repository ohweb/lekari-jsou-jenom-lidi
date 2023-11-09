import Image from 'next/image'
import { Container } from '@/components/Container'
import logoMladiLekari from '@/images/partners/logo-mladi-lekari.png'
import logoOszas from '@/images/partners/logo-oszas.png'
import logoEjd from '@/images/partners/logo-ejd.png'
import logoLokScl from '@/images/partners/logo-lok-scl.png'
import logoClk from '@/images/partners/logo-ceska-lekarska-komora.png'
import logoChs from '@/images/partners/logo-ceska-hematologicka-spolecnost.png'
import logoRodinnySvaz from '@/images/partners/logo-rodinny-svaz-cr.png'
import logoNarodniCentrumProRodinu from '@/images/partners/logo-narodni-centrum-pro-rodinu.png'
import logoAsociaceStudentuMediciny from '@/images/partners/logo-asociace-studentu-mediciny.png'
import logoMladiPraktici from '@/images/partners/logo-mladi-praktici.png'
import logoTrimed from '@/images/partners/logo-trimed.png'

export default function Partners(){
    return (
    <Container>
        <div className="mt-36 lg:mt-44">
          <p className="font-display text-base text-slate-900">
            Podpořili nás tyto lékařské spolky
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                { name: 'Trimed', logo: logoTrimed },
                { name: 'Mladí praktici', logo: logoMladiPraktici },
                { name: 'Asociace studentů medicíny', logo: logoAsociaceStudentuMediciny },
                { name: 'Národní centrum pro rodinu', logo: logoNarodniCentrumProRodinu },
                { name: 'Rodinný svaz ČR', logo: logoRodinnySvaz },
                { name: 'Česká hematologická společnost', logo: logoChs },
              ],
              [
                { name: 'Česká lékařská komora', logo: logoClk },
                { name: 'LOK SCL', logo: logoLokScl },
                { name: 'European Junior Doctors', logo: logoEjd },
                { name: 'OSZAS', logo: logoOszas },
                { name: 'Mladí lékaři', logo: logoMladiLekari },
              ],
            ].map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image src={company.logo} alt={company.name} unoptimized />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      )
}