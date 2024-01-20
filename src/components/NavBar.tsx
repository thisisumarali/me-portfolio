import Link from 'next/link'
import { FC } from 'react'
import { ModeToggle } from './ModeToggle'
import MobileNav from './mobileNav'

interface NavBarProps { }

const NavBar: FC<NavBarProps> = ({ }) => <header className='flex w-full border-b-2 items-center justify-between p-4'>
    <div className="text-xl text-primary font-bold lg:text-3xl">
        <h1>Umar Khan</h1>
    </div>
    <div className="">
        <ul className='md:flex items-center lg:text-xl hidden text-lg gap-x-6 text-slate-900 dark:text-slate-400'>
            <li className='block py-2 pl-3 pr-4 text-slate-700 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-black'>
                <Link href={"/"} >Home</Link>
            </li>
            <li className='block py-2 pl-3 pr-4 text-slate-700 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-black'>
                <Link href={"/about"} >About</Link>
            </li>
            <li className='block py-2 pl-3 pr-4 text-slate-700 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-black'>
                <Link href={"/projects"} >Projects</Link>
            </li>
            <li className='block py-2 pl-3 pr-4 text-slate-700 dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 dark:hover:text-white hover:text-black' >
                <Link href={"/contact"} >Contact</Link>
            </li>
        </ul>
    </div>
    <div className="flex gap-x-3 ">
        <div className='block md:hidden'>
            <MobileNav />
        </div>
        <div>
            <ModeToggle />
        </div>
    </div>
</header>

export default NavBar