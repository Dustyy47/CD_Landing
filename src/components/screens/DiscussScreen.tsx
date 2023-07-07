import { useState } from 'react'
import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
import { Input } from '../ui/atomaric/Input'
import { Label } from '../ui/atomaric/Label'
import { Textarea } from '../ui/atomaric/Textarea'

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

  const [v, setV] = useState('')
  return (
    <div
      id='discuss'
      className='bg-discuss w-full h-[44.25rem] bg-cover flex items-center justify-center'
    >
      <form
        className='w-[47.75rem] h-[35.4375rem] p-12 bg-white rounded-[1rem] '
        action=''
      >
        <h2 className='h2 mb-12'>{title}</h2>
        <div className='flex justify-between'>
          <div>
            <Label isRequired>{fullnameLabel}</Label>
            <Input
              value={v}
              setValue={setV}
              placeholder={fullnamePlaceholder}
              baseIconType='personal'
            />
          </div>
          <div>
            <Label isRequired>{emailLabel}</Label>
            <Input
              value={v}
              placeholder={emailPlaceholder}
              setValue={setV}
              baseIconType='email'
            />
          </div>
        </div>
        <div className='mb-12'>
          <Label>{textareaLabel}</Label>
          <Textarea
            placeholder={textAreaPlaceholder}
            value={v}
            setValue={setV}
          />
        </div>
        <div className='w-[9.1875rem]'>
          <Button>{buttonText}</Button>
        </div>
      </form>
    </div>
  )
}
