import Link from 'next/link'

export function Filters({ types, selected }: any) {
  return (
    <div className="home">
      <Link href="/pets" className={selected ? 'text-gray-500' : 'font-bold underline'}>
        All
      </Link>

      {types.map((t: any) => (
        <Link
          key={t.id}
          href={`/pets?type=${t.id}`}
          className={selected === String(t.id) ? 'font-bold underline' : 'text-gray-500'}
        >
          {t.name}
        </Link>
      ))}
    </div>
  )
}
