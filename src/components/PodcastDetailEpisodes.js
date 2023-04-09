import { Link } from 'react-router-dom'
import '../stylesheets/podcastDetailsEpisodes.css'

export function PodcastDetailEpisodes({ podcastDetails }) {
  const linkTo = `/podcast/{podcastId}/episode/{episodeId}`
  return (
    <div>
      <h3 className="podcast-details__episodes__title">
        Episodes: {podcastDetails?.resultCount}
      </h3>
      <ul className="podcast-details__episodes__list">
        <div className="header-row__container">
          <div className="header-row">Title</div>
          <div className="header-row">Date</div>
          <div className="header-row">Duration</div>
        </div>
        {podcastDetails?.episodes?.map((episode, index) => (
          <li
            key={episode.id}
            className={`list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <Link
              to={linkTo}
              className="podcaster-list__item__link"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <div className="column">{episode.name}</div>
              <div className="column">{episode.date}</div>
              <div className="column">{episode.duration}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PodcastDetailEpisodes
