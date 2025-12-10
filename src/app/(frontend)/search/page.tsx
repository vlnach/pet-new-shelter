import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

import './search.css'

type SearchType = {
  request?: string
}

type SearchTypePromise = {
  searchParams: Promise<SearchType>
}

export default async function SearchPage({ searchParams }: SearchTypePromise) {
  const { request = '' } = await searchParams

  const payload = await getPayload({ config: configPromise })

  const pets = request
    ? await payload.find({
        collection: 'pets',
        limit: 10,
        where: {
          name: { like: request },
        },
      })
    : { docs: [] }

  return (
    <div className="search-page">
      <h1 className="search-title">Search pets</h1>

      <form className="search-form" action="/search" method="get">
        <input
          className="search-input"
          type="text"
          name="request"
          placeholder="Type pet name..."
          defaultValue={request}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {request && <p className="search-result-info">Results for “{request}”</p>}

      <ul className="search-results">
        {pets.docs.map((pet) => (
          <li key={pet.id} className="search-results-item">
            <Link href={`/pets/${pet.id}`} className="search-results-link">
              {pet.name}
            </Link>
          </li>
        ))}

        {request && pets.docs.length === 0 && <li className="search-no-results">No pets found.</li>}
      </ul>
    </div>
  )
}
