import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'

import './id.css'
import Link from 'next/link'

type idType = {
  params: {
    id: string
  }
}

export default async function PetDetailPage({ params }: idType) {
  const payload = await getPayload({ config: configPromise })

  const pet = await payload.findByID({
    collection: 'pets',
    id: params.id,
  })

  return (
    <main>
      {typeof pet.photo === 'object' && pet.photo?.url && (
        <Image
          src={pet.photo.url}
          alt={pet.name}
          className="pet-detail-image"
          width={700}
          height={475}
        />
      )}

      <h1>{pet.name}</h1>

      {pet.age != null && <p className="pet-detail-meta">{pet.age} years old</p>}

      {pet.description && <p className="pet-detail-description">{pet.description}</p>}

      <Link href={`/adopt/${pet.id}`} className="pet-detail-adopt-btn ">
        Adopt this pet
      </Link>
    </main>
  )
}
