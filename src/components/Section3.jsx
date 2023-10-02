import { NavLink } from "react-router-dom";

export default function Section3() {

    return(
        <section className="container-fluid newpage">
        <div className="row newpagerow">
            <div className="col-md-6 bg-light">
              <h6 className="text-danger mt-5 ms-5 outkeypoints">--- OUR KEY POINTS</h6>
              <h1 className="whychoose ms-5 mt-3">Why Choose Us</h1>
              <p className="bring">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation . Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward.</p>
              <h4 className="mt-5 ms-5 Experienced">Experienced Construction Professional</h4>
              <h4 className="ms-5 mt-3 Experienced">Committted to Helping Our Clients</h4>
              <h4 className="ms-5 mt-3 Experienced">Building Maintenance & Renovation</h4>
              <h4 className="ms-5 mt-3 Experienced">Innovative Eco Power Technologies</h4>
               
              <h4 className="mt-5 ms-5 Construction1">Construction</h4>
              <div className="progress ms-5">
                <div className="progress-bar bg-danger" style={{width:"96%"}}></div>
              </div>
              <br/>
              <h4 className="ms-5 Construction1">Renovation</h4>
              <div className="progress ms-5">
                <div className="progress-bar bg-danger"  style={{width:"82%"}}></div>
              </div>
            </div>
            <div className="page3 col-md-6" style={{marginTop: "300px",height: "500px"}}>
               <h6 className="text-danger BIGGER">--- BIGGER, BETTER, FASTER</h6>
               <h1 className="text-light leadingway">Leading Way In Civil</h1>
               <h1 className="text-light Construction-1 ">Construction</h1>
               <p className="text-light  bringtothetable">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved.</p>
               <NavLink to="/contact" className="requestacall">request a call back <i className="ms-2 fa fa-arrow-right"></i></NavLink>
            </div>
        </div>
      </section>
    );
}