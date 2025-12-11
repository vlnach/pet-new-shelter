import Link from 'next/link'

type FiltersType = {
  types: Array<{
    id: string | number
    name: string
  }>
  selected: string | null
  searchQuery?: string
}

export function Filters({ types, selected, searchQuery = '' }: FiltersType) {
  const buildHref = (typeId?: string | number) => {
    const params = new URLSearchParams()
    if (typeId) params.set('type', String(typeId))
    if (searchQuery) params.set('q', searchQuery)
    return `/pets${params.toString() ? `?${params.toString()}` : ''}`
  }

  return (
    <div className="pets-filters">
      <Link
        href={buildHref()}
        className={
          selected === null ? 'pets-filters-chip pets-filters-chip--active' : 'pets-filters-chip'
        }
      >
        All
      </Link>

      {types.map((t) => (
        <Link
          key={t.id}
          href={buildHref(t.id)}
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
