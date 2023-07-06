import { ButtonHTMLAttributes } from 'react'
import { SendIcon } from '../icons/SendIcon'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

export function Button({ children, disabled, href, ...props }: ButtonProps) {
  const baseStyles =
    'border-[3px] border-[transparent] flex items-center justify-between py-[0.8125rem] px-[1.5rem] h-[3.125rem] w-full rounded-[3.125rem]  duration-300'
  const stateButtonStyles = disabled
    ? 'bg-greyLight text-greyDark'
    : 'hover:bg-lavenderPurpleDark active:border-lavenderPurpleLight bg-lavenderPurple'

  const baseSendIconStyles = 'f w-[1.5rem]'
  const stateSendIconStyles = disabled
    ? 'fill-greyDark stroke-greyLight'
    : 'fill-white stroke-lavenderPurple'

  const textStyles = classNames(
    'subtitle2',
    disabled ? 'text-greyDark' : 'text-white'
  )

  return (
    <button className='w-full' {...props}>
      <a href={href} className={classNames(baseStyles, stateButtonStyles)}>
        <p className={textStyles}>{children as string}</p>
        <SendIcon
          classname={classNames(baseSendIconStyles, stateSendIconStyles)}
        />
      </a>
    </button>
  )
}
