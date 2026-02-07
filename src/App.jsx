
import './App.css'
import MemeGeneratorHeader from './component/Header'
import Hero from './component/Hero'
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
