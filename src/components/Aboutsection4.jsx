export default function Aboutsection4(){
    return(
        <>
           <section className="container-fluid Aboutpage8">
        <div className="row Aboutpage8row">
          <div className="col-md-12">
             <h6 className="text-danger professional">--- OUR PROFESSIONALS</h6>
             <h2 className="dedicated">Our Dedicated Team</h2>
          </div>
        </div>
        <div className="row p-5" style={{marginTop: "-100px"}}>
          <div className="col-md-3 animationeffect">
            <figure>
            <img className="team1" src={require("../images/team-1.jpg")} alt="" width="100%" height="400px"/>
            <figcaption>
              <div className="d-flex" >
                 <div  className="facebook iconsection bg-light">
                  <i  className=" fa fa-facebook"></i>
                 </div>
                 <div className="instagram iconsection ms-3 bg-light">
                  <i className=" fa fa-instagram"></i>
                 </div>
                 <div className="twitter iconsection bg-light ms-3">
                  <i className="fa fa-twitter"></i>
                 </div>
              </div>
          </figcaption>
          </figure>
            <div  className="shareiconsection">
              <i className="fa fa-share-alt"></i>
            </div>        
             <div className="shape3">
              <img src={require("../images/shape-3.png")} alt=""/>
               <div className="shape3contant">
                <h4>Robert Joe</h4>
                <h5>ENGINEER</h5>
               </div>
             </div>
          </div>
          <div className="col-md-3 animationeffect">
            <figure>
              <img className="team1" src={require("../images/team-2.jpg")} alt="" width="100%" height="400px"/>
              <figcaption>
                <div className="d-flex" >
                   <div  className="facebook iconsection bg-light">
                    <i  className=" fa fa-facebook"></i>
                   </div>
                   <div className="instagram iconsection ms-3 bg-light">
                    <i className=" fa fa-instagram"></i>
                   </div>
                   <div className="twitter iconsection bg-light ms-3">
                    <i className="fa fa-twitter"></i>
                   </div>
                </div>
            </figcaption>
            </figure>
            <div  className="shareiconsection">
              <i className="fa fa-share-alt"></i>
            </div> 
            <div className="shape3">
              <img  src={require("../images/shape-3.png")} alt=""/>
               <div className="shape3contant">
                <h4>Michale Joe</h4>
                <h5>CIVIL ENGINEER</h5>
               </div>
             </div>
          </div>
          <div className="col-md-3 animationeffect">
            <figure>
              <img className="team1" src={require("../images/team-3.jpg")} alt="" width="100%" height="400px"/>
              <figcaption>
                <div className="d-flex" >
                   <div  className="facebook iconsection bg-light">
                    <i  className=" fa fa-facebook"></i>
                   </div>
                   <div className="instagram iconsection ms-3 bg-light">
                    <i className=" fa fa-instagram"></i>
                   </div>
                   <div className="twitter iconsection bg-light ms-3">
                    <i className="fa fa-twitter"></i>
                   </div>
                </div>
            </figcaption>
            </figure>
            <div  className="shareiconsection">
              <i className="fa fa-share-alt"></i>
            </div> 
            <div className="shape3">
              <img  src={require("../images/shape-3.png")} alt=""/>
               <div className="shape3contant">
                <h4>Daniale Joe</h4>
                <h5>ASSISTANCE</h5>
               </div>
             </div>
          </div>
          <div className="col-md-3 animationeffect">
            <figure>
              <img className="team1" src={require("../images/team-4.jpg")} alt="" width="100%" height="400px"/>
              <figcaption>
                <div>
                </div>
                <div className="d-flex" >
                   <div  className="facebook iconsection bg-light">
                    <i  className=" fa fa-facebook"></i>
                   </div>
                   <div className="instagram iconsection ms-3 bg-light">
                    <i className=" fa fa-instagram"></i>
                   </div>
                   <div className="twitter iconsection bg-light ms-3">
                    <i className="fa fa-twitter"></i>
                   </div>
                </div>
            </figcaption>
            </figure>
            <div  className="shareiconsection">
              <i className="fa fa-share-alt"></i>
            </div> 
            <div className="shape3">
              <img  src={require("../images/shape-3.png")} alt=""/>
               <div className="shape3contant">
                <h4>Albert Flores</h4>
                <h5>JUNIOR ENGINEER</h5>
               </div>
             </div>
          </div>
        </div>
    </section>
        </>
    )
}