import { usePodcaster } from '../hooks/usePodcaster'
import { PodcasterList } from '../components/PodcasterList'

export function Podcaster() {
  const { podcasts, getPodcasts, loading } = usePodcaster()
  return (
    <div>
      {loading ? <p>Cargando...</p> : <PodcasterList podcasts={podcasts} />}
    </div>
  )
}

export default Podcaster
