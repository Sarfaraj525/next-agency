import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      {/* <h1 className='text-red-500'>Vite + React</h1> */}
      
    
    </>
  )
}

export default App
