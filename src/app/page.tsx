import Hero from '@/components/Hero'
import { FC } from 'react'

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  return <div>
    <Hero />
  </div>
}

export default page