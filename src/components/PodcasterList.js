function ListOfPoadcasts({ podcasts }) {
  return (
    <ul className="podcasts">
      {podcasts.map((podcast) => (
        <li className="podcast" key={podcast.id}>
          <img src={podcast.image} alt={podcast.title}></img>
          <div>
            <h3>{podcast.title}</h3>
            <p>{podcast.author}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function NoPoadcastsResults() {
  return <p>no se encontraron resultados </p>
}

export function PodcasterList({ podcasts }) {
  const hasPoadcasts = podcasts?.length > 0
  return hasPoadcasts ? (
    <ListOfPoadcasts podcasts={podcasts} />
  ) : (
    <NoPoadcastsResults podcasts={podcasts} />
  )
}
