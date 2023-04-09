export const searchPodcasts = async () => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    )
    const json = await response.json()
    const podcasts = json.feed.entry
    return podcasts?.map((podcast) => ({
      id: podcast.id.attributes['im:id'],
      title: podcast['im:name'].label.toUpperCase(),
      author: podcast['im:artist'].label,
      image: podcast['im:image'][2].label,
      description: podcast.summary.label,
      url: podcast.link.attributes.href
    }))
  } catch (error) {
    throw new Error('Error searching podcasts')
  }
}
