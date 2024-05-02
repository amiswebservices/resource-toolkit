import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import EducationResources from './pages/EducationResources'
import EmploymentResources from './pages/EmploymentResources'
import Research from './pages/Research'
import Assessment from './pages/Assessment'
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import UnitResources from './pages/UnitResources';
import Advocacy from './pages/Advocacy';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/about" element={<About />}/> 
          <Route path="/unt-resources-for-neuro-divergent" element={<UnitResources />}/> 
          <Route path="/advocacy-and-support-organizations" element={<Advocacy />}/> 
          <Route path="/educational-and-informational" element={<EducationResources />} />
          <Route path="/employment-career-development" element={<EmploymentResources />} />
        <Route path="/career-research" element={<Research />} />
          <Route path="/assessments" element={<Assessment />} />
          <Route path='*' element={<NoMatch />}/>
        </Routes>
      </Router>
  );
}

export default App;
