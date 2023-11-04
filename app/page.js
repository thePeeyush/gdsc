import About from '@/components/About'
import Events from '@/components/Events'
import Head from '@/components/Head'
import Header from '@/components/Header'
import Links from '@/components/Links'
import Organizers from '@/components/Organizers'
import Teams from '@/components/Teams'
import Upcoming from '@/components/Upcoming'
import { Dosis} from 'next/font/google'

const dosis = Dosis({subsets: ['latin']})

export default function Home() {
  return (
    <main className=' flex flex-col md:flex-row w-screen h-screen overflow-hidden'>
    <Header/>
      <div className={`${dosis.className} w-full overflow-y-scroll`}>
        <Head/>
        <Links/>
        <Upcoming/>
        <Events/>
        <Teams/>
        <Organizers/>
        <About/>
      </div>
    </main>
  )
}
