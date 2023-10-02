import React from "react";
import Slider from "react-slick";

export default function Section5() {
  var settings = {
    // dots: true,
    arrows:false,
    
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    
    
  };
    return(
        <section className="container-fluid page6 mt-5 p-5">
      <div className="row">
        <div className="col-md-4">
          <h6 className="text-danger">---TESTIMONIALS</h6>
         <h1 className="m-2">What They’re</h1>
         <h1 className="m-2">Talking About</h1>
         <h1 className="m-2">Comapany ?</h1>
        </div>
        <div className="col-md-8">
        <Slider {...settings} className="owlsection">
      <div>
      <div className="feedbackimg">
            <div className="item bg-light page6paragraph"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quaerat id qui adipisci quod labore, optio eligendi architecto. Animi iusto aliquid nihil eos necessitatibus earum error sint ab aspernatur consectetur.</p> </div>
              <img src={require("../images/author-1.jpg")} alt="" style={{zIndex: "111",width: "90px" ,height: "90px", borderRadius: "50%"}} />
           </div>
      </div>
      <div>
      <div  className="feedbackimg ms-2">
            <div className="item bg-light page6paragraph"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quaerat id qui adipisci quod labore, optio eligendi architecto. Animi iusto aliquid nihil eos necessitatibus earum error sint ab aspernatur consectetur.</p></div>
            <img src={require("../images/author-2.jpg")} alt="" style={{zIndex: "111",width: "90px" ,height: "90px", borderRadius: "50%"}} />
          </div>
      </div>
      <div>
      <div  className="feedbackimg ms-2">
            <div className="item bg-light page6paragraph"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quaerat id qui adipisci quod labore, optio eligendi architecto. Animi iusto aliquid nihil eos necessitatibus earum error sint ab aspernatur consectetur.</p></div>
            <img src={require("../images/author-1.jpg")} alt="" style={{zIndex: "111",width: "90px" ,height: "90px", borderRadius: "50%"}} />
          </div>
      </div>
      <div>
      <div  className="feedbackimg ms-2">
            <div className="item bg-light page6paragraph"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quaerat id qui adipisci quod labore, optio eligendi architecto. Animi iusto aliquid nihil eos necessitatibus earum error sint ab aspernatur consectetur.</p></div>
            <img src={require("../images/author-2.jpg")} alt="" style={{zIndex: "111",width: "90px" ,height: "90px", borderRadius: "50%"}} />
          </div>
      </div>
      
    </Slider>







          
        </div>
      </div>
    </section>
    );
}