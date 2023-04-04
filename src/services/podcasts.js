export const searchPodcasts = async () => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    )
    const json = await response.json()
    const podscasts = json.feed.entry
    return podscasts
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
