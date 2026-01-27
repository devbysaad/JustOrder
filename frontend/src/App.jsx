import React, { Fragment } from 'react'
import Navbar from './components/Home/Navbar'
import Routes from './components/routers/routes'

const App = () => {
  return (
    <div className='w-full min-h-[100%] '>
      <div className=''>
        <Navbar />
        <Routes />
      </div>
    </div>
  )
}

export default App