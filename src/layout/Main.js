import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Podcaster } from '../pages/Podcaster'
import { Podcast } from '../pages/Podcast'
import { PodcastPlayer } from '../pages/PodcastPlayer'
import { PageNotFound } from '../pages/PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Podcaster />} />
        <Route exact path="/podcast/:id" element={<Podcast />} />
        <Route
          exact
          path="/podcast/:id/episode/:id"
          element={<PodcastPlayer />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
