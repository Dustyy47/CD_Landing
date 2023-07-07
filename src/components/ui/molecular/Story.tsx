interface StoryItem {
  start: string
  end: string
  title: string
  subtitle: string
}
interface StoryProps {
  items: StoryItem[]
}

export function Story({ items }: StoryProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <div
          key={index}
          className='flex last:border-none border-b-[1px] md:pt-6 md:pb-8 sm:pt-3 sm:pb-3 border-greyLight'
        >
          <div className='w-[9.5rem] mr-4'>
            <p className='md:bodyText sm:mob_bodyText'>
              {item.start} - {item.end}
            </p>
          </div>

          <div>
            <p className='md:subtitle sm:mob_subtitle2'>{item.title}</p>
            <p className='md:bodyText sm:mob_bodyText'>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </ul>
  )
}
