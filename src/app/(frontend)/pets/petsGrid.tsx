export function PetsGrid({ pets }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pets.map((pet: any) => (
        <div key={pet.id} className="rounded-xl border border-gray-800 p-4 bg-black/20">
          <img src={pet.photo?.url} alt={pet.name} className="links" />

          <h3 className="text-lg font-semibold">{pet.name}</h3>
          <p className="text-sm text-gray-400">{pet.age} years old</p>

          <p className="text-sm mt-2">{pet.description}</p>
        </div>
      ))}
    </div>
  )
}
