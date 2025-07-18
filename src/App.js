import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import 'remixicon/fonts/remixicon.css'
import Aboutme from './AboutMe/Aboutme';
import ProHome from './Projects/ProHome';
import Navbar from "./Component/Navbar";
import CaseStudyPage from "./Projects/CaseStudy";
import Layout from "./Component/Layout";
import WebPage from "./Projects/Web";
import Posters from "./Projects/Posters";
import Vectors from "./Projects/Vector";
import Blood from "./Projects/Blood";
import Nvocc from "./Projects/Nvocc";
import Rentmythings from "./Projects/Rentmythings";
import Drone from "./Projects/Drone";
import Happy from "./Projects/Happy";
import Ecommerce from "./Projects/Ecommerce";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/project/bloodapp" element={<Blood />} />
        <Route path="/project/nvocc" element={<Nvocc />} />
         <Route path="/project/rentmythings" element={<Rentmythings />} />
         <Route path="/project/drone" element={<Drone />} />
          <Route path="/project/happy" element={<Happy />} />
           <Route path="/project/ecommerce" element={<Ecommerce />} />
        
        {/* Project routes nested under /project */}
        <Route path="/project" element={<Layout />}>
          <Route index element={<CaseStudyPage />} /> {/* Default page */}
          <Route path="casestudy" element={<CaseStudyPage />} />
          <Route path="uiux" element={<WebPage />} />
          <Route path="posters" element={<Posters />} />
          <Route path="vectors" element={<Vectors />} />
          {/* Add other project-related routes here */}
        </Route>
      </Routes>
    </Router>







  );
}

export default App;