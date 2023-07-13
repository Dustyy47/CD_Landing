import { LinkHTMLAttributes } from 'react'
import { SendIcon } from '../icons/SendIcon'

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  href: string
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className='hover:bg-lavenderPurpleDark active:border-lavenderPurpleLight bg-lavenderPurple border-[3px] border-[transparent] flex items-center justify-between md:py-[0.8125rem] sm:py-[0.5rem] md:px-[1.5rem] sm:px-[0.8125rem] w-fit rounded-[3.125rem]  duration-300'
    >
      <p className='md:subtitle2 sm:mob_subtitle2 text-white mr-3'>
        {children as string}
      </p>
      <SendIcon classname='f md:w-[1.5rem] sm:w-[1.1rem] fill-white stroke-lavenderPurple' />
    </a>
  )
}
