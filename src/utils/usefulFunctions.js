export function convertMsToMinSec(ms) {
  let minutes = Math.floor(ms / 60000)
  let seconds = ((ms % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

export function getFormattedDate(dateString) {
  const date = new Date(dateString)
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`
  return formattedDate
}
