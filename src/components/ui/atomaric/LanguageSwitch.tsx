import { Language } from '../../../App'

export function LanguageSwitch({
  value,
  onChange
}: {
  value: Language
  onChange: (v: Language) => any
}) {
  function handleClick() {
    onChange(value === 'ru' ? 'eng' : 'ru')
  }

  return (
    <div className='cursor-pointer' onClick={handleClick}>
      {value}
    </div>
  )
}
