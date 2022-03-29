import { useQuery } from 'react-query'

export const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch('https://api.genshin.dev/characters')
    return response.json()
  }

  const { data, status } = useQuery('characters', fetchCharacters)

  if (status === 'loading') {
    return <div>Loading....</div>
  }

  if (status === 'error') {
    return <div>Error</div>
  }

  return (
    <div>
      {data.results.map(character => (
        <div>{character.name}</div>
      ))}
    </div>
  )
}
