import AudioPlayer from './AudioPlayer'
import '../stylesheets/podcastDetailPlayer.css'

export function PodcastDetailPlayer({ currentEpisode }) {
  const { name, description, episodeUrl } = currentEpisode
  return (
    <div className="podcast-details__player">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
