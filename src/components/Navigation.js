import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useState, useContext} from 'react'
import { GradientsContext } from '../context/GradientsContext'

const Navigation = () => {
  const { state } = useContext(GradientsContext)
  const { id } = useParams()
  const [counterId, setCounterId ]= useState(id)
  const gradientsList = state.gradientsList

    console.log(gradientsList)

  const nextClick = () => {
    counterId <= 25 ? setCounterId(Number(counterId + 1)) : setCounterId(25)
    console.log(counterId)
  }
  const previousClick = () => {
    counterId > 0 ? setCounterId(Number(counterId - 1)) : setCounterId(1)
        console.log(counterId)

  }



  return (
    <nav className='fixed-top nav'>
      <li className='nav-item'>
        <Link className='btn btn-dark text-white nav-link me-2' to="/">
          Tous 
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='btn btn-dark text-white nav-link me-2' to={`/gradient/${id}`} onClick={previousClick}> 
        Precedent
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='btn btn-dark text-white nav-link' to={`/gradient/${id}`} onClick={nextClick} >
        Suivant
        </Link>
      </li>
    </nav>
  )
}

export default Navigation


// Add redirection Lin to="/gradient/:id"
//disabled={counterId === 25} ??