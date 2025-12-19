import AdoptForm from './adoptForm'

type FormType = {
  params: Promise<{
    id: string
  }>
}

export default async function AdoptPage({ params }: FormType) {
  const { id } = await params

  return (
    <main>
      <h1>Adopt this pet</h1>
      <AdoptForm petId={id} />
    </main>
  )
}
