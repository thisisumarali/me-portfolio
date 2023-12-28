import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
    return (
        <section className="grid md:grid-cols-2 my-6  px-12 py-12 gap-4">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div>
                <h5 className="text-3xl font-bold text-primary/90 my-2">Lets Connect</h5>
                <p className="dark:text-[#ADB7BE] text-gray-700 mb-4 max-w-md">
                    {" "}
                    I am currently looking for new oppurtunities, my inbox is always open,
                    Whether you have a question or just want to say hi, I will try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/thisisumarali" target="_blank">
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
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col gap-6">
                    <div className="mb-6">
                        <label htmlFor="email"
                            className="dark:text-white text-black mb-2 block text-base font-medium">Your Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-200 dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            placeholder="abc@gmail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject"
                            className="dark:text-white text-black mb-2 block text-base font-medium">Subject</label>
                        <input
                            type="email"
                            id="subject"
                            className="bg-gray-200 dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            required
                            placeholder="Just Saying Hi!!"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message"
                            className="dark:text-white text-black mb-2 block text-base font-medium">
                            Message..
                        </label>
                        <textarea name="message"
                            id=""
                            className="bg-gray-200 dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="lets talk...."
                        >
                        </textarea>
                    </div>
                    <Button type="submit" className="text-white text-medium py-2.5 font-bold rounded-lg w-full">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default page