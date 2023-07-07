import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { InputIcon, InputIconType } from '../icons/InputIcon'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  baseIconType: InputIconType
  isValid?: boolean
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      baseIconType,
      disabled = false,
      errorMessage = '',
      ...props
    }: InputProps,
    ref
  ) => {
    const [value, setValue] = useState('')

    const baseInputGroupStyles =
      'flex flex-row-reverse w-full py-[0.8125rem] px-[1.25rem] rounded-2xl border-[0.12rem] duration-300'
    const stateInputGroupStyles = classNames(
      disabled && 'border-greyLight bg-greyLight border-none',
      errorMessage !== ''
        ? 'border-greyLight border-lavenderRed'
        : 'border-greyLight focus-within:border-lavenderPurple hover:border-lavenderPurple'
    )

    const iconType: InputIconType = errorMessage === '' ? baseIconType : 'error'
    return (
      <div>
        <div
          className={classNames(baseInputGroupStyles, stateInputGroupStyles)}
        >
          <input
            {...props}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            disabled={disabled}
            className='peer w-full focus:outline-none ml-3 bg-[transparent] text-black placeholder:text-greyDark'
            type='text'
            ref={ref}
          />
          <InputIcon isActive={value !== ''} iconType={iconType} />
        </div>
        <p
          className={classNames(
            'duration-0 subtitle2 text-lavenderRed opacity-1 mb-4',
            errorMessage ? 'opacity-100' : 'opacity-0'
          )}
        >
          {errorMessage === '' ? 'Error' : errorMessage}
        </p>
      </div>
    )
  }
)
