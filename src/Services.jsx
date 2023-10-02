import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header2 from './components/Header2';
import Servicesection1 from './components/Servicesection1';
import Servicesection2 from './components/Servicesection2';
function Services() {
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
        About="Services"
        homeandcontact="Home / Contact"/>
       </section>
      <Servicesection1/>
       {/* <Footer/> */}
       <Servicesection2/>
       <div style={{marginTop:"320px"}}></div>
       <Footer/>
    </>
  )
}

export default Services