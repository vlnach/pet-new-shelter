import AdoptForm from './AdoptForm'

type Props = {
  params: {
    id: string
  }
}

export default function AdoptPage({ params }: Props) {
  return (
    <div className="adopt-page">
      <h1 className="adopt-title">Adopt this pet</h1>
      <AdoptForm petId={params.id} />
    </div>
  )
}
