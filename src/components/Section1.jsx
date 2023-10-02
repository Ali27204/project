export default function Section1() {
  return (
    <section className="container-fluid bg-dark articals">
      <div className="row">
        <div className="col-md-4 ">
          <img
            className="img5 ps-5"
            src={require("../images/img2.jpg")}
            height="700px"
            width="80%"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <h6 className="text-danger welcome-to-company">
            --- WELCOME TO COMPANY
          </h6>
          <h1 className="text-light mt-2 con-company">
            Construction Company With Strategy In Business Growth
          </h1>
          <h4 className="text-light mt-5 articalparagraph">
            We have been the trusted name in heating, air conditioning and
            plumbing businesses. Throughout the years, our number one goal
          </h4>
          <h5 className="text-light mt-5 articalparagraph2">
            For over 80 years, We have been the trusted name in heating, air
            conditioning and plumbing businesses. Throughout the years, our
            number one goal has been to accurately . For over 80 years, We have
            been the trusted name in heating, air conditioning and plumbing
            businesses. Throughout the years, our number one goal has been to
            accurately .For over 80 years, We have been the trusted name in
            heating.
          </h5>

          <div className="d-flex mt-5 authotdetail">
            <img className="authorimg" src={require("../images/author-1.jpg")} alt="" />
            <div>
              <h5 className="text-light robert">Robert Joe Kerry</h5>
              <h6 className="text-light founder">Founder</h6>
            </div>
            <img
              className="signature"
              src={require("../images/signature.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
