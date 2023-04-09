import { useSelectPodcast } from '../hooks/useSelectPodcast'
import { PodcastDetailCard } from '../components/PodcastDetailCard'
import { PodcastDetailPlayer } from '../components/PodcastDetailPlayer'

export function PodcastPlayer() {
  const { podcastDetails, findPodcast, loading } = useSelectPodcast()
  console.log({ podcastDetails })

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="podcast-details__container">
          <PodcastDetailCard podcastDetails={podcastDetails} />
          <PodcastDetailPlayer podcastDetails={podcastDetails} />
        </div>
      )}
    </>
  )
}
