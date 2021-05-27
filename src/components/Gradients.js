import { useEffect, useReducer, useRef } from 'react' 
// Components
import GradientsList from './GradientsList'
import GradientsSelect from './GradientsSelect'
// Fonction
import { gradientsReducer } from '../reducers/gradientsReducer'

/* eslint-disable */
const Gradients = () => {
    const init = { gradients: [], filter: "all", uniqueTag: [], filteredGradient: [], loading: false, error: "" }
    const [state, dispatch] = useReducer(gradientsReducer, init)
    const { gradients, filter, uniqueTag, filteredGradient, loading, error } = state
  
    const cancelRef = useRef(null)
    const controllerRef = useRef(null)
  
    useEffect(() => {
      cancelRef.current = false
      controllerRef.current = new AbortController()
      // mounts
      console.log("I mounted")
      return () => {
        //unmounts
        console.log("I unmount")
        cancelRef.current = true
        controllerRef.current.abort()
      }
    }, [])
  
    useEffect(() => {
      console.log(cancelRef)
      dispatch({ type: "FETCH_INIT" })
      fetch("https://gradients-api.herokuapp.com/gradients", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Something went wrong: ${response.statusText}`)
          }
          return response.json()
        })
        .then(data => {
          if (!cancelRef.current) {
            console.log("I get data")
            console.log(data)
            dispatch({ type: "FETCH_SUCCESS", payload: data })
          }
        })
        .catch((error) => {
          if (!cancelRef.current) {
            console.log(error.message)
            dispatch({ type: "FETCH_FAILURE", payload: error.message })
          }
        })
    }, [])

  /*
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
  }, []) // Dispatch toujours les reporter ici */

  return (
    <>
      <GradientsSelect />
      <GradientsList />
    </>
  )
}

export default Gradients
