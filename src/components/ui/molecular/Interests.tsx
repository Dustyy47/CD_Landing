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
        <div className='flex mb-11' key={interest.title}>
          <div className='border-[0.125rem] rounded-full p-[1.125rem] border-lavenderPurple mr-4'>
            <img
              className='w-[1.5rem] h-[1.5rem]'
              src={interest.iconSrc}
              alt={interest.title}
            />
          </div>
          <div>
            <p className='subtitle'>{interest.title}</p>
            <p className='bodyText'>{interest.subtitle}</p>
          </div>
        </div>
      ))}
    </ul>
  )
}
