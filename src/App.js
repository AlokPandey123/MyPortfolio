
import './App.css';
import NavigationBar from './comp/NavigationBar';
import Home from './comp/Home';

import Register from './comp/SignUp';
import { Routes, Route } from "react-router-dom";
import Skill from './comp/Skill'
import Project from './comp/Project'
import Services from './comp/Services';


const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Skill" element={<Skill />} />
       <Route path="/Project" element={<Project />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/SignUp" element={<Register />} />
     
    </Routes>
    
      
    </div>
  );
};

export default App;
