import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'
import { InputIcon, InputIconType } from '../icons/InputIcon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  baseIconType: InputIconType
  label: string
  isRequired: boolean
  isValid: boolean
}

export function Input({
  type,
  isValid,
  label,
  baseIconType,
  isRequired,
  disabled,
  ...props
}: InputProps) {
  const baseInputGroupStyles =
    'flex w-full py-[0.8125rem] px-[1.25rem] rounded-2xl border-[0.08rem] border-greyLight'
  const stateInputGroupStyles = disabled
    ? 'bg-greyLight border-none'
    : isValid
    ? ''
    : 'border-lavenderRed'

  return (
    <div>
      <label className='block mb-2 subtitle2'>
        {label}
        <span className={isRequired ? 'text-lavenderRed' : 'opacity-0'}>
          {' '}
          *
        </span>
      </label>
      <div className={classNames(baseInputGroupStyles, stateInputGroupStyles)}>
        <InputIcon iconType={baseIconType} />
        <input
          disabled={disabled}
          {...props}
          className='w-full ml-3 bg-[transparent] text-black'
          type='text'
          placeholder='name@example.com'
        />
      </div>
      <p></p>
    </div>
  )
}
