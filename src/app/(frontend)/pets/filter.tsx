import Link from 'next/link'

type FiltersType = {
  types: Array<{
    id: string | number
    name: string
  }>
  selected: string | null
}

export function Filters({ types, selected }: FiltersType) {
  return (
    <div className="pets-filters">
      <Link
        href="/pets"
        className={
          selected === null ? 'pets-filters-chip pets-filters-chip--active' : 'pets-filters-chip'
        }
      >
        All
      </Link>

      {types.map((t) => (
        <Link
          key={t.id}
          href={`/pets?type=${t.id}`}
          className={
            selected === String(t.id)
              ? 'pets-filters-chip pets-filters-chip--active'
              : 'pets-filters-chip'
          }
        >
          {t.name}
        </Link>
      ))}
    </div>
  )
}
