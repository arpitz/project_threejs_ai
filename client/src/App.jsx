import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Canvas from './canvas'
import Customizer from './pages/Customizer'

function App() {

  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
