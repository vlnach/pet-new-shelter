import { getPayload } from 'payload'
import configPromise from '@payload-config'

import './id.css'

type Props = {
  params: {
    id: string
  }
}

export default async function PetDetailPage({ params }: Props) {
  const payload = await getPayload({ config: configPromise })

  const pet = await payload.findByID({
    collection: 'pets',
    id: params.id,
  })

  return (
    <div className="pet-detail">
      {pet.photo?.url && <img src={pet.photo.url} alt={pet.name} className="pet-detail-image" />}

      <h1 className="pet-detail-title">{pet.name}</h1>

      {pet.age != null && <p className="pet-detail-meta">{pet.age} years old</p>}

      {pet.description && <p className="pet-detail-description">{pet.description}</p>}

      <a href={`/adopt/${pet.id}`} className="pet-detail-adopt-btn">
        Adopt this pet
      </a>
    </div>
  )
}
