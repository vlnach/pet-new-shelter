import { Pet } from '@/payload-types'

type PetsGrid = {
  id: number | string
  name: string
  age?: number
  description?: string
  photo?: {
    url?: string
  }
}

type PetsGridType = {
  pets: PetsGrid[]
}

export function PetsGrid({ pets }: PetsGridType) {
  if (!pets.length) {
    return <div className="pets-grid-empty">No pets found.</div>
  }

  return (
    <div className="pets-grid">
      {pets.map((pet) => (
        <article key={pet.id} className="pet-card">
          {pet.photo?.url && <img src={pet.photo.url} alt={pet.name} className="pet-card-image" />}

          <div className="pet-card-body">
            <h3 className="pet-card-title">{pet.name}</h3>
            {pet.age != null && <p className="pet-card-meta">{pet.age} years old</p>}
            {pet.description && <p className="pet-card-description">{pet.description}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}
