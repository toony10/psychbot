import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Intro } from '@/components/Intro'
import { Services } from '@/components/Services'
import { Doctors } from '@/components/Doctors'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'
import { Stories } from './story/Stories'

export default function Home() {
  return (
    <>
      <Head>
        <title>PsychyBot - we are here for you</title>
        <meta name="description" content="we are here for you." />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <Intro />
        <Services />
        <Doctors />
        <Stories />
        <Team />
        <Contact />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </main>
      <Footer />
    </>
  )
}
