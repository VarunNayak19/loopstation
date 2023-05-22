import { useState } from 'react'
import './index.css'
import HeroSection from './components/HeroSection/HeroSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import Creations from './components/Creations/creations'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Creations />
      <Footer />
    </>
  )
}

export default App
