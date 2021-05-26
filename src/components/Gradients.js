import { useState, useEffect, useReducer } from 'react' // Importer UseState et UseEffect
// Components
import GradientsList from './GradientsList'
import GradientsSelect from './GradientsSelect'
// Fonction
import { gradientsReducer } from '../reducers/gradientsReducer'
//import { useIsMounted } from '../hooks/useIsMounted'

/* eslint-disable */
const Gradients = () => {
  
  // Etat initial du state
  const initialState = {
    gradients: [],
    loading: false,
    error: "",
    // url: `https://gradients-api.herokuapp.com/gradients`,
  }
  // Variable concernant le rendu
  const [state, dispatch] = useReducer(gradientsReducer, initialState)
  // const [filter, setFilter] = useState('all')
  const [gradients, setGradients] = useState([])
  // const { gradientsDispatch } = useGradient() 
  // Extraction des variables du useReducer
   const { data, loading, error } = state

  // Fetch data
  useEffect(() => {
     dispatch({ type: 'FETCH_INIT' })
    console.log('use effect is running')
    fetch(`https://gradients-api.herokuapp.com/gradients`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire le registre des gradients, status : ${response.status}`,
          )
        }
        return response.json()
      })
      .then((result) => {
        console.log(result)
        // if (isMounted.current) {
           dispatch({ type: 'FETCH_SUCCESS', payload: result })
        // }
      })
      .catch((error) => {
        // if (isMounted.current) {
          dispatch({ type: 'FETCH_FAILURE', payload: error.message })
        // }
      })
  }, []) // Dispatch toujours les reporter ici

  return (
    <>
      <GradientsSelect />
      <GradientsList />
    </>
  )
}

export default Gradients
