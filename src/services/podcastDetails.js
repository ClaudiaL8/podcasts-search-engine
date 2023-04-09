import { prefixCors, prefixJson } from './prefixCors'

export const searchPodcastDetails = async (podcastId) => {
  try {
    const response = await fetch(
      `${prefixCors}https://itunes.apple.com/lookup?id=${podcastId}`
    )
    const json = await response.json()
    console.log(json.results[0])
    const {
      trackViewUrl,
      collectionName,
      artistName,
      artworkUrl600,
      trackCount
    } = json.results[0]
    const newPodcast = {
      trackViewUrl,
      collectionName,
      artistName,
      artworkUrl600,
      trackCount
    }
    return newPodcast
  } catch (error) {
    console.log({ error })
    throw new Error('Error searching podcast details')
  }
}
