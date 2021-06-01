import React from 'react'
import Footer from '../components/Footer'
import GradientCode from '../components/GradientCode'
import Navigation from '../components/Navigation'
import { useContext, useState } from 'react'
import { GradientsContext } from '../context/GradientsContext'
import { GradientsContextProvider } from '../context/GradientsContext'

const FullScreen = () => {
     const { state } = useContext(GradientsContext)

  return (
    <GradientsContextProvider>
    <div className='App min-vh-100 d-flex flex-column'>
      <Navigation />
      <div className='flex-fill d-flex'>
        <div className='m-auto text-center'>
          <h1 className='text-white display-1'>ADD Tag NAME</h1>
         <div className='bg-white shadow p-2 rounded'>
         <GradientCode />
        </div>
       </div>
      </div>  
      <Footer />
    </div>
    </GradientsContextProvider>
  )
}




// Add style line 6
export default FullScreen
