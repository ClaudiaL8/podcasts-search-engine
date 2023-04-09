import '../stylesheets/podcastDetailsCard.css'

export function PodcastDetailCard({ podcastDetails }) {
  return (
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
  )
}
