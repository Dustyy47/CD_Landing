import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
import { Link } from '../ui/atomaric/Link'
import { Article } from '../ui/molecular/Article'

export function MainScreen() {
  const { title, subtitle, article, buttonText } = screensData.main

  return (
    <section
      id='main'
      className='lg:h-[48.125rem] md:h-[28.5rem] lg:w-[1280px] md:w-[792px] mx-auto lg:bg-nickMainLg bg-no-repeat bg-right md:bg-nickMainMd'
    >
      <div className='container h-full z-50'>
        <div className='lg:w-[27.8125rem] md:w-[27.8125rem] lg:pt-40 md:pt-11'>
          <h1 className='h1'>{title}</h1>
          <p className='bodyText text-greyDark lg:mb-[5.75rem] md:mb-9'>
            {subtitle}
          </p>
          <div className='lg:mb-[3.75rem] md:mb-11'>
            <Article>{article}</Article>
          </div>
          <div className='w-48'>
            <Link href='#discuss'>{buttonText}</Link>
          </div>
        </div>

        {/* <div>
          <img
            className='lg:hidden md:block z-0 '
            src='./images/photo-md.png'
            alt='main'
          />
          <img
            className='z-0  lg:block md:hidden'
            src='./images/photo.png'
            alt='main'
          />
        </div> */}
      </div>
    </section>
  )
}
