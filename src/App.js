import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Podcaster from './pages/Podcaster'
import './App.css'

function App() {
  return (
    <Container className="App">
      <header>HEADER</header>
      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={<Podcaster />} />
          </Routes>
        </Router>
      </main>
      <footer>FOOTER</footer>
    </Container>
  )
}

export default App
