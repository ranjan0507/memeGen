import { useState } from 'react'
import './App.css'
import MemeGeneratorHeader from './component/Header'

import { Outlet } from 'react-router-dom'

function App() {
  const unusedVariable = "This will trigger a lint error";
  const anotherUnused = 123;
 
  return (
    <>
      <MemeGeneratorHeader />
      <Outlet />
    </>
  )
}

export default App
