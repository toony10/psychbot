import 'focus-visible'
import '@/styles/tailwind.css'
<<<<<<< HEAD
import '@/styles/globals.css'
import 'flowbite'
=======
import { SessionProvider } from 'next-auth/react'
>>>>>>> 8aac29fc3a4abf2e7070e370c6630c6f33e94ee5

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
