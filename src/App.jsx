import { BrowserRouter as Router, Route ,Navigate, Routes } from 'react-router-dom'; // Redirect 대신 Navigate 사용
import useIsMobile from './hooks/useIsMobile';
import LandingDesktop from './components/desktop/LandingDesktop';
import LandingMobile from './components/mobile/LandingMobile';
import LandingDesktop2 from './components/desktop/LandingDesktop copy';
import LandingMobile2 from './components/mobile/LandingMobile copy';
import useDynamicTitle from './hooks/useDynamicTitle';

function App() {
  const isMobile = useIsMobile();
  useDynamicTitle();

  return (
    <Router>
      <Routes>
        <Route exact path="/landing1" element={isMobile ? <LandingMobile /> : <LandingDesktop />}  />
        <Route exact path="/landing2" element={isMobile ? <LandingMobile2 /> : <LandingDesktop2 />}  />
      </Routes>
    </Router>
  );
}

export default App;