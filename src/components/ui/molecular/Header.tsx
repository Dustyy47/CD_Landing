import { navlinks } from '../../../data/links'
import { Navbar } from './Navbar'
import { Logo } from '../icons/Logo'

export function Header() {
  return (
    <div className='h-16 w-full border-b-[0.08125rem] border-greyLight'>
      <div className='container h-full flex justify-between items-center'>
        <Logo />
        <Navbar links={navlinks} />
      </div>
    </div>
  )
}
