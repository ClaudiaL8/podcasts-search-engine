import { Link } from 'react-router-dom'
import '../stylesheets/podcastsList.css'

export function PodcasterList({ podcasts }) {
  const hasPoadcasts = podcasts?.length > 0

  function ListOfPoadcasts() {
    return (
      <ul className="podcaster-list__list">
        {podcasts.map((podcast) => {
          const linkTo = `/podcast/${podcast.id}`
          return (
            <li className="podcaster-list__item" key={podcast.id}>
              <Link
                to={linkTo}
                className="podcaster-list__item__link"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <img src={podcast.image} alt={podcast.title}></img>
                <div>
                  <h3>{podcast.title}</h3>
                  <p>Author: {podcast.author}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  function NoPodcastsResults() {
    return <p>No results found</p>
  }

  return hasPoadcasts ? <ListOfPoadcasts /> : <NoPodcastsResults />
}
