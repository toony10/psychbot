import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout2 } from '@/components/AuthLayout2'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Register() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout2>
        <div className="flex flex-col">
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
        <form
          action="#"
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <p className=" col-span-full block text-sm text-gray-900">
            * We need you to give us some information about a person close to
            you, and this is optional for you, and it is usually used only in
            times of necessity.
          </p>
          <TextField
            className="col-span-full"
            label="name"
            id="name"
            name="name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Phone Number"
            id="phone"
            name="phone"
            type="text"
            autoComplete="phone"
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <SelectField
            className="col-span-full"
            label="his/her relationship with you"
            id="referral_source"
            name="referral_source"
          >
            <option>Select</option>
            <option>Father</option>
            <option>Mother</option>
            <option>Brother/sister</option>
            <option>Friend</option>
            <option>Other..</option>
          </SelectField>
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="blue"
              className="w-full"
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout2>
    </>
  )
}
