import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Doctors } from '@/components/Doctors'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Psychbot - we are here for you</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
