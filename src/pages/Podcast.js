import { useEffect } from 'react'
import { useSelectPodcast } from '../hooks/useSelectPodcast'
import '../stylesheets/podcastDetails.css'

export function Podcast(props) {
  const { podcastDetails, findPodcast } = useSelectPodcast()

  const currentUrl = window.location.href
  const currentUrlSegments = currentUrl.split('/')
  const selectedPodcastId = currentUrlSegments.pop()

  useEffect(() => {
    findPodcast(selectedPodcastId)
  }, [findPodcast, selectedPodcastId])

  console.log({ podcastDetails })

  return (
    <div className="podcast-details__container">
      <div className="podcast-details__card">
        <div className="podcast-details__card__image">
          <img src={podcastDetails?.image} alt={podcastDetails?.title}></img>
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
      <div className="podcast-details__episodes">
        <h3 className="podcast-details__episodes__number">Episodes</h3>
        <ul className="podcast-details__episodes__list">
          <li key={'primero'}>primero</li>
          <li key={'segundo'}>segundo </li>
          <li key={'tercero'}>tercero</li>
          <li key={'cuarto'}>cuarto</li>
        </ul>
      </div>
    </div>
  )
}

export default Podcast
