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

/* import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
      <Footer />
    </div>
  )
}

export default App */
