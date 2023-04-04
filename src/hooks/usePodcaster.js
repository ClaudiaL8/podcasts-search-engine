import { useState, useEffect } from 'react'
import { searchPodcasts } from '../services/podcasts'

export function usePodcaster() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getPodcasts()
  }, [])

  const getPodcasts = async () => {
    try {
      setLoading(true)
      setError(null)
      const newPodcasts = await searchPodcasts()
      setPodcasts(newPodcasts)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { podcasts, getPodcasts, loading }
}
