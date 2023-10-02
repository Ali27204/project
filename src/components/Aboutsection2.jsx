export default function Aboutsection2(){
    return(
        <>
        <section className="container-fluid Aboutpage3">
      <div className="row Aboutpage3row">
        <div className="col-md-7">
           <h6 className=" text-danger ourkeypoint">--- OUR KEY POINTS</h6>
           <h2 className="wychooseus">Why Choose Us</h2>
           <p className="paragraph1">Bring to the table win-win survival strategies to ensure proactive domination.
            At the end of the day, going forward, a new normal that has evolved from
            generation X is on the runway heading towards a streamlined cloud solution.</p>
            <h5 className="mt-5 experience1"><i className="fa fa-check-circle" aria-hidden="true"></i> Experienced Construction Professional</h5>
            <h5 className="experience1"><i className="fa fa-check-circle" aria-hidden="true"></i>Committted to Helping Our Clients</h5>
            <h5 className="experience1"><i className="fa fa-check-circle" aria-hidden="true"></i>Building Maintenance & Renovation</h5>
            <h5 className="experience1"><i className="fa fa-check-circle" aria-hidden="true"></i>Innovative Eco Power Technologies</h5>
            <h4 className="mt-5 ms-2 Construction1">Construction</h4>
            <div className="progress ms-2" style={{marginRight: "70px"}}>
              <div className="progress-bar bg-danger" style={{width:"97%"}}></div>
            </div>
            <br/>
            <h4 className="ms-2 Construction1">Renovation</h4>
            <div className="progress ms-2" style={{marginRight: "70px"}}>
              <div className="progress-bar bg-danger" style={{width:"82%"}}></div>
            </div>
        </div>
        <div className="col-md-5 image25col">
            <div className="bg-danger" style={{position: "absolute",height: "350px"}} >
              <img className="image25" src={require("../images/image-25.jpg")} style={{marginLeft: "52px", marginTop: "-40px",objectFit: "cover"}} width="90%" alt=""/>
            </div>
        </div>
      </div>
    </section>
        </>
    )
}