import '../stylesheets/podcastDetailPlayer.css'

export function AudioPlayer({ episodeUrl }) {
  return (
    <div className="prueba">
      <audio controls="controls">
        <source src={episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
