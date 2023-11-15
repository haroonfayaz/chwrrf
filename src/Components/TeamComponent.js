import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const TeamComponent = () => {
  const responsiveSettings = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };
 
  return (
    <div>
      <div className="container-fluid">
      <div className="line tem" id="team">
              <div className="section-heading text-center mb-40">
                <h2>Our Team</h2>
                <span className="heading-border"></span>
              </div>
            </div>
        <OwlCarousel
          items={3}
          className="owl-theme"
          loop
          nav
          margin={8}
          autoplay={true}
          navContainerClass="owl-nav"
          responsive={responsiveSettings}


        >
          <div className="testimonial-item">
            <div className="testi-footer">
              <img src={process.env.PUBLIC_URL +"/images/team-01.jpg"} alt="profile" />
              <h4>
                Dr. Shabir Ahmad Najar <span>Vice-Chairman</span>
                <span>Specialization-Unorganized Sector</span>
              </h4>
            </div>
            <p style={{ marginTop: "15px" }}>
              B.A, B.Ed., M.A, PhD.UGC- NET,SET, JRF
              <br />
              <br />
            </p>
          </div>
          <div className="testimonial-item">
            <div className="testi-footer">
            <img src={process.env.PUBLIC_URL +"/images/team-02.jpg"} alt="profile" />
              <h4>
                Mr. Zahid Ahmad Lone <span>Coordinator</span>
                <span>Specialization-Disability studies.</span>
              </h4>
            </div>
            <p style={{ marginTop: "15px" }}>
              MSW, PhD (Pursuing)UGC- NET
              <br />
              <br />
            </p>
          </div>
          <div className="testimonial-item">
            <div className="testi-footer">
            <img src={process.env.PUBLIC_URL +"/images/team-03.jpg"} alt="profile" />
              <h4>
                Ms. Faryalla Farooq <span>Spokesperson</span>
                <span>Specialization- Working With Children, Youth</span>
              </h4>
            </div>
            <p style={{ marginTop: "15px" }}>
              B.A, MSW
              <br />
              <br />
            </p>
          </div>
          <div className="testimonial-item">
            <div className="testi-footer">
            <img src={process.env.PUBLIC_URL +"/images/team-03.jpg"} alt="profile" />
              <h4>
                Ms. Seerat Jan <span>Organizer</span>
                <span>Specialization- Working With Women, Elderly</span>
              </h4>
            </div>
            <p style={{ marginTop: "15px" }}>
              B.A, MSW
              <br />
              <br />
            </p>
          </div>
          <div className="testimonial-item">
            <div className="testi-footer">
            <img src={process.env.PUBLIC_URL +"/images/team-05.jpg"} alt="profile" />
              <h4>
                Mr. Anzar Ul Aijaz <span>Member</span>
                <span>
                  Specialization-Counselling Skills in Drug De-Addiction
                </span>
              </h4>
            </div>
            <p style={{ marginTop: "15px" }}>
              MSW (Pursuing) Drug De-Addiction(6 months certificate course)-
              completed{" "}
            </p>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TeamComponent;
