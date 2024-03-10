import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import Signup from './components/onboarding/Signup';
import Instructions from './components/onboarding/Instructions';
import Step1 from './components/onboarding/Step1';
import Step2 from './components/onboarding/Step2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage/>}>
        <Route path="/" element={<Signup/>}/>
        <Route path="/instructions" element={<Instructions/>}/>
        <Route path="/step_one" element={<Step1/>}/>
        <Route path="/step_two" element={<Step2/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
