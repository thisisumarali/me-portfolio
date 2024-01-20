import React from 'react'
// import GithubIcon from "../../../public/github-icon.svg"
// import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Image from "next/image";
import Link from "next/link"
const Footer = () => {
    return (
        <footer className='pt-8'>
            <div className='footer border-t-2 border-l-transparent border-r-transparent dark:text-white text-gray-900'>
                <div className='container p-6 flex justify-between px-2  items-center'>
                    <span className='text-primary text-2xl'>Umar Khan</span>
                    <p className='text-slate-600 md:block hidden'>All right reserved </p>
                    <div className="gap-x-2 flex justify-center md:justify-start lg:gap-x-3">
                        {/* <Link href="https://github.com/thisisumarali" target="_blank">
                            <Image
                                src={GithubIcon}
                                alt="Github Icon"
                                width={40}
                                height={40}
                                className="bg-gray-800 rounded-lg"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/thisisumarali/" target="_blank">
                            <Image
                                src={LinkedinIcon}
                                alt="Linked Icon"
                                width={40}
                                height={40} 
                                className="bg-gray-800 rounded-lg"
                            />
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer