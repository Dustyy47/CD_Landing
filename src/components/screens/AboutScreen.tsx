import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
import { Link } from '../ui/atomaric/Link'
import { Article } from '../ui/molecular/Article'
import { Interests } from '../ui/molecular/Interests'
import { Story } from '../ui/molecular/Story'

export function AboutScreen() {
  const { title, article, buttonText, interests, story } = screensData.aboutMe

  return (
    <div className='container'>
      <h2 className='h2 mt-[6.25rem] mb-[5rem]'>{title}</h2>

      <div className='flex items-center'>
        <div className='w-[50%]'>
          <img
            className='lg:w-auto md:w-[18rem] '
            src='./images/photo-circle.png'
            alt=''
          />
        </div>
        <div className='w-[50%]'>
          <div className='lg:w-[26rem] md:w-auto'>
            <Article>{article}</Article>
            <div className='w-48 mt-[4rem]'>
              <Link href='#discuss'>{buttonText}</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[5rem] lg:mb-[7rem] flex lg:flex-row md:flex-col'>
        <div className='w-[50%] lg:mb-0 md:mb-20'>
          <h3 className='h3 mb-11'>Interests</h3>
          <Interests interests={interests} />
        </div>
        <div className='lg:mb-0 md:mb-[8.125rem] lg:w-[50%] md:w-full'>
          <h3 className='h3 mb-11'>Education & Experience</h3>
          <Story items={story} />
        </div>
      </div>
    </div>
  )
}
