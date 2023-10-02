import React from 'react';
//import '../src/about.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutsection2 from './components/Aboutsection2';

import Header2 from './components/Header2';
import Aboutsection1 from './components/Aboutsection1';
import Section5 from './components/Section5';
import Aboutsection3 from './components/Aboutsection3';
import Aboutsection4 from './components/Aboutsection4';
function About() {
  return (
  <>
    <section className="container-fluid backimg" style={{height:"500px"}}>
   <Navbar 
            img="logo-light.png"
             home="Home"
            about="About" 
           service="Services"
           project="Project"
           contact="Contact"
           />
       
       <Header2
       About="About"
       homeandcontact="Home / Contact"
       />
       </section>
       <Aboutsection1/>
       <Aboutsection2/>
      <div className='aboutsectionres'></div>
       <Section5 />
       <Aboutsection3/>
       <Aboutsection4/>
        <div style={{marginTop:"250px"}}></div> 
       <Footer/>
  </>
  
  
  );
}

export default About;