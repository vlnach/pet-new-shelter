'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Header.css'

const ACTIVE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pets', label: 'Pets' },
  { href: '/support', label: 'Support' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="site-logo">
          <span className="site-logo-mark">🐾</span>
          <span className="site-logo-text">Pet Shelter</span>
        </Link>

        <nav className="site-nav">
          {ACTIVE_LINKS.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={'site-nav-link' + (isActive ? ' site-nav-link-active' : '')}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Link href="/pets" className="site-cta">
          Adopt a pet
        </Link>
      </div>
    </header>
  )
}
