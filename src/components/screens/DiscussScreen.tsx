import { useContext } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { DEFAULT_LANGUAGE, LanguageContext } from '../../App'
import { screensData } from '../../data/screens'
import { validationLabels } from '../../data/validationLabels'
import { getFieldErrorText, isValidEmail } from '../../helpers/validations'
import { Button } from '../ui/atomaric/Button'
import { Input } from '../ui/atomaric/Input'
import { Label } from '../ui/atomaric/Label'
import { Textarea } from '../ui/atomaric/Textarea'

interface DiscussFields {
  fullname: string
  email: string
  description: string
}

export function DiscussScreen() {
  const ctx = useContext(LanguageContext)
  const {
    title,
    buttonText,
    emailLabel,
    fullnameLabel,
    textareaLabel,
    emailPlaceholder,
    textAreaPlaceholder,
    fullnamePlaceholder
  } = screensData[ctx?.lang ?? DEFAULT_LANGUAGE].discuss

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<DiscussFields>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<DiscussFields> = (data) => console.log(data)

  return (
    <div
      id='discuss'
      className='bg-discuss w-full h-[44.25rem] bg-cover flex items-center justify-center'
    >
      <form
        className='container md:w-[47.75rem] md:p-12 sm:px-3 sm:py-12 bg-white rounded-[1rem] '
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='md:h2 sm:mob_subtitle md:mb-12 sm:mb-9'>{title}</h2>
        <div className='flex justify-between md:flex-row sm:flex-col'>
          <div className='md:mb-4'>
            <Label isRequired>{fullnameLabel}</Label>
            <Input
              {...register('fullname', {
                required: true
              })}
              placeholder={fullnamePlaceholder}
              baseIconType='personal'
              errorMessage={getFieldErrorText(
                errors.fullname,
                ctx?.lang ?? DEFAULT_LANGUAGE
              )}
            />
          </div>
          <div className='md:mb-4 sm:mb-4'>
            <Label isRequired>{emailLabel}</Label>
            <Input
              {...register('email', {
                required: true,
                validate: isValidEmail
              })}
              placeholder={emailPlaceholder}
              baseIconType='email'
              errorMessage={getFieldErrorText(
                errors.email,
                ctx?.lang ?? DEFAULT_LANGUAGE,
                validationLabels[ctx?.lang ?? DEFAULT_LANGUAGE].emailType
              )}
            />
          </div>
        </div>
        <div className='mb-12'>
          <Label>{textareaLabel}</Label>
          <Controller
            render={({ field }) => (
              <Textarea {...field} placeholder={textAreaPlaceholder} />
            )}
            name='description'
            control={control}
          ></Controller>
        </div>
        <Button disabled={!isValid} type='submit'>
          {buttonText}
        </Button>
      </form>
    </div>
  )
}
