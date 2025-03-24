import { useState } from 'react'
import useIsMobile from './hooks/useIsMobile'
import LandingDesktop from './components/desktop/LandingDesktop'
import LandingMobile from './components/mobile/LandingMobile'
import './App.css';

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <LandingMobile /> : <LandingDesktop />}
    </>
  )
}

export default App;