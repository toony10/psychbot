import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16 text-center">
          <Link
            href="/"
            aria-label="Home"
            className="flex justify-center text-center"
          >
            <Logo className="h-10 w-auto" />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#doctors">Doctors</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row sm:justify-center">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Psychbot. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
