import { FieldError } from 'react-hook-form'
import { Language } from '../App'
import { validationLabels } from '../data/validationLabels'

export function isValidEmail(email: string) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

export function getFieldErrorText(
  error: FieldError | undefined,
  lang: Language,
  validErrorMsg?: string
) {
  switch (error?.type) {
    case 'validate':
      return validErrorMsg
    case 'required':
      return validationLabels[lang].empty
  }
  return ''
}
