import classNames from 'classnames'

export type InputIconType = 'personal' | 'email' | 'error'

interface InputIconProps {
  iconType: InputIconType
}

export function InputIcon({ iconType }: InputIconProps) {
  const baseStyles = 'w-[0.66] fill-greyDark stroke-greyDark'
  switch (iconType) {
    case 'personal':
      return (
        <svg
          className={classNames(baseStyles)}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z'
            stroke='#27272A'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      )
    case 'email':
      return (
        <svg
          className={classNames(baseStyles)}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M19.2 5.2998H19.2001C19.6849 5.29972 20.1515 5.48502 20.5042 5.81777L20.8473 5.45408L20.5042 5.81777C20.7789 6.07694 20.9684 6.41027 21.052 6.77374L12 11.2992L2.94791 6.77374C3.03154 6.41027 3.22098 6.07694 3.49569 5.81777C3.8484 5.48502 4.31498 5.29972 4.79987 5.2998H4.79996H19.2Z' />
          <path d='M21.5999 9.7417L11.9999 14.5417L2.3999 9.7417V16.8001C2.3999 17.4366 2.65276 18.0471 3.10285 18.4972C3.55293 18.9472 4.16338 19.2001 4.7999 19.2001H19.1999C19.8364 19.2001 20.4469 18.9472 20.897 18.4972C21.347 18.0471 21.5999 17.4366 21.5999 16.8001V9.7417Z' />
        </svg>
      )
    case 'error':
      return (
        <svg
          className={classNames(baseStyles)}
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21.0999 11.9999C21.0999 14.4134 20.1412 16.728 18.4346 18.4346C16.728 20.1412 14.4134 21.0999 11.9999 21.0999C9.58643 21.0999 7.27181 20.1412 5.56523 18.4346C3.85865 16.728 2.8999 14.4134 2.8999 11.9999C2.8999 9.58643 3.85865 7.27181 5.56523 5.56523C7.27181 3.85865 9.58643 2.8999 11.9999 2.8999C14.4134 2.8999 16.728 3.85865 18.4346 5.56523C20.1412 7.27181 21.0999 9.58643 21.0999 11.9999ZM13.202 18.002C13.5208 17.6832 13.6999 17.2508 13.6999 16.7999C13.6999 16.349 13.5208 15.9166 13.202 15.5978C12.8832 15.279 12.4508 15.0999 11.9999 15.0999C11.549 15.0999 11.1166 15.279 10.7978 15.5978C10.479 15.9166 10.2999 16.349 10.2999 16.7999C10.2999 17.2508 10.479 17.6832 10.7978 18.002C11.1166 18.3208 11.549 18.4999 11.9999 18.4999C12.4508 18.4999 12.8832 18.3208 13.202 18.002ZM11.9999 5.4999C11.549 5.4999 11.1166 5.67901 10.7978 5.99782C10.479 6.31663 10.2999 6.74903 10.2999 7.1999V11.9999C10.2999 12.4508 10.479 12.8832 10.7978 13.202C11.1166 13.5208 11.549 13.6999 11.9999 13.6999C12.4508 13.6999 12.8832 13.5208 13.202 13.202C13.5208 12.8832 13.6999 12.4508 13.6999 11.9999V7.1999C13.6999 6.74903 13.5208 6.31663 13.202 5.99782C12.8832 5.67901 12.4508 5.4999 11.9999 5.4999Z'
            fill='#E02424'
            stroke='#E02424'
          />
        </svg>
      )
  }
  return null
}
