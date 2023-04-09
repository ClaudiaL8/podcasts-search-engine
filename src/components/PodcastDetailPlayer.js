import { useState, useRef } from 'react'

export function PodcastDetailPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
  }

  return (
    <div>
      <audio
        ref={audioRef}
        src={
          'https://podcasts.apple.com/us/podcast/louder-than-a-riot/id1532093071?uo=4'
        }
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <div>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <div>Current time: {currentTime.toFixed(2)}</div>
    </div>
  )
}
