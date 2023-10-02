import Home from "../Home";
import About from "../About";
import '../style.css';
import '../Responsive.css';
import { Routes, Route} from "react-router-dom";
import Services from "../Services";
import Project from "../Project";
import Contact from "../Contact";


  function App() {
  return(
    <>
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
          
    
          </Routes>
      
  </>
  );
}
export default App;
