import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='fixed-top nav'>
      <li className='nav-item'>
        <Link className='btn btn-dark text-white nav-link me-2' to="/">
          Tous 
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='btn btn-dark text-white nav-link me-2' to='/gradient/:id'>
        Precedent
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='btn btn-dark text-white nav-link' to='/gradient/:id'>
        Suivant
        </Link>
      </li>
    </nav>
  )
}

export default Navigation


// Add redirection Lin to="/gradient/:id"