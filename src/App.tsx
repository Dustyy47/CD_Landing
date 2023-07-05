import React, { useState } from 'react'
import { Button } from './components/ui/atomaric/Button'
import { Input } from './components/ui/atomaric/Input'
import { Label } from './components/ui/atomaric/Label'
import { Textarea } from './components/ui/atomaric/Textarea'

function App() {
  const [v, setV] = useState('')
  return (
    <>
      <div className='w-[19.5rem]'>
        <Label>Your fullname</Label>
        <Input
          value={v}
          setValue={setV}
          isValid={false}
          baseIconType='personal'
          placeholder='test@email.com'
          errorMessage='Please fill this mandatory field'
        />
      </div>
      <div className='w-[188px]'>
        <Button>Get in touch</Button>
      </div>
      <div className='w-[667px]'>
        <Textarea
          value={v}
          setValue={setV}
          placeholder='Add here a general description of your idea and target aim'
        ></Textarea>
      </div>
    </>
  )
}

export default App
