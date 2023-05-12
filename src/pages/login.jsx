import Head from 'next/head'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import Image from 'next/image'
import { Logo } from '@/components/Logo'

export default function Login() {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      <AuthLayout>
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
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Don’t have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Sign up
              </Link>{' '}
              for a free trial.
            </p>
          </div>
        </div>
        <button
          className="flex items-center gap-x-2 rounded-md border border-gray-400 p-2"
          type="button"
          onClick={() => signIn('google')}
        >
          Login with Google
          <Image
            src={'/google.svg'}
            alt=""
            width={0}
            height={0}
            className="w-5"
          />
        </button>
      </AuthLayout>
    </>
  )
}
