import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { screensData } from '../../data/screens'
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
  const {
    title,
    buttonText,
    emailLabel,
    fullnameLabel,
    textareaLabel,
    emailPlaceholder,
    textAreaPlaceholder,
    fullnamePlaceholder
  } = screensData.discuss

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
              errorMessage={getFieldErrorText(errors.fullname)}
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
                'Incorrect email type'
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
        <div className='w-[9.1875rem]'>
          <Button disabled={!isValid} type='submit'>
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  )
}
