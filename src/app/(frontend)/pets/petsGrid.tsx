import { Pet } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

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
            {typeof pet.photo !== 'number' && pet.photo?.url && (
              <Image
                src={pet.photo.url}
                alt={pet.name}
                className="pet-card-image"
                width={400}
                height={300}
              />
            )}
          </Link>

          <div className="pet-card-body">
            <h3 className="pet-card-title">
              <Link href={`/pets/${pet.id}`}>{pet.name}</Link>
            </h3>
            {pet.age != null && <p className="pet-card-meta">{pet.age} years old</p>}
            {pet.description && <p className="pet-card-description">{pet.description}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}
