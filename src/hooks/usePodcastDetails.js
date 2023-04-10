import { useState, useCallback, useEffect } from 'react'
import { searchPodcastDetails } from '../services/podcastDetails'
import {
  storedDateKey,
  storedPodcastsDetails,
  storedPodcastList
} from '../utils/constants'

export function usePodcastDetails() {
  const [podcastDetails, setPodcastDetails] = useState('')
  const [loading, setLoading] = useState(false)

  const getPodcastDetails = async (data, selectedPodcast) => {
    try {
      setLoading(true)
      const newPodcastSelected = await searchPodcastDetails(selectedPodcast)
      const newPodcast = {
        ...selectedPodcast,
        ...newPodcastSelected
      }
      const newArray = [...data, newPodcast]
      localStorage.setItem(storedPodcastsDetails, JSON.stringify(newArray))
      setPodcastDetails(newPodcast)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const findSelectPodcast = useCallback((selectedPodcast) => {
    const storedData = localStorage.getItem(storedPodcastsDetails)
    if (storedData) {
      const podcastsDetails = JSON.parse(storedData)
      const findPodcast = podcastsDetails?.find(
        (podcast) => podcast?.id === selectedPodcast?.id
      )
      if (findPodcast) {
        setPodcastDetails(findPodcast)
      } else {
        getPodcastDetails(podcastsDetails, selectedPodcast)
      }
      return
    }
    getPodcastDetails([], selectedPodcast)
  }, [])

  const findPodcast = useCallback(
    (id) => {
      const storedPodcastsData = localStorage.getItem(storedPodcastList)
      const podcastsList = JSON.parse(storedPodcastsData)
      const findPodcast = podcastsList?.find((podcast) => podcast?.id === id)
      findSelectPodcast(findPodcast)
    },
    [findSelectPodcast]
  )

  const checkLocalStorage = useCallback(() => {
    const storedDate = localStorage.getItem(storedDateKey)
    const today = new Date().toISOString().slice(0, 10)
    if (storedDate) {
      if (today !== storedDate) {
        window.location.href = '/'
      } else {
        const currentUrl = window.location.href
        const currentUrlSegments = currentUrl.split('/')
        const selectedPodcastId = currentUrlSegments.pop()
        findPodcast(selectedPodcastId)
      }
      return
    }
    window.location.href = '/'
  }, [findPodcast])

  useEffect(() => {
    checkLocalStorage()
  }, [checkLocalStorage])

  return {
    podcastDetails,
    findPodcast,
    loading
  }
}
