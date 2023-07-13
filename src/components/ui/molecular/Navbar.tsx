import classNames from 'classnames'
import { useContext, useState } from 'react'
import { DEFAULT_LANGUAGE, LanguageContext } from '../../../App'
import { LanguageSwitch } from '../atomaric/LanguageSwitch'
import { BurgerMenu } from '../icons/BurgerMenu'

export interface NavbarLink {
  text: string
  href: string
}

interface NavbarProps {
  links: NavbarLink[]
}

export function Navbar({ links }: NavbarProps) {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false)
  const ctx = useContext(LanguageContext)
  const baseSideMenuStyles =
    'duration-300 flex flex-col bg-greyLight rounded-[1rem] p-[.5rem] absolute right-[-.5rem] top-[-.5rem] w-[14rem] z-0'
  const stateSideMenuStyles = isSideMenuOpen
    ? 'h-auto opacity-100'
    : 'h-0 opacity-0 pointer-events-none'

  return (
    <>
      <nav className='md:flex sm:hidden gap-6'>
        {links.map((link, index) => (
          <a
            key={index}
            className='duration-300 subtitle2  text-greyDark hover:text-lavenderPurple'
            href={link.href}
          >
            {link.text}
          </a>
        ))}
        <LanguageSwitch
          value={ctx?.lang ?? DEFAULT_LANGUAGE}
          onChange={(v) => ctx?.setLang?.(v)}
        />
      </nav>

      <div
        className='relative md:hidden sm:block'
        onClick={() => setSideMenuOpen(false)}
      >
        <div>
          <BurgerMenu isActive={isSideMenuOpen} toggle={setSideMenuOpen} />
        </div>

        <nav className={classNames(baseSideMenuStyles, stateSideMenuStyles)}>
          {links.map((link, index) => (
            <a
              key={index}
              className='duration-300 subtitle2 text-[1.5rem] text-black hover:text-lavenderPurple'
              href={link.href}
            >
              {link.text}
            </a>
          ))}
          <div className='[&>div]:text-lg'>
            <LanguageSwitch
              value={ctx?.lang ?? DEFAULT_LANGUAGE}
              onChange={(v) => ctx?.setLang?.(v)}
            />
          </div>
        </nav>
      </div>
    </>
  )
}
