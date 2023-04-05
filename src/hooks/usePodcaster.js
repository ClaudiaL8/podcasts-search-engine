import { useState, useEffect, useCallback } from 'react'
import { searchPodcasts } from '../services/podcasts'

export function usePodcaster() {
  const [podcasts, setPodcasts] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = useCallback(() => {
    const storedData = localStorage.getItem('myData')
    if (storedData) {
      const { date, data } = JSON.parse(storedData)
      const today = new Date().toISOString().slice(0, 10)
      if (today !== date) {
        getPodcasts()
      } else {
        setPodcasts(data)
      }
    } else {
      getPodcasts()
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const getPodcasts = async () => {
    try {
      setLoading(true)
      const newPodcasts = await searchPodcasts()
      setPodcasts(newPodcasts)

      const data = newPodcasts
      const today = new Date().toISOString().slice(0, 10)
      localStorage.setItem('myData', JSON.stringify({ date: today, data }))
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { podcasts, getPodcasts, loading }
}
