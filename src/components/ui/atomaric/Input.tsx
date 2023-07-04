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
  ...props
}: InputProps) {
  const baseInputGroupStyles =
    'flex w-full py-[0.8125rem] px-[1.25rem] rounded-2xl border-[0.08rem] border-greyLight'
  const stateInputGroupStyles = isValid ? '' : 'border-lavenderRed'

  return (
    <div>
      <div className={classNames(baseInputGroupStyles, stateInputGroupStyles)}>
        <InputIcon iconType={baseIconType} />
        <input
          {...props}
          className='w-full ml-[0.75rem]  '
          type='text'
          placeholder='name@example.com'
        />
      </div>
      <p></p>
    </div>
  )
}
