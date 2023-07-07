import { navlinks } from '../../../data/links'
import { Logo } from '../icons/Logo'
import { Navbar } from './Navbar'

export function Header() {
  return (
    <div className='sticky top-0 bg-white h-16 w-full border-b-[0.08125rem] border-greyLight'>
      <div className='container h-full flex justify-between items-center relative'>
        <Logo />
        <Navbar links={navlinks} />
      </div>
    </div>
  )
}
