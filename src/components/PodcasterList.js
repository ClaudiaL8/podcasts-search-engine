import '../stylesheets/podcastsList.css'

function ListOfPoadcasts({ podcasts }) {
  return (
    <div className="podcaster-list__container">
      <input
        class="podcaster-list__input"
        type="text"
        placeholder="Ingrese un elemento"
      />
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
    </div>
  )
}

function NoPodcastsResults() {
  return <p>no se encontraron resultados </p>
}

export function PodcasterList({ podcasts }) {
  const hasPoadcasts = podcasts?.length > 0
  return hasPoadcasts ? (
    <ListOfPoadcasts podcasts={podcasts} />
  ) : (
    <NoPodcastsResults podcasts={podcasts} />
  )
}
