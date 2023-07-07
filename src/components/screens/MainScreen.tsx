import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
import { Link } from '../ui/atomaric/Link'
import { Article } from '../ui/molecular/Article'

export function MainScreen() {
  const { title, subtitle, article, buttonText } = screensData.main

  return (
    <section
      id='main'
      className='lg:h-[48.125rem] md:h-[28.5rem] sm:h-[31.5rem] lg:w-[1280px] md:w-[792px] sm:w-[320px] mx-auto bg-no-repeat md:bg-right lg:bg-nickMainLg md:bg-nickMainMd sm:bg-nickMainSm sm:bg-bottom'
    >
      <div className='container h-full z-50'>
        <div className='lg:w-[27.8125rem] md:w-[27.8125rem] lg:pt-40 md:pt-11 sm:pt-[1.6875rem]'>
          <h1 className='lg:h1 md:h1 sm:mob_h1'>{title}</h1>
          <p className='lg:bodyText md:bodyText sm:mob_bodyText text-greyDark lg:mb-[5.75rem] md:mb-9 sm:mb-[2.375rem]'>
            {subtitle}
          </p>
          <div className='lg:mb-[3.75rem] md:mb-11 sm:mb-[1.6875rem]'>
            <Article>{article}</Article>
          </div>
          <div className='md:w-48 sm:w-[8.75rem]'>
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
