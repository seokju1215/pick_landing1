import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom'; // Redirect 대신 Navigate 사용
import useIsMobile from './hooks/useIsMobile';
import LandingDesktop from './components/desktop/LandingDesktop';
import LandingMobile from './components/mobile/LandingMobile';

function App() {
  const isMobile = useIsMobile();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/folk-landing" />} />
        <Route path="/folk-landing" element={isMobile ? <LandingMobile /> : <LandingDesktop />} />
      </Routes>
    </Router>
  );
}

export default App;