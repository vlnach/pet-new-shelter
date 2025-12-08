import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Filters } from './filter'
import { PetsGrid } from './petsGrid'
import './pets.css'

type PetsType = {
  searchParams?: {
    type?: string
  }
}

export default async function PetsPage({ searchParams }: PetsType) {
  const payload = await getPayload({ config: configPromise })

  // 1. Get animal types for the filter
  const types = await payload.find({
    collection: 'animal-types',
    limit: 100,
  })

  // 2. Read the selected filter from the URL (?type=dog)
  const selectedType = searchParams?.type || null

  // 3. Get the list of pets
  const pets = await payload.find({
    collection: 'pets',
    limit: 100,
    where: selectedType ? { type: { equals: selectedType } } : {},
  })

  return (
    <div className="pets-page">
      <h1 className="pets-page-title">Pets</h1>
      {/* Filter */}
      <Filters types={types.docs} selected={selectedType} />

      {/* Card grid */}
      <PetsGrid pets={pets.docs} />
    </div>
  )
}
