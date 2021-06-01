import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"

export function Product() {
  const params = useParams()
  console.log(params)
  const { id } = params
  
  return (
    <>
      <h2>Product with id: {id}</h2>
      {/* et tout ce qui concerne un produit avec mon id vient ici !! */}
    </>
  )
}


const GradientFullscreenButton = () => {
  return (
    <Link className="btn btn-outline-dark w-100" to="/gradient/:id">
      Plein écran
    </Link>
  )
}

export default GradientFullscreenButton


// Need router pour continuer