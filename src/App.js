import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import EducationResources from './pages/EducationResources'
import EmploymentResources from './pages/EmploymentResources'
import Research from './pages/Research'
import Assessment from './pages/Assessment'
import NoMatch from './pages/NoMatch';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path='*' element={<NoMatch />}/>
          <Route path="/educational-resources" element={<EducationResources />} />
          <Route path="/employment-resources" element={<EmploymentResources />} />
          <Route path="/research-and-articles" element={<Research />} />
          <Route path="/other-resources" element={<Assessment />} />
        </Routes>
      </Router>
  );
}

export default App;
