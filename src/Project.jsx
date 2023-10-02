import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header2 from './components/Header2';
import Projectsection from './components/Projectsection';
function Project() {
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
        About="Projects"
        homeandcontact="Home / Contact"/>
      
       </section>

      <Projectsection/>
      <div style={{marginTop:"320px"}}></div>
       <Footer/>
       </>
  )
}

export default Project