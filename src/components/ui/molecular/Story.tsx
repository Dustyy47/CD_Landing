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
      {items.map((item) => (
        <div className='flex last:border-none border-b-[1px] pt-6 pb-8 border-greyLight'>
          <div className='w-[9.5rem] mr-4'>
            <p className='bodyText'>
              {item.start} - {item.end}
            </p>
          </div>

          <div>
            <p className='subtitle'>{item.title}</p>
            <p className='bodyText'>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </ul>
  )
}
