export default function Aboutsection3(){
    return(
        <>
          <section className="container-fluid Aboutpage7">
         <div className="row Aboutpage7row">
          <div className="col-md-5">
            <h6 className="text-danger">--- STATISTCS</h6>
             <h2 className="knowmore mt-3">Know More About</h2>
             <h2  className="knowmore">Our Success</h2>
             <p className="paragraph1 mt-4">Bring to the table win-win survival strategies to ensure
              proactive domination. At the end of the day, going for
              ward, a new normal.</p>
          </div>
          <div className="col-md-3 " style={{marginLeft: "70px"}}>
            
              <div className="d-flex borderset borderset1 bg-light">
                <img className="mt-2" src={require("../images/folder-management.png")} width="70px" height="70px" alt=""/>
                 <div>
                   <h3 className="text-danger valuenumber">2,879</h3>
                   <h6 className="totalproject">Total Projects</h6>
                 </div>
              </div>
              <div className="d-flex borderset borderset1 mt-4 bg-light">
                <img className="mt-2" src={require("../images/folder-management.png")} width="70px" height="70px" alt=""/>
                 <div>
                   <h3 className="text-danger valuenumber">2,879</h3>
                   <h6 className="totalproject">Total Projects</h6>
                 </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="d-flex borderset bg-light">
                <img className="mt-2" src={require("../images/folder-management.png")} width="70px" height="70px" alt=""/>
                 <div>
                   <h3 className="text-danger valuenumber">2,879</h3>
                   <h6 className="totalproject">Total Projects</h6>
                 </div>
              </div>
              <div className="d-flex borderset mt-4 bg-light">
                <img className="mt-2" src={require("../images/folder-management.png")} width="70px" height="70px" alt=""/>
                 <div>
                   <h3 className="text-danger valuenumber">2,879</h3>
                   <h6 className="totalproject">Total Projects</h6>
                 </div>
              </div>
            </div>
         </div>
    </section>
        </>
    )
}