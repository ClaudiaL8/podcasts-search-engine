import { useState, useCallback, useEffect } from 'react'

export function useEpisode() {
  const [currentPodcast, setCurrentPodcast] = useState('')
  const [currentEpisode, setCurrentEpisode] = useState('')

  const findEpisode = useCallback((podcastId, selectedEpisodeId) => {
    const storedPodcastsData = localStorage.getItem('podcastsDetails')
    if (storedPodcastsData) {
      const { data } = JSON.parse(storedPodcastsData)
      const findPodcast = data.find((podcast) => podcast.id === podcastId)
      setCurrentPodcast(findPodcast)
      const findEpisode = findPodcast.episodes.find(
        (episode) => episode.id === selectedEpisodeId
      )
      setCurrentEpisode(findEpisode)
    }
  }, [])

  const podcastIdPosition = 2
  const episodeIdPosition = 4

  useEffect(() => {
    const urlSegments = window.location.pathname.split('/')
    const podcastId = urlSegments[podcastIdPosition]
    const selectedEpisodeId = parseInt(urlSegments[episodeIdPosition])

    findEpisode(podcastId, selectedEpisodeId)
  }, [findEpisode])

  return {
    currentPodcast,
    currentEpisode,
    findEpisode
  }
}
