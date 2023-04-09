import { useEffect } from 'react'
import { useSelectPodcast } from '../hooks/useSelectPodcast'
import '../stylesheets/podcastDetails.css'

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
          <div className="podcast-details__card">
            <div className="podcast-details__card__image">
              <img
                src={podcastDetails?.image}
                alt={podcastDetails?.title}
              ></img>
            </div>
            <div>
              <div className="podcast-details__card__title">
                <h4>{podcastDetails?.title}</h4>
                <p>by {podcastDetails?.author}</p>
              </div>
              <div className="podcast-details__card__description">
                <p>Description:</p>
                <p>{podcastDetails?.description}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="podcast-details__episodes__title">
              Episodes: {podcastDetails?.resultCount}
            </h3>
            <ul className="podcast-details__episodes__list">
              <div className="header-row">
                <div className="header">Title</div>
                <div className="header">Date</div>
                <div className="header">Duration</div>
              </div>
              {podcastDetails?.episodes?.map((episode, index) => (
                <li
                  key={episode.id}
                  className={`list-item ${index % 2 === 0 ? 'even' : 'odd'}`}
                >
                  <div className="column">{episode.name}</div>
                  <div className="column">{episode.date}</div>
                  <div className="column">{episode.duration}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Podcast
