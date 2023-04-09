import { useState } from 'react'

export function useSelectPodcast() {
  const [podcastDetails, setPodcastDetails] = useState('')
  const [loading, setLoading] = useState(false)

  const getPodcastDetails = async (data, selectedPodcast) => {
    setPodcastDetails(selectedPodcast)
    try {
      setLoading(true)
      const today = new Date().toISOString().slice(0, 10)
      const newArray = [...data, selectedPodcast]
      localStorage.setItem(
        'podcastsDetails',
        JSON.stringify({ date: today, data: newArray })
      )
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const findSelectPodcast = (selectedPodcast) => {
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
  }

  const findPodcast = (id) => {
    const storedPodcastsData = localStorage.getItem('podcastsList')
    const { data } = JSON.parse(storedPodcastsData)
    const findPodcast = data?.find((podcast) => podcast?.id === id)
    findSelectPodcast(findPodcast)
  }

  return {
    podcastDetails,
    findPodcast
  }
}
