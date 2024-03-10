import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import Signup from './components/onboarding/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage/>}>
        <Route path="/" element={<Signup/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
