import { Pet } from '@/payload-types'
import Link from 'next/link'

type PetsGridType = {
  pets: Pet[]
}

export function PetsGrid({ pets }: PetsGridType) {
  if (!pets.length) {
    return <div className="pets-grid-empty">No pets found.</div>
  }

  return (
    <div className="pets-grid">
      {pets.map((pet) => (
        <article key={pet.id} className="pet-card">
          <Link href={`/pets/${pet.id}`}>
            {pet.photo?.url && (
              <img src={pet.photo.url} alt={pet.name} className="pet-card-image" />
            )}
          </Link>

          <div className="pet-card-body">
            <h3 className="pet-card-title">
              <Link href={`/pets/${pet.id}`}>{pet.name}</Link>
            </h3>
            {pet.age != null && <p className="pet-card__meta">{pet.age} years old</p>}
            {pet.description && <p className="pet-card__description">{pet.description}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}
