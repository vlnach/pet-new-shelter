import AdoptForm from './AdoptForm'

type FormType = {
  params: {
    id: string
  }
}

export default function AdoptPage({ params }: FormType) {
  return (
    <main>
      <h1>Adopt this pet</h1>
      <AdoptForm petId={params.id} />
    </main>
  )
}
