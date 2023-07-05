import { ReactElement } from 'react'

interface ArticleProps {
  children: ReactElement
}

export function Article({ children }: ArticleProps) {
  return (
    <div>
      <span className='border-b-[0.1875rem] w-[1.5625rem] block mb-[1.5rem] border-lavenderPurple' />
      <article className='text-greyDark bodyText'>{children}</article>
    </div>
  )
}
