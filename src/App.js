import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import Signup from './components/onboarding/Signup';
import Instructions from './components/onboarding/Instructions';
import Layout from './components/layout/layout'; // Import the Layout component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} /> {/* No layout here */}
        <Route path="signup" element={<Signup />} /> {/* No layout here */}
        <Route path="dashboard/*" element={<Layout />}> {/* Layout for dashboard sub-routes */}
          <Route path="" element={<Outlet />} /> {/* Render child routes within layout */}
          <Route path=":subPath" element={<Outlet />} /> {/* Handle dynamic sub-routes */}
          <Route path="/instructions" element={<Instructions />} />
        </Route>
        {/* Other routes... */}
      </Routes>
    </Router>
  );
}

export default App;