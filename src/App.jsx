import { Outlet } from 'react-router-dom'
import './App.css'
import MemeGeneratorHeader from './component/Header'
import Hero from './component/Hero'

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
