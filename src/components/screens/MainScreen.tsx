import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
import { Link } from '../ui/atomaric/Link'
import { Article } from '../ui/molecular/Article'

export function MainScreen() {
  const { title, subtitle, article, buttonText } = screensData.main

  return (
    <section id='main' className='h-[48.125rem] relative overflow-hidden '>
      <div className='container relative h-full z-50'>
        <div className='w-[27.8125rem] pt-40'>
          <h1 className='h1'>{title}</h1>
          <p className='bodyText text-greyDark mb-[5.75rem]'>{subtitle}</p>
          <div className='mb-[3.75rem]'>
            <Article>{article}</Article>
          </div>
          <div className='w-48'>
            <Link href='#discuss'>{buttonText}</Link>
          </div>
        </div>
      </div>
      <img
        className='z-0 block absolute bottom-[-6.9375rem] right-[-13.8rem]'
        src={'./images/photo.png'}
        alt=''
      />
    </section>
  )
}
