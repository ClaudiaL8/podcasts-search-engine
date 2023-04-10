import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Podcaster } from '../pages/Podcaster'
import { Podcast } from '../pages/Podcast'
import { PodcastPlayer } from '../pages/PodcastPlayer'
import { PageNotFound } from '../pages/PageNotFound'
import { Header } from './Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Podcaster />
            </Layout>
          }
        />
        <Route
          exact
          path="/podcast/:id"
          element={
            <Layout>
              <Podcast />
            </Layout>
          }
        />
        <Route
          exact
          path="/podcast/:id/episode/:id"
          element={
            <Layout>
              <PodcastPlayer />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <PageNotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
