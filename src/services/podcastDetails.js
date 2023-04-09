import { prefixCors, prefixJson } from './prefixUls'
import { convertMsToMinSec, getFormattedDate } from '../utils/usefulFunctions'

export const searchPodcastDetails = async (selectedPodcast) => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${selectedPodcast.id}&country=US&media=podcast&entity=podcastEpisode&limit=100`
    )
    const json = await response.json()
    const { resultCount, results } = json
    const episodes = results?.map((episode) => ({
      name: episode.trackName,
      date: getFormattedDate(episode.releaseDate),
      duration: convertMsToMinSec(episode.trackTimeMillis)
    }))
    return { resultCount, episodes }
  } catch (error) {
    console.log({ error })
    throw new Error('Error searching podcast details')
  }
}
