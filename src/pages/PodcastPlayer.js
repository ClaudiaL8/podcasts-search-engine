import { useEpisode } from '../hooks/useEpisode'
import { PodcastDetailCard } from '../components/PodcastDetailCard'
import { PodcastDetailPlayer } from '../components/PodcastDetailPlayer'

export function PodcastPlayer() {
  const { currentPodcast, currentEpisode } = useEpisode()

  return (
    <div className="podcast-details__container">
      <PodcastDetailCard podcastDetails={currentPodcast} />
      <PodcastDetailPlayer currentEpisode={currentEpisode} />
    </div>
  )
}
