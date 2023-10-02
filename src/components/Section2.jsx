import React from "react";
import Slider from "react-slick";

// import $ from 'jquery';
// import "jquery-ui-dist/jquery-ui";
// import  { useEffect } from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
export default function Section2() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
   





    <section className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <h6 className="text-danger mt-5 what-we-do">---WHAT WE DO</h6>
          <h1 className="mt-2 ourservice">Our Services That We Provide</h1>
          <p className="px-5 ps-2 mt-3 ifyouneed">
            If you need to repair or replace your Plumbing system, call today
            and talk to one of our Plumbing specialists. They’ll answer all your
            questions and arrange an appointment at your convenience.
          </p>
        </div>
       
      </div>

      <Slider {...settings} className="owlsection" >
      <div className="owl-carousel">
      <div className="card ">
            <div className="card-body cardsection cardbodyanime">
              <i
                style={{
                  fontSize: "90px",
                  color: "red",
                  position: "relative",
                  zIndex: "2",
                }}
                className="fa fa-building ms-4"
              ></i>
              <h3 className="buildingnew ms-4">Building</h3>
              <h3 className="construction mt-3 ms-4">construction</h3>
              <img
                className="mt-4  construction-img"
                src={require("../images/1.jpg")}
                style={{ objectFit: "cover", height: "200px" }}
                alt=""
              />
            </div>
          </div>
      </div>
      <div>
      <div className="card ms-2">
            <div className="card-body cardsection cardbodyanime">
              <i
                style={{
                  fontSize: "90px",
                  color: "red",
                  position: "relative",
                  zIndex: "2",
                }}
                className="fa fa-building ms-4"
              ></i>
              <h3 className="buildingnew ms-4">Building</h3>
              <h3 className="construction mt-3 ms-4">construction</h3>
              <img
                className="mt-4  construction-img"
                src={require("../images/2.jpg")}
                style={{ objectFit: "cover", height: "200px" }}
                alt=""
              />
            </div>
          </div>
      </div>
      <div>
      <div className="card ms-2">
            <div className="card-body cardsection cardbodyanime">
              <i
                style={{
                  fontSize: "90px",
                  color: "red",
                  position: "relative",
                  zIndex: "2",
                }}
                className="fa fa-building ms-4"
              ></i>
              <h3 className="buildingnew ms-4">Building</h3>
              <h3 className="construction mt-3 ms-4">construction</h3>
              <img
                className="mt-4  construction-img"
                src={require("../images/3.jpg")}
                style={{ objectFit: "cover", height: "200px" }}
                alt=""
              />
            </div>
          </div>
      </div>
      <div>
      <div className="card ms-2">
            <div className="card-body cardsection cardbodyanime">
              <i
                style={{
                  fontSize: "90px",
                  color: "red",
                  position: "relative",
                  zIndex: "2",
                }}
                className="fa fa-building ms-4"
              ></i>
              <h3 className="buildingnew ms-4">Building</h3>
              <h3 className="construction mt-3 ms-4">construction</h3>
              <img
                className="mt-4  construction-img"
                src={require("../images/4.jpg")}
                style={{ objectFit: "cover", height: "200px" }}
                alt=""
              />
            </div>
          </div>
      </div>
      
    </Slider>
    </section>
    </>
  );
}
