import classNames from 'classnames'
import { TextareaHTMLAttributes, forwardRef } from 'react'

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'ref'> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ disabled, placeholder }: TextareaProps, ref) => {
    const baseStyles =
      'w-full resize-none duration-300 bodyText2 text-black py-[0.8125rem] px-5 placeholder:greyDark rounded-2xl h-[7.625rem] border-[0.08125rem] border-greyLight'
    const stateStyles = classNames(
      disabled && 'bg-greyLight border-none',
      !disabled &&
        'focus:border-lavenderPurple focus:outline-none hover:border-lavenderPurple'
    )

    return (
      <textarea
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(baseStyles, stateStyles)}
        ref={ref}
      ></textarea>
    )
  }
)
