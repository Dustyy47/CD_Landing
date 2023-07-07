import classNames from 'classnames'
import { InputHTMLAttributes, useState } from 'react'
import { InputIcon, InputIconType } from '../icons/InputIcon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  setValue: (value: string) => void
  baseIconType: InputIconType
  isValid?: boolean
  errorMessage?: string
}

export function Input({
  value,
  setValue,
  type,
  isValid = true,
  baseIconType,
  disabled = false,
  placeholder = '',
  errorMessage = '',
  ...props
}: InputProps) {
  const baseInputGroupStyles =
    'flex flex-row-reverse w-full py-[0.8125rem] px-[1.25rem] rounded-2xl border-[0.12rem] duration-300'
  const stateInputGroupStyles = classNames(
    disabled && 'border-greyLight bg-greyLight border-none',
    !isValid && 'border-greyLight border-lavenderRed',
    isValid &&
      'border-greyLight focus-within:border-lavenderPurple hover:border-lavenderPurple'
  )

  const iconType: InputIconType = isValid ? baseIconType : 'error'
  return (
    <div>
      <div className={classNames(baseInputGroupStyles, stateInputGroupStyles)}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          disabled={disabled}
          {...props}
          className='peer w-full focus:outline-none ml-3 bg-[transparent] text-black placeholder:text-greyDark'
          type='text'
          placeholder={placeholder}
        />
        <InputIcon isActive={value !== ''} iconType={iconType} />
      </div>
      <p
        className={classNames(
          'duration-300 subtitle2 text-lavenderRed opacity-1 mb-4',
          errorMessage ? 'opacity-100' : 'opacity-0'
        )}
      >
        {'Error'}
      </p>
    </div>
  )
}
