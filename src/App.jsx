import { Outlet } from 'react-router-dom'
import './App.css'
import MemeGeneratorHeader from './component/Header'
import Hero from './component/Hero'

function App() {
 
  return (
    <>
      <MemeGeneratorHeader />
      <Outlet />
    </>
  )
}

export default App
