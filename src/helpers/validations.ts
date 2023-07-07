import { FieldError } from "react-hook-form"

export function isValidEmail(email: string) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  }


export function getFieldErrorText(
    error: FieldError | undefined,
    validErrorMsg?: string
  ) {
    switch (error?.type) {
      case 'validate':
        return validErrorMsg
      case 'required':
        return 'Field is required'
    }
    return ''
  }