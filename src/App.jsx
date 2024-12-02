import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Process from './components/Process'
import Services from './components/Services'
import Works from './components/Works'
import PricingPlans from './components/PricingPlans'
import WhyPartnerWithUs from './components/WhyPartnerWithUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Process></Process>
      <Services></Services>
      <Works></Works>
      <PricingPlans></PricingPlans>
      <WhyPartnerWithUs></WhyPartnerWithUs>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      {/* <h1 className='text-red-500'>Vite + React</h1> */}
      
    
    </>
  )
}

export default App
