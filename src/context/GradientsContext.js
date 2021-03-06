import { createContext, useReducer, useEffect } from 'react'
import { gradientsReducer } from '../reducers/gradientsReducer'

export const GradientsContext = createContext()

export const GradientsContextProvider = ({ children }) => {
  const URL = 'https://gradients-api.herokuapp.com/gradients'
  const [state, dispatch] = useReducer(gradientsReducer, {
    gradientsList: [],
    uniqueTags: [],
    loaded: false,
    loading: false,
    error: '',
    filter: 'Tous',
  })
  console.log(state)
  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' })
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.statusText}`)
        }
        return response.json()
      })
      .then((result) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: result })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message })
      })
  }, [])
  console.log(state)
  return (
    <GradientsContext.Provider value={{ state, dispatch }}>
      {state.error ? (
        <h1 className="alert alert-danger">{state.error}</h1>
      ) : !state.loaded ? (
        <h1>Loading...</h1>
      ) : (
       children
      )}
    </GradientsContext.Provider>
  )
}
