import React from 'react'
import LandingPage from './components/landing/LandingPage'
import Player from './components/player/Player'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>


      <Routes>
        <Route path = '/' element = {<LandingPage />}  />
        <Route path = '/player' element = {<Player />}  />
      </Routes>

      
      
    </div>
  )
}

export default App
