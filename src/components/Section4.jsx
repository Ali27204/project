import { NavLink } from "react-router-dom";

export default function Section4() {
    return(
     <>
     <section className="container-fluid page4">
      <div className="row page4row1">
        <div className="col-md-6 ps-5">
          <h6 className="ms-3 text-danger mt-5">--- OUR WORK</h6>
          <h1 className="ms-3">Explore Recent Projects</h1>
        </div>
        <div className="col-md-6">
          <button className="view-all-project"><NavLink to="/about" style={{textDecoration:"none",color:"white"}}> view all projects <i className="fa fa-arrow-circle-right"></i></NavLink></button>
        </div>
      </div>
      <div className="row page4row2  mt-5">
        <div className="col-md-4">
          <img src={require("../images/gallery-2.jpg")} width="100%" height="360px" alt=""/>
          <div className="bg-danger hovercontent">
            <h4>Alfa projects</h4>
            <h4>Home Construction</h4>
         </div>
  
        </div>
        <div className="col-md-4">
          <img className="gallery-3" src={require("../images/gallery-3.jpg")} width="100%" height="360px"  alt=""/>
          <div className="bg-danger hovercontent">
            <h4>Alfa projects</h4>
            <h4>Home Construction</h4>
         </div>
          
        </div>
        <div className="col-md-4">
          <img className="gallary-4" src={require("../images/gallery-4.jpg")} width="100%" height="360px" alt=""/>
          <div className="bg-danger hovercontent">
            <h4>Alfa projects</h4>
            <h4>Home Construction</h4>
         </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <marquee behavior="" direction="">Technology Civil</marquee>
        </div>
      </div>
    </section>

    <section className="container-fluid page5">
      <div className="row">
        <div className="col-md-4">
          <img className="ms-5" src={require("../images/roller.png")} width="100%" height="464px" alt=""/>
        </div>
        <div className="col-md-8">
          <h6 className="text-danger about-company">--- ABOUT COMPANY</h6>
          <h1 className="we-provide">We Provide the Guaranteed</h1>
          <h1 className="we-provide">Quality in Construction</h1>
          <p className="bring2">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. strategies to ensure proactive domination.</p>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex ps-5 pt-3">
              <img className="constructionimg" src={require("../images/construction-worker.png")} width="40%" height="90px" alt=""/>
               <div className="Professionalteam">
                <h3>Professional</h3>
                <h3>Team</h3>
               </div>
             
            </div>
              <p className="ourgutter">Our gutter protection simply works better than any other product.</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex ps-5 pt-3">
              <img className="constructionimg" src={require("../images/loading.png")} width="30%" height="90px" alt=""/>
               <div className="Qualityservices">
                <h3 className="ms-2">Quality</h3>
                <h3 className="ms-2">Service</h3>
               </div>
             
            </div>
              <p className="ourgutter">Our gutter protection simply works better than any other product.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
     </>
    );
}