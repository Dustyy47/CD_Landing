import classNames from 'classnames'
import { MouseEvent } from 'react'

interface BurgerMenuProps {
  isActive: boolean
  toggle: (newValue: boolean) => void
}

export function BurgerMenu({ isActive, toggle }: BurgerMenuProps) {
  const lineStyle =
    'absolute bg-black block w-full rounded-sm h-[3px]  z-10 duration-300'
  const topLineStyle = isActive ? 'rotate-45 translate-y-[200%]' : 'top-0'
  const midLineStyle = isActive ? 'translate-y-[100%] opacity-0' : 'top-[50%]'
  const botLineStyle = isActive
    ? 'rotate-[-45deg] translate-y-[200%]'
    : 'top-full'

  function handleClick(e: MouseEvent) {
    toggle(!isActive)
    e.stopPropagation()
  }

  return (
    <div
      onClick={handleClick}
      className='z-40 md:hidden sm:visible w-6 h-[18px]  relative cursor-pointer'
    >
      <span className={classNames(lineStyle, topLineStyle)} />
      <span className={classNames(lineStyle, midLineStyle)} />
      <span className={classNames(lineStyle, botLineStyle)} />
    </div>
  )
}
