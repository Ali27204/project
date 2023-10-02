export default function Section7(){
    return(
        <section className="container-fluid page8">
      <div className="row" >
        <div className="col-md-4" style={{borderTop:"1px solid black" , paddingLeft: "20px"}}></div>
        <div className="col-md-4">
          <h6 className="text-danger" style={{marginTop: "-10px", marginLeft: "80px"}}>WE WORKED WITH ROYAL CLIENTS</h6>
        </div>
        <div className="col-md-4 px-2" style={{borderTop:"1px solid black"}}></div>
      </div>
      <div className="row page8row2 mt-5">
        <div className="col-md-2">
          <img src={require("../images/brand-logo-1.png")} alt=""/>
        </div>
        <div className="col-md-2 ps-5">
          <img src={require("../images/brand-logo-2.png")} alt=""/>
        </div>
        <div className="col-md-2 ps-5">
          <img src={require("../images/brand-logo-3.png")} alt=""/>
        </div>
        <div className="col-md-2 ps-5">
          <img src={require("../images/brand-logo-4.png")} alt=""/>
        </div>
        <div className="col-md-2 ps-5">
          <img src={require("../images/brand-logo-5.png")} alt=""/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <p><iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.939537536223!2d75.77054521876588!3d26.856074438662286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db56fbf8e3d0d%3A0xd76b92efd4a1b70!2sKistechnosoftware%20Pvt.%20Ltd.%20Software%2C%20Website%2C%20Mobile%20Application%20Development%20Company%20In%20Jaipur%20(India)!5e0!3m2!1sen!2sin!4v1691516677467!5m2!1sen!2sin" width="100%" height="300" style={{border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          <div className="address">
            <h3>Office Address</h3>
            <p>PO Box 5849 Collins Street West</p>
            <p>Victoria 9005 Australia</p>
            <p>Phone : +1800-456-7890</p>
          </div>
        </div>
      </div>

    </section>
    );
}