import { usePodcaster } from '../hooks/usePodcaster'
import { Container } from '@mui/material'
import { PodcasterList } from '../components/PodcasterList'

export function Podcaster() {
  const { podcasts, getPodcasts, loading } = usePodcaster()

  return (
    <Container>
      {loading ? <p>Cargando...</p> : <PodcasterList podcasts={podcasts} />}
    </Container>
  )
}

export default Podcaster
