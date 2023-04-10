import { useState, useEffect, useCallback } from 'react'
import { searchPodcasts } from '../services/podcasts'

export function usePodcaster() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(false)

  const getPodcasts = useCallback(async () => {
    try {
      setLoading(true)
      const newPodcasts = await searchPodcasts()
      setPodcasts(newPodcasts)
      const data = newPodcasts
      localStorage.setItem('podcastsList', JSON.stringify(data))
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  const getData = useCallback(() => {
    const storedData = localStorage.getItem('podcastsList')
    if (storedData) {
      const podcastsList = JSON.parse(storedData)
      setPodcasts(podcastsList)
      return
    }
    getPodcasts()
  }, [getPodcasts])

  const checkLocalStorage = useCallback(() => {
    const storedDate = localStorage.getItem('storedDate')
    const today = new Date().toISOString().slice(0, 10)
    if (storedDate) {
      if (today !== storedDate) {
        localStorage.clear()
        localStorage.setItem('storedDate', today)
        getData()
        return
      }
    }
    localStorage.setItem('storedDate', today)
    getData()
  }, [getData])

  useEffect(() => {
    checkLocalStorage()
  }, [checkLocalStorage])

  return { podcasts, loading }
}
