import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <h1>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          Podcaster
        </Link>
      </h1>
    </header>
  )
}
