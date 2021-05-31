import { useContext, useState } from 'react'
import { GradientsContext } from '../context/GradientsContext'

const GradientsHeader = (props) => {
  const { state } = useContext(GradientsContext)

  const [gradientIndex, setGradientIndex] = useState(
    Math.floor(Math.random() * state.gradientsList.length)
  )

  const handleReloadClick = () => {
    setGradientIndex(Math.floor(Math.random() * state.gradientsList.length))
  }

  const handlePreviousClick = () => {
    setGradientIndex(
      (((gradientIndex - 1) % state.gradientsList.length) +
        state.gradientsList.length) %
        state.gradientsList.length
    )
  }

  const handleNextClick = () => {
    setGradientIndex((gradientIndex + 1) % state.gradientsList.length)
  }
  const backgroundImage = `linear-gradient(to right, ${state.gradientsList[gradientIndex].start}, ${state.gradientsList[gradientIndex].end})`

  const style = { backgroundImage }

  return (
    <header style={style} className="text-center bg-dark text-white py-5 mb-5">
      <h1 className="display-1 text-center my-4">Alyra Gradients</h1>
      <p>Ultime collection de plus beaux dégradés</p>
      <button
        onClick={handlePreviousClick}
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleReloadClick}
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          ></path>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"></path>
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </button>
    </header>
  )
}

export default GradientsHeader


/* import { useState, useContext } from "react"
import { gradients as list } from "../gradients"
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg"
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg"
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg"

const GradientsHeader = (props) => {
  const { children } = props
  const length = list.length

  const chooseGradient = () => Math.floor(Math.random() * length)

  const [randomGradient, setRandomGradient] = useState(chooseGradient)
  const handleReloadClick = () => {
    setRandomGradient(chooseGradient)
  }
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1)
  }
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1)
  }

  const style = {
    backgroundImage: `linear-gradient(to right, ${list[randomGradient].start}, ${list[randomGradient].end})`
  }
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
      {children}
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handlePrevClick}
      >
        <Prev />
      </button>
      <button
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleReloadClick}
      >
        <SvgToggle />
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleNextClick}
      >
        <Next />
      </button>
    </header>
  )
}

export default GradientsHeader */
