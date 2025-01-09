import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import 'remixicon/fonts/remixicon.css'
import Learn from './Learn';
import Blood from './Projects/Blood';
import Aboutme from './AboutMe/Aboutme';
import BackToTopButton from './Component/BackToTopButton';
import ProHome from './Projects/ProHome';
import Navbar from "./Component/Navbar";

function App() {
  return (


<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/project" element={<ProHome />} />
      </Routes>
</Router>

   
  );
}

export default App;
