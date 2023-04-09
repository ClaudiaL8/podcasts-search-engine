import { useState, useCallback, useEffect } from 'react'
import { searchPodcastDetails } from '../services/podcastDetails'

export function usePodcastDetails() {
  const [podcastDetails, setPodcastDetails] = useState('')
  const [loading, setLoading] = useState(false)

  const getPodcastDetails = async (data, selectedPodcast) => {
    try {
      setLoading(true)
      const today = new Date().toISOString().slice(0, 10)
      const newPodcastSelected = await searchPodcastDetails(selectedPodcast)
      const newPodcast = {
        ...selectedPodcast,
        ...newPodcastSelected
      }
      const newArray = [...data, newPodcast]
      localStorage.setItem(
        'podcastsDetails',
        JSON.stringify({ date: today, data: newArray })
      )
      setPodcastDetails(newPodcast)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const findSelectPodcast = useCallback((selectedPodcast) => {
    const storedData = localStorage.getItem('podcastsDetails')
    if (storedData) {
      const { date, data } = JSON.parse(storedData)
      const today = new Date().toISOString().slice(0, 10)
      if (today === date) {
        const findPodcast = data?.find(
          (podcast) => podcast?.id === selectedPodcast?.id
        )
        if (findPodcast) {
          setPodcastDetails(findPodcast)
        } else {
          getPodcastDetails(data, selectedPodcast)
        }
        return
      }
    }
    getPodcastDetails([], selectedPodcast)
  }, [])

  const findPodcast = useCallback(
    (id) => {
      const storedPodcastsData = localStorage.getItem('podcastsList')
      const { data } = JSON.parse(storedPodcastsData)
      const findPodcast = data?.find((podcast) => podcast?.id === id)
      findSelectPodcast(findPodcast)
    },
    [findSelectPodcast]
  )

  useEffect(() => {
    const currentUrl = window.location.href
    const currentUrlSegments = currentUrl.split('/')
    const selectedPodcastId = currentUrlSegments.pop()
    findPodcast(selectedPodcastId)
  }, [findPodcast])

  return {
    podcastDetails,
    findPodcast,
    loading
  }
}
