type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'subtitle2'
  | 'body'
  | 'body2'

function getTypography(text: string, type: TypographyType) {
  switch (type) {
    case 'h1':
      return (
        <h1 className='text-black font-main font-bold text-[3.75rem]'>
          {text}
        </h1>
      )
    case 'h2':
      return (
        <h2 className='text-black font-main font-bold text-[2rem]'>{text}</h2>
      )
    case 'h3':
      return (
        <h3 className='text-black font-main font-bold text-[1.5rem]'>{text}</h3>
      )
    case 'subtitle':
      return (
        <p className='text-black font-main font-semibold text-[1.25rem]'>
          {text}
        </p>
      )
    case 'subtitle2':
      return (
        <p className='text-black font-main font-semibold text-[1rem]'>{text}</p>
      )
    case 'body':
      return (
        <p className='text-black font-main font-regular text-[1.25rem]'>
          {text}
        </p>
      )
    case 'body2':
      return (
        <p className='text-black font-main font-regular text-[1rem]'>{text}</p>
      )
  }
}

interface HeadingProps {
  type: TypographyType
  children: string
}

export function Typography({ type, children }: HeadingProps) {
  return getTypography(children, type)
}
