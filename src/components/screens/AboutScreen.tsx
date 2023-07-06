import { screensData } from '../../data/screens'
import { Button } from '../ui/atomaric/Button'
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
          <img src='./images/photo-circle.png' alt='' />
        </div>
        <div className='w-[50%]'>
          <div className='w-[26rem]'>
            <Article>{article}</Article>
            <div className='w-48 mt-[4rem]'>
              <Button>{buttonText}</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[5rem] flex '>
        <div className='w-[50%]'>
          <h3 className='h3 mb-11'>Interests</h3>
          <Interests interests={interests} />
        </div>
        <div className='w-[50%]'>
          <h3 className='h3 mb-11'>Education & Experience</h3>
          <Story items={story} />
        </div>
      </div>
    </div>
  )
}
