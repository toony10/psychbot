import Head from 'next/head'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { TextField } from '@/components/Fields'

import { AuthLayout2 } from '@/components/AuthLayout2'
import { Logo } from '@/components/Logo'
import Image from 'next/image'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - PsychyBot</title>
      </Head>
      <AuthLayout2>
        <div className="mb-4 flex flex-col">
          <Link
            href="/"
            aria-label="Home"
            className="flex justify-center text-center"
          >
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <TextField
          label="Emergency contact number"
          id="number"
          name="number"
          type="tel"
          required
        />
        <button
          className="mt-4 flex items-center gap-x-2 rounded-md border border-gray-400 p-2"
          type="button"
          onClick={() =>
            signIn('google', {
              callbackUrl: '/',
            })
          }
        >
          Sign up with Google
          <Image
            src={'/google.svg'}
            alt=""
            width={0}
            height={0}
            className="w-5"
          />
        </button>
      </AuthLayout2>
    </>
  )
}
