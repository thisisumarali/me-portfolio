import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"ghost"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w- h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='text-2xl font-bold text-primary'>Umar Khan</SheetTitle>
                    <SheetDescription>
                        <div className="flex justify-center py-4">
                            <ul className='items-center text-lg gap-x-6 text-slate-900 dark:text-slate-400'>
                                <li className=' py-2 text-slate-700 font-bold dark:text-[#ADB7BE] text-lg rounded dark:hover:text-white hover:text-black'>
                                    <Link href={"/"} >Home</Link>
                                </li>
                                <li className='py-2 text-slate-700 font-bold dark:text-[#ADB7BE] text-lg rounded dark:hover:text-white hover:text-black'>
                                    <Link href={"/about"} >About</Link>
                                </li>
                                <li className='py-2 text-slate-700 font-bold dark:text-[#ADB7BE] text-lg rounded dark:hover:text-white hover:text-black'>
                                    <Link href={"/projects"} >Projects</Link>
                                </li>
                                <li className='py-2 text-slate-700 font-bold dark:text-[#ADB7BE] text-lg rounded dark:hover:text-white hover:text-black' >
                                    <Link href={"/contact"} >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav