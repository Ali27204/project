export default function Footer(){
    return(
        <footer className="container-fluid footersection" style={{fontSize:"40px"}}>
        <div className="row footersectionrow1">
          <div className="col-md-4 footersectionrow1colum  d-flex">
            <i className="fa fa-map-marker locationicon" aria-hidden="true"></i>
            <h5>54B, Tailstoi Town 5238 MT,<br/>
              La city, IA 522364</h5>
          </div>
          <div className="col-md-4 footersectionrow1colum d-flex">
            <i className="fa fa-envelope"></i>
            <h5 className="ms-3">54B, Tailstoi Town 5238 MT,<br/>
              La city, IA 522364</h5>
          </div>
          <div className="col-md-4 d-flex footersectionrow1colum">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <h5>54B, Tailstoi Town 5238 MT,<br/>
              La city, IA 522364</h5>
          </div>
        </div>

        <div className="row footersectionrow2">
          <div className="col-md-3">
            <img className="logo2" src={require("../images/logo-light.png")} alt=""/>
            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test a the ballpark value added activity to beta test.</p>
          </div>
          <div className="col-md-3">
            <h4>Useful Links</h4>
           
            <h6><a href="#">About</a></h6>
            <h6 className="mt-3"><a href="">Team</a></h6>
            <h6 className="mt-3"><a href="">Testimonials</a></h6>
             <h6 className="mt-3"> <a href="">Blog Grid</a></h6>
             <h6 className="mt-3"> <a href="">Contact</a></h6>
          </div>
          <div className="col-md-3">
            <h4>Our Services</h4>
           
            <h6><a href="#">About</a></h6>
            <h6 className="mt-3"><a href="">Team</a></h6>
            <h6 className="mt-3"><a href="">Testimonials</a></h6>
             <h6 className="mt-3"> <a href="">Blog Grid</a></h6>
             <h6 className="mt-3"> <a href="">Contact</a></h6>
          </div>
          <div className="col-md-3 px-3">
            <h4>Newsletter</h4>
            <h5>Get latest updates and offers.</h5>
            <div className="d-flex">
            <input type="text" placeholder="Enter your Email Address"/>
             <i className="fa fa-send"></i>
          </div>
          <i className="fa fa-facebook" style={{borderRadius: "50%",backgroundColor: "transparent",border: "1px solid white",color:"white"}}></i>
          <i className="fa fa-google" style={{borderRadius: "50%",backgroundColor: "transparent",border: "1px solid white",color:"white",marginLeft:"5px"}}></i>
          <i className="fa fa-linkedin" style={{borderRadius: "50%",backgroundColor: "transparent",border: "1px solid white",color:"white",marginLeft:"5px"}}></i>
          <i className="fa fa-facebook" style={{borderRadius: "50%",backgroundColor: "transparent",border: "1px solid white",color:"white",marginLeft:"5px"}}></i>
          </div>
         
        </div>
        <div className="row copyright ">
           <div className="col-md-6 copycontent"><h6>&copy Copyright buildnox 2023 . All right reserved.</h6></div>
           <div className="col-md-6 createdbythemearc">
            <h6>Created By Themearc</h6>
           </div>
        </div>
    </footer>
    );
}