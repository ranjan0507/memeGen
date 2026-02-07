import { useState } from 'react'
import './App.css'
import MemeGeneratorHeader from './component/Header'

import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <MemeGeneratorHeader />
      <Outlet />
    </>
  )
}

export default App
