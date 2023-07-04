import { ButtonHTMLAttributes } from 'react'
import { SendIcon } from '../icons/SendIcon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className='flex justify-between py-[0.8125rem] px-[1.5rem] h-[3.125rem] w-full rounded-[3.125rem] bg-lavenderPurple'
    >
      <p className='subtitle2 text-white'>{children as string}</p>

      <SendIcon
        width='1.5rem'
        classname='fill-white stroke-lavenderPurple w-[2rem]'
      />
    </button>
  )
}
