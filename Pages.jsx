import React from 'react';
 import App from './src/components/App';
import About from './src/About';
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";


 function Page(){
    return(
        <Router>
        <Routes>
           <Route path="/" element={<App/>} />
           <Route path="/about" element={<About/>} />
        </Routes>
        </Router>  
    );
 }
   export default Page;
