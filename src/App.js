import React from "react"
import "./css/App.css"

import Logo from './components/Assets/Logo'

function App() {
  return (
    <div className='app'>
      <div className='wrapper'>
        <div className='app-header'>
          <div className='app-logo'>
            <Logo />
          </div>
        </div>
        <div className='card-container'>
          <div className='card'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
