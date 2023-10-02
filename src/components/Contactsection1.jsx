export default function Contactsection1(){
    return(
        <>
          <section className="container-fluid contactformsection">
        <div className="row ps-5 px-5">
            <div className="col-md-7">
                <h6 className="text-danger">--- GET IN TOUCH</h6>
                <h2 className="welovetohear">We Love to Hear From You</h2>
                <form action="">
                    <input className="yourname" type="text" name="" id="" placeholder="Your Name"/>
                    <input className="yourname" type="email" name="" id="" placeholder="Your Email"/>
                    <input className="yourname" type="text" name="" id="" placeholder="Subject"/>
                    <input className="messagefill" type="text" name="" id="" placeholder="Massage"/>
                    <button className=" mt-3 submitnow">Submit Now</button>
                </form>
            </div>
            <div className="col-md-5">
                <h2 className="ouraddress">Our Address</h2>
                <p className="Completely">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service.</p>
                <div className="d-flex addressdiv mt-5">
                    <i className="fa fa-map-marker contact-map-location" aria-hidden="true"></i>
                    <div>
                        <h3 className="addresstext" style={{marginRight:"340px"}}>Address :</h3>
                        <h5 className="tailstoi">54B, Tailstoi Town 5238 MT, La city, IA 5224</h5></div>
                </div>
                <div className="d-flex addressdiv mt-5">
                    <i className="fa fa-phone contact-map-location" aria-hidden="true"></i>
                    <div>
                        <h3 className="addresstext" style={{marginRight:"350px"}}>Phone :</h3>
                        <h5 className="tailstoi">1800-456-7890</h5>
                    </div>
                </div>
                <div className="d-flex addressdiv mt-5">
                    <i className="fa fa-envelope contact-map-location" aria-hidden="true"></i>
                    <div>
                        <h3 className="addresstext" style={{marginRight:"350px"}}>Email :</h3>
                        <h5 className="tailstoi">info@example.com</h5></div>
                </div>
                
            </div>
        </div>
    </section>
        </>
    )
}