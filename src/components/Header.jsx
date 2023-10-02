import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <div className="main">
      <section className="container-fluid backimg">
         <Navbar 
            img="logo-light.png"
             home="Home"
            about="About"
           service="Services"
           project="Project"
           contact="Contact"
       />
        <div className="row problem">
            <div className="col-md-12 d-flex buildingimg ">
            <div className="backimgcontent">
              <h1 className="text-light Vision">Vision in</h1>
              <h1 className="text-light BUILDING" >BUIL<span>DING</span></h1>
              <h5 className="thepoint">The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of
                letters, as opposed to using content here
                normal distribution</h5>
                <NavLink to="/about" className="discover">DISCORVER MORE <i className="fa fa-arrow-right ms-2"></i></NavLink>
            </div>
           
            
                <img className=" img1" src={require("../images/image-1.png")} alt=""/>
            </div>
        </div>
      </section>
    </div>
  );
}
