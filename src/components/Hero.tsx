"use client"
import React, { useEffect, useState } from 'react'
// import GithubIcon from "../../../public/github-icon.svg"
// import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
   

    return (

        <section className='py-16 px-4'>
            <div className='md:flex justify-center md:justify-between'>
                <div className='text-primary text_center'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl text-center md:text-start font-extrabold p-4 lg:pt-8'>
                        <span className='text-slate-900 dark:text-white'>Hello, I am {" "}</span> <br />
                        <TypeAnimation
                            sequence={[
                                'Umar Khan',
                                1000,
                                'Web-Developer',
                                1000,
                                'Ui/Ux Designer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        /></h1>
                    <p className='text-[#555] dark:text-[#ADB7BE] text-center md:text-start lg:pr-8 pl-4 pt-2 text-base sm:text-lg mb-6 lg:text-xl'>
                        Passionate web and app developer with a keen eye for UI/UX design, crafting digital experiences that seamlessly  blend functionality and aesthetics to elevate user engagement and satisfaction.
                    </p>
                    <div className='px-4 py-2 gap-x-1 flex justify-center md:block lg:gap-x-3'>
                        <Button className='px-8 py-6 mr-3 text-white' >
                            <Link href="">Hire Me</Link>
                        </Button>
                        <Button variant={'secondary'} className='px-8 py-6 text-black dark:text-white'>
                            Download CV
                        </Button>
                    </div>
                    <div className="pl-6 py-4 gap-x-1 flex justify-center md:justify-start lg:gap-x-3">
                        {/* <Link href="https://github.com/thisisumarali" target="_blank">
                            <Image
                                src={GithubIcon}
                                alt="Github Icon"
                                className="bg-gray-800 rounded-lg"
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/thisisumarali/" target="_blank">
                            <Image
                                src={LinkedinIcon}
                                alt="Linked Icon"
                                className="bg-gray-800 rounded-lg"
                            />
                        </Link> */}
                    </div>
                </div>
                <div className='px-4 py-8 lg:py-0 lg:block flex justify-center'>
                    <Image
                        src="/images/Me.jpeg"
                        alt='Image'
                        width={600}
                        height={600}
                        className='rounded-lg'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero 