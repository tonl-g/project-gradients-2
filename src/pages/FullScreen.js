import React from 'react'
import Footer from "../components/Footer"
import GradientCode from '../components/GradientCode'
import { useContext } from 'react'
import { GradientsContext } from '../context/GradientsContext'
import {Link, useParams} from 'react-router-dom'

const FullScreen = () => {
  const { state } = useContext(GradientsContext)
  const params = useParams()
  const { id } = params
  const style = {
    backgroundImage: `linear-gradient(to right, ${state.gradientsList[id - 1].start}, ${state.gradientsList[id - 1].end})`
  }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style={style}>
        <nav className="fixed-top nav">
          <Link
            aria-label="Cliquer pour afficher tous les dégradés"
            type="button"
            className="btn btn-dark me-2"
            to="/"
          >Tous</Link>
          {id > 1 ?
            <Link
              aria-label="Cliquer pour afficher le dégradé précédent"
              type="button"
              className="btn btn-dark me-2"
              to={`/gradient/${Number(id) - 1}`}
            >Précédent</Link> : <></>}
          {id < state.gradientsList.length ?
            <Link
              aria-label="Cliquer pour afficher le dégradé suivant"
              type="button"
              className="btn btn-dark me-2"
              to={`/gradient/${Number(id) + 1}`}
            >Suivant</Link> : <></>}
        </nav>
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{state.gradientsList[id - 1].name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <GradientCode colorStart={state.gradientsList[id - 1].start} colorEnd={state.gradientsList[id - 1].end} />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default FullScreen;
