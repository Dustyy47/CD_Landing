import { Language } from '../App'
import { NavbarLink } from '../components/ui/molecular/Navbar'

export const navlinks: Record<Language, NavbarLink[]> = {
  eng: [
    {
      text: 'Main',
      href: '#main'
    },
    {
      text: 'About',
      href: '#about'
    },
    {
      text: 'Get in touch',
      href: '#discuss'
    }
  ],
  ru: [
    {
      text: 'Главная',
      href: '#main'
    },
    {
      text: 'Обо мне',
      href: '#about'
    },
    {
      text: 'Связаться',
      href: '#discuss'
    }
  ]
}
