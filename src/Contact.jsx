import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header2 from './components/Header2';
import Contactsection1 from './components/Contactsection1';
import Section7 from './components/Section7';
import Contactsection2 from './components/Contactsection2';
function Contact() {
  return (
    <div>
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
        About="Contact"
        homeandcontact="Home / Contact"/>
    </section>
    <Contactsection1/>
     <Contactsection2/>
     <div style={{marginTop:"320px"}}></div>
    <Footer/>
 </div>
  )
}

export default Contact