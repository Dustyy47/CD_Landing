import { screensData } from '../../data/screens'
import { Link } from '../ui/atomaric/Link'
import { Article } from '../ui/molecular/Article'
import { Interests } from '../ui/molecular/Interests'
import { Story } from '../ui/molecular/Story'

export function AboutScreen() {
  const { title, article, buttonText, interests, story } = screensData.aboutMe

  return (
    <div id='about' className='container'>
      <h2 className='md:h2 sm:mob_subtitle md:mt-[6.25rem] sm:mt-[3rem] md:mb-[5rem] sm:mb-9'>
        {title}
      </h2>
      <div className='flex items-center md:flex-row sm:flex-col'>
        <div className='md:w-[50%] sm:w-full'>
          <img
            className='lg:w-auto md:w-[18rem] sm:mb-9 '
            src='./images/photo-circle.png'
            alt=''
          />
        </div>
        <div className='md:w-[50%] sm:w-full'>
          <div className='lg:w-[26rem] md:w-auto'>
            <Article>{article}</Article>
            <div className='w-48 mt-[4rem] md:block sm:hidden'>
              <Link href='#discuss'>{buttonText}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='md:mt-[5rem] sm:mt-12 lg:mb-[7rem]  flex lg:flex-row sm:flex-col'>
        <div className='lg:w-[50%] lg:mb-0 md:mb-20 sm:mb-[3rem]'>
          <h3 className='md:h3 md:mb-11 sm:mb-7 sm:mob_subtitle'>Interests</h3>
          <Interests interests={interests} />
        </div>
        <div className='lg:mb-0 md:mb-[8.125rem] lg:w-[50%] md:w-full'>
          <h3 className='md:h3 sm:mob_subtitle md:mb-11 sm:mb-7'>
            Education & Experience
          </h3>
          <Story items={story} />
        </div>
      </div>
      <div className='md:w-48 sm:w-[8.75rem] md:hidden sm:visible mt-12 mb-[6.25rem]'>
        <Link href='#discuss'>{buttonText}</Link>
      </div>
    </div>
  )
}
