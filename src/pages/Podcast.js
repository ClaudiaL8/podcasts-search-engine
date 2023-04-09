import { usePodcastDetails } from '../hooks/usePodcastDetails'
import { PodcastDetailCard } from '../components/PodcastDetailCard'
import { PodcastDetailEpisodes } from '../components/PodcastDetailEpisodes'

export function Podcast() {
  const { podcastDetails, loading } = usePodcastDetails()

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
