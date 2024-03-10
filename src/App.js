import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import Signup from './components/onboarding/Signup';
import Instructions from './components/onboarding/Instructions';
import Layout from './components/layout/layout'; // Import the Layout component
import DashboardHome from './pages/dashboard/DashboardHome'; // Import the DashboardHome component
import Step1 from './components/onboarding/Step1';
import Step2 from './components/onboarding/Step2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} > {/* No layout here */}
          <Route path="/" element={<Signup />} /> {/* No layout here */}
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/step_one" element={<Step1 />} />
          <Route path="/step_two" element={<Step2 />} />
        </Route>
        <Route path="/dashboard/home" element={<Layout><DashboardHome /></Layout>}> {/* Layout for dashboard sub-routes */}
        </Route>
      </Routes>
    </Router >
  );
}

export default App;