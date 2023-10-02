export default function Section6(){
    return(
        <section className="container page7">
         <div className="row p-5">
            <div className="col-md-6">
              <h6 className="text-danger">--- FROM THE BLOG</h6>
              <h1>New & Articles</h1>
            </div>
            <div className="col-md-6 page7col2">
              <p>Going forward, a new normal that has evolved from generation is on the runway heading towards a  streamlined.</p>
            </div>
         </div>
         <div className="row page7row2">
          <div className="col-md-4 hovereffectparent">
            <img src={require("../images/blog1.jpg")} alt=""/>
            <div className="hovereffect"></div>
          </div>
          <div className="col-md-4">
            <img className="blog2" src={require("../images/blog2.jpg")} alt=""/>
            <div className="hovereffect"></div>
           
          </div>
          <div className="col-md-4">
            <img className="blog3" src={require("../images/blog3.jpg")} alt=""/>
            <div className="hovereffect"></div>
          </div>
         </div>
         <div className="row page7row3">
          <div className="col-md-4 blogcontant">
            <div className="contentimg">
              <div className="mar29">
                <h4 className="ms-3 text-light">29</h4>
                <h4 className="ms-2 text-light">MAR</h4>
              </div>
              <h5>admin / 0 Comments</h5>
              <h2>Normal that has evolved from generation on</h2>
              <a href="">Continue reading</a>
            
            </div>
          </div>
          <div className="col-md-4 blogcontant2">
            <div className="contentimg">
              <div className="mar29">
                <h4 className="ms-3 text-light">29</h4>
                <h4 className="ms-2 text-light">MAR</h4>
              </div>
              <h5>admin / 0 Comments</h5>
              <h2>Normal that has evolved from generation on</h2>
              <a href="">Continue reading</a>
            </div>
          </div>
          <div className="col-md-4 blogcontant3">
            <div className="contentimg">
              <div className="mar29">
                <h4 className="ms-3 text-light">29</h4>
                <h4 className="ms-2 text-light">MAR</h4>
              </div>
              <h5>admin / 0 Comments</h5>
              <h2>Normal that has evolved from generation on</h2>
              <a  href="">Continue reading</a>
            </div>
          </div>
         </div>
    </section>

    );
}