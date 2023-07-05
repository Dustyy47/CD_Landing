export interface NavbarLink {
  text: string
  href: string
}

interface NavbarProps {
  links: NavbarLink[]
}

export function Navbar({ links }: NavbarProps) {
  return (
    <nav className='flex gap-6'>
      {links.map((link, index) => (
        <a
          key={index}
          className='duration-300 subtitle2 text-greyDark hover:text-lavenderPurple'
          href={link.href}
        >
          {link.text}
        </a>
      ))}
    </nav>
  )
}
