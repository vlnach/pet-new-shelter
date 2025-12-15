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
    depth: 1,
  })

  const photo =
    pet.photo && typeof pet.photo === 'object' && 'url' in pet.photo
      ? (pet.photo as { url: string })
      : null

  return (
    <main className="pet-detail">
      {photo && (
        <Image
          src={photo.url}
          alt={pet.name || 'Pet photo'}
          className="pet-detail-image"
          width={600}
          height={400}
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
