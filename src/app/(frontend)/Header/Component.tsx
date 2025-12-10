import Link from 'next/link'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="site-logo">
          <span className="site-logo-mark">🐾</span>
          <span className="site-logo-text">Pet Shelter</span>
        </Link>

        <nav className="site-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pets">Pets</Link>
          <Link href="/search">Search</Link>
          <Link href="/support">Support</Link>
        </nav>

        <Link href="/pets" className="site-cta">
          Adopt a pet
        </Link>
      </div>
    </header>
  )
}
