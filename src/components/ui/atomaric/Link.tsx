import { LinkHTMLAttributes } from 'react'
import { SendIcon } from '../icons/SendIcon'

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className='hover:bg-lavenderPurpleDark active:border-lavenderPurpleLight bg-lavenderPurple border-[3px] border-[transparent] flex items-center justify-between py-[0.8125rem] px-[1.5rem] h-[3.125rem] w-full rounded-[3.125rem]  duration-300'
    >
      <p className='subtitle2 text-white'>{children as string}</p>
      <SendIcon classname='f w-[1.5rem] fill-white stroke-lavenderPurple' />
    </a>
  )
}
