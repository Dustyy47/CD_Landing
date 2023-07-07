export interface InterestInfo {
  iconSrc: string
  title: string
  subtitle: string
}

interface InterestsProps {
  interests: InterestInfo[]
}

export function Interests({ interests }: InterestsProps) {
  return (
    <ul>
      {interests.map((interest) => (
        <div className='flex md:mb-11 sm:mb-7' key={interest.title}>
          <div className='md:w-[3.75rem] md:h-[3.75rem] sm:w-[2.75rem] sm:h-[2.75rem] border-[0.125rem] rounded-full flex items-center justify-center border-lavenderPurple md:mr-4 sm:mr-2'>
            <img
              className='md:w-6 md:h-6 sm:w-4 sm:h-4'
              src={interest.iconSrc}
              alt={interest.title}
            />
          </div>
          <div>
            <p className='md:subtitle sm:mob_subtitle2'>{interest.title}</p>
            <p className='md:bodyText sm:mob_bodyText'>{interest.subtitle}</p>
          </div>
        </div>
      ))}
    </ul>
  )
}
