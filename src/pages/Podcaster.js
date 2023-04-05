import { useState } from 'react'
import { usePodcaster } from '../hooks/usePodcaster'
import { PodcasterList } from '../components/PodcasterList'

export function Podcaster() {
  const { podcasts, loading } = usePodcaster()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  const filterPodcasts = () => {
    const lowerCaseSearch = search.toLowerCase()
    const newPodcasts = podcasts.filter((podcast) => {
      const titleToLowerCase = podcast.title.toLowerCase()
      const authorToLowerCase = podcast.author.toLowerCase()
      return (
        titleToLowerCase.includes(lowerCaseSearch) ||
        authorToLowerCase.includes(lowerCaseSearch)
      )
    })
    return newPodcasts
  }

  return (
    <div className="podcaster-list__container">
      <input
        className="podcaster-list__input"
        type="text"
        placeholder="Ingrese un elemento"
        onChange={handleSearch}
        value={search}
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <PodcasterList podcasts={filterPodcasts()} />
      )}
    </div>
  )
}

export default Podcaster
