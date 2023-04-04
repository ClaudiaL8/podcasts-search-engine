import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Podcaster from '../pages/Podcaster'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Podcaster />} />
      </Routes>
    </Router>
  )
}

export default App
