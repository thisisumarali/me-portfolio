import Hero from '@/components/ui/Hero'
import { FC } from 'react'

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  return <div>
    <Hero />
  </div>
}

export default page