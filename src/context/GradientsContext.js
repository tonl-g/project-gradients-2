// src/context/FilterContext.js
import { useState, createContext, useContext } from 'react'

// créer et exporter ("named") FilterContext object
export const GradientsContext = createContext()

export const useGradients = () => {
    const context = useContext(GradientsContext)
    if (context === undefined) {
      throw new Error(
        `It seems that you are trying to use GradientContext outside of its provider`
      )
    }
    return context
  }

/* le component-provider qui embrassera la partie de notre app où on utilise ce context */
export const GradientsContextProvider = ({ children }) => {
  const [gradients, setGradients] = useState([])
  return (
    <GradientsContext.Provider value={{ gradients, setGradients }}>
      {children}
    </GradientsContext.Provider>
  )
}