import { usePodcaster } from '../hooks/usePodcaster'
import { Container, CircularProgress, Typography } from '@mui/material'

const Podcaster = () => {
  const { podcasts, getPodcasts, loading } = usePodcaster()

  return (
    <Container>
      <main>{loading ? <p>Cargando...</p> : <p>Ya hay contenido</p>}</main>
    </Container>
  )
}

export default Podcaster
