import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import { SendIcon } from '../icons/SendIcon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

export function Button({ children, disabled, href, ...props }: ButtonProps) {
  const baseStyles =
    'border-[3px] border-[transparent] flex items-center justify-between py-[0.8125rem] px-[1.5rem] h-[3.125rem]  rounded-[3.125rem] w-fit  duration-300'
  const stateButtonStyles = disabled
    ? 'bg-greyLight text-greyDark cursor-not-allowed'
    : 'hover:bg-lavenderPurpleDark active:border-lavenderPurpleLight bg-lavenderPurple'

  const baseSendIconStyles = 'f w-[1.5rem]'
  const stateSendIconStyles = disabled
    ? 'fill-greyDark stroke-greyLight'
    : 'fill-white stroke-lavenderPurple'

  const textStyles = classNames(
    'subtitle2 mr-3',
    disabled ? 'text-greyDark' : 'text-white'
  )

  return (
    <button className={classNames(baseStyles, stateButtonStyles)} {...props}>
      <p className={textStyles}>{children as string}</p>
      <SendIcon
        classname={classNames(baseSendIconStyles, stateSendIconStyles)}
      />
    </button>
  )
}
