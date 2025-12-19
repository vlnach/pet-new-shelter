import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Image from 'next/image'

import './id.css'
import Link from 'next/link'

type idType = {
  params: Promise<{
    id: string
  }>
}

function getPhotoUrls(photo: any): string[] {
  if (!photo) return []

  if (Array.isArray(photo)) {
    return photo
      .filter((p: any) => p && typeof p === 'object' && 'url' in p)
      .map((p: any) => p.url as string)
  }

  if (photo && typeof photo === 'object' && 'url' in photo) {
    return [photo.url as string]
  }

  return []
}

export default async function PetDetailPage({ params }: idType) {
  const payload = await getPayload({ config: configPromise })

  const pet = await payload.findByID({
    collection: 'pets',
    id: (await params).id,
    depth: 1,
  })

  const photoUrls = getPhotoUrls(pet.photo)
  const [mainPhoto, ...extraPhotos] = photoUrls

  return (
    <main className="pet-detail">
      {/* Left column: main photo + thumbnails */}
      <div>
        {mainPhoto && (
          <Image
            src={mainPhoto}
            alt={pet.name || 'Pet photo'}
            className="pet-detail-image"
            width={600}
            height={400}
          />
        )}

        {extraPhotos.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '12px',
              marginTop: '12px',
            }}
          >
            {extraPhotos.slice(0, 3).map((url) => (
              <Image
                key={url}
                src={url}
                alt={pet.name || 'Pet photo'}
                className="pet-detail-image"
                width={180}
                height={140}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right column: text and button  as before */}
      <h1>{pet.name}</h1>

      <section className="meta">
        {pet.age != null && <div>🎂 Age - {pet.age} years</div>}
        {pet.weight != null && <div>⚖️ Weight - {pet.weight} kg</div>}
        {pet.size && <div>📏 Size - {pet.size}</div>}
        {pet.gender && <div>🚻 Gender - {pet.gender}</div>}
        {pet.location && <div>📍 Location - {pet.location}</div>}
      </section>

      {pet.description && <p className="pet-detail-description">{pet.description}</p>}

      <Link href={`/adopt/${pet.id}`} className="pet-detail-adopt-btn">
        Adopt this pet
      </Link>
    </main>
  )
}
