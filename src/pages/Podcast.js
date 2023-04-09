import { useEffect } from 'react'
import { useSelectPodcast } from '../hooks/useSelectPodcast'
import PodcastDetailCard from '../components/PodcastDetailCard'
import PodcastDetailEpisodes from '../components/PodcastDetailEpisodes'

export function Podcast() {
  const { podcastDetails, findPodcast, loading } = useSelectPodcast()

  const currentUrl = window.location.href
  const currentUrlSegments = currentUrl.split('/')
  const selectedPodcastId = currentUrlSegments.pop()

  useEffect(() => {
    findPodcast(selectedPodcastId)
  }, [findPodcast, selectedPodcastId])

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="podcast-details__container">
          <PodcastDetailCard podcastDetails={podcastDetails} />
          <PodcastDetailEpisodes podcastDetails={podcastDetails} />
        </div>
      )}
    </>
  )
}

export default Podcast
