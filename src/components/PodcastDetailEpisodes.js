import { Link } from 'react-router-dom'
import '../stylesheets/podcastDetailsEpisodes.css'

export function PodcastDetailEpisodes({ podcastDetails }) {
  const currentUrl = window.location.href
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
        {podcastDetails?.episodes?.map((episode, index) => {
          const linkTo = `${currentUrl}/episode/${episode.id}`
          return (
            <li
              key={episode.id}
              className={`list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className="column">
                <Link
                  to={linkTo}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {episode.name}
                </Link>
              </div>
              <div className="column">{episode.date}</div>
              <div className="column">{episode.duration}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
