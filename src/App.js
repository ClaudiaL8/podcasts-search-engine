import React from 'react'
import Header from './layout/Header'
import Main from './layout/Main'
import './stylesheets/App.css'

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
    </div>
  )
}

export default App
