import { useContext } from 'react'
import { DEFAULT_LANGUAGE, LanguageContext } from '../../../App'
import { screensData } from '../../../data/screens'

export function Footer() {
  const ctx = useContext(LanguageContext)
  const { copyright } = screensData[ctx?.lang ?? DEFAULT_LANGUAGE].footer

  return (
    <div className='w-full md:h-20 sm:h-16 flex items-center'>
      <div className='container'>
        <p className='mb:bodyText sm:mob_bodyText text-greyDark'>{copyright}</p>
      </div>
    </div>
  )
}
