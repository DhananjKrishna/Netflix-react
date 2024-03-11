import React from 'react'
import logo from '../img/Netflix_Logo_CMYK.png'
import ric from '../img/videoplayer.png'
import './nav.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className='lefts'>
        <img className='logs' src={logo} alt="" />
        <button>Home</button>

      </div>
      <div className='avatar'>

        <img src={ric} alt="error" />
      </div>
    </div>
  )
}

export default Navbar