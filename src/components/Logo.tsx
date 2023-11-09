import logoMyval from '@/images/logos/logo-myval-a-text.svg'
import Image from 'next/image'

export function Logo(props:any) {
  return (
      <Image src={logoMyval} unoptimized alt='Mýval jako doktor' {...props} />
  )
}
