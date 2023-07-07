import { useState } from 'react'
import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
import { Input } from '../ui/atomaric/Input'
import { Label } from '../ui/atomaric/Label'
import { Textarea } from '../ui/atomaric/Textarea'
import {
  Controller,
  Field,
  FieldError,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { getFieldErrorText, isValidEmail } from '../../helpers/validations'

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
    watch,
    control,
    formState: { errors, isValid }
  } = useForm<DiscussFields>({ mode: 'onBlur' })

  const onSubmit: SubmitHandler<DiscussFields> = (data) => console.log(data)

  console.log(errors, isValid)

  return (
    <div
      id='discuss'
      className='bg-discuss w-full h-[44.25rem] bg-cover flex items-center justify-center'
    >
      <form
        className='w-[47.75rem] h-[35.4375rem] p-12 bg-white rounded-[1rem] '
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className='h2 mb-12'>{title}</h2>
        <div className='flex justify-between'>
          <div>
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
          <div>
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
            render={() => <Textarea placeholder={textAreaPlaceholder} />}
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
