import { prefixCors, prefixJson } from './prefixUls'

export const searchPodcastDetails = async (selectedPodcast) => {
  try {
    const response = await fetch(
      `${prefixCors}https://itunes.apple.com/lookup?id=${selectedPodcast.id}`
    )
    const json = await response.json()
    const { trackCount } = json.results[0]
    return { trackCount }
  } catch (error) {
    console.log({ error })
    throw new Error('Error searching podcast details')
  }
}
