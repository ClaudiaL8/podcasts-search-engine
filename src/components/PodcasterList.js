import '../stylesheets/podcastsList.css'

export function PodcasterList({ podcasts }) {
  const hasPoadcasts = podcasts?.length > 0

  function ListOfPoadcasts({ podcasts }) {
    return (
      <ul className="podcaster-list__list">
        {podcasts.map((podcast) => (
          <li className="podcaster-list__item" key={podcast.id}>
            <img src={podcast.image} alt={podcast.title}></img>
            <div>
              <h3>{podcast.title}</h3>
              <p>Author: {podcast.author}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  function NoPodcastsResults() {
    return <p>no se encontraron resultados </p>
  }

  return hasPoadcasts ? (
    <ListOfPoadcasts podcasts={podcasts} />
  ) : (
    <NoPodcastsResults podcasts={podcasts} />
  )
}
