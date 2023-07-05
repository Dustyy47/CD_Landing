import classNames from 'classnames'
import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
  setValue: (v: string) => void
}

export function Textarea({
  value,
  setValue,
  disabled,
  placeholder
}: TextareaProps) {
  const baseStyles =
    'w-full duration-300 bodyText2 text-black py-[0.8125rem] px-5 placeholder:greyDark rounded-2xl h-[7.625rem] border-[0.08125rem] border-greyLight'
  const stateStyles = classNames(
    disabled && 'bg-greyLight border-none',
    !disabled &&
      'focus:border-lavenderPurple focus:outline-none hover:border-lavenderPurple'
  )

  return (
    <textarea
      disabled={disabled}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={classNames(baseStyles, stateStyles)}
    >
      {value}
    </textarea>
  )
}
