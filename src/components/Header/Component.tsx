import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-6 border-b border-gray-200 flex items-center justify-between px-6">
      <div className="text-xl font-bold">PetShelter</div>
      <nav className="flex gap-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pets">Pets</Link>
        <Link href="/support">Support</Link>
      </nav>
    </header>
  )
}
