import { useState } from 'react'
import useIsMobile from './hooks/useIsMobile'
import LandingDesktop from './components/desktop/LandingDesktop'
import LandingMobile from './components/mobile/LandingMobile'

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <LandingMobile /> : <LandingDesktop />}
    </>
  )
}

export default App;