export default function Aboutsection1(){
    return(
        <>
        <section className="container-fluid">
        <div className="row">
        <div className="col-md-5">
          <img className="roller" src={require("../images/roller.png")} width="90%" height="500px" alt=""/>
          <div className="d-flex">
            
                  <div className="testing">
                     <div className="test">
                      <h2 className="twenty">20</h2>
                      <h2 className="year">Years</h2>
                      <h2 className="year">Experience</h2>

                    </div>
                  </div>
                 <img className="img3 about-img3" src={require("../images/image-3.jpg")} alt=""/>
            
          </div>
        </div>
       


        <div className="col-md-7">
          <h6 className="text-danger aboutcompany">--- ABOUT COMPANY</h6>
          <h2 className="weprovide mt-3">We Provide the Guaranteed</h2>
          <h2 className="weprovide">Quality in Construction</h2>
          <p className="capitalize mt-5">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click.</p>
          <p className="bring">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. strategies to ensure proactive domination. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. strategies to ensure proactive domination.</p>
          <div className="d-flex mt-5">
            <div className="d-flex" >
              <img className="author1" src={require("../images/author-1.jpg")} alt=""/>
               <div className="ms-4 mt-2 px-5" style={{borderRight: "1px solid black;"}}>
                  <h4 className="robert1">Robert Joe Kerry</h4>
                  <h5 className="founder1">Founder</h5>
               </div>
               <img className="signature2" src={require("../images/signature2.png")} alt=""/>
             </div>
          </div>
        </div>
      </div>
      
    </section>
        </>
    );
}