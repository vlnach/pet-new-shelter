import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Filters } from './filter'
import { PetsGrid } from './petsGrid'
// import { Search } from './search'
import './pets.css'

type PetsType = {
  searchParams?: Promise<{
    type?: string
    q?: string
  }>
}
type PetsWhereConditions = {
  type?: { equals: string }
  name?: { like: string }
}

export default async function PetsPage({ searchParams }: PetsType) {
  const payload = await getPayload({ config: configPromise })

  // 1. Get animal types for the filter
  const types = await payload.find({
    collection: 'animal-types',
    limit: 100,
  })

  // 2. Read the selected filter and search query from the URL (?type=dog&q=buddy)
  const selectedType = (await searchParams)?.type || null
  const searchQuery = (await searchParams)?.q || ''

  // 3. Build the query conditions

  const whereConditions: PetsWhereConditions = {}

  if (selectedType) {
    whereConditions.type = { equals: selectedType }
  }

  if (searchQuery) {
    whereConditions.name = { like: searchQuery }
  }

  // 4. Get the list of pets
  const pets = await payload.find({
    collection: 'pets',
    limit: 100,
    where: Object.keys(whereConditions).length > 0 ? whereConditions : {},
  })

  return (
    <main>
      <h1>Pets</h1>

      <div className="pets-toolbar">
        <Filters types={types.docs} selected={selectedType} searchQuery={searchQuery} />
        {/* <Search defaultValue={searchQuery} /> */}
      </div>

      {searchQuery && (
        <p className="pets-search-info">
          {pets.docs.length > 0
            ? `Found ${pets.docs.length} result${pets.docs.length === 1 ? '' : 's'} for "${searchQuery}"`
            : `No pets found for "${searchQuery}"`}
        </p>
      )}

      <PetsGrid pets={pets.docs} />
    </main>
  )
}
