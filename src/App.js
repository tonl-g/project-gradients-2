// src/App.js
import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import FullScreen from "./pages/FullScreen"
import Home from "./pages/Home"
import { GradientsContextProvider } from "./context/GradientsContext"

function App() {
  return (
    <GradientsContextProvider>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/gradient/:id'  component={FullScreen} /> 
      <Redirect to='/' />
    </Switch>
    </GradientsContextProvider>

  )
}

export default App


