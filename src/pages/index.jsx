import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Doctors } from '@/components/Doctors'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>PsychyBot - we are here for you</title>
        <meta name="description" content="we are here for you." />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
