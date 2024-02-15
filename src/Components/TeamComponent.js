import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { team_members } from "../data/Constants";

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
          {team_members.map((member, index) => (
            <div className="testimonial-item" key={member.id}>
              <div className="testi-footer" key={index}>
                <img src={member.img} alt="profile" />
                <h4>
                  {member.name}
                  <span>{member.designation}</span>
                  <span>{member.title}</span>
                </h4>
              </div>
              <p style={{ marginTop: "15px" }}>
                {member.qual}
                <br />
                <br />
              </p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TeamComponent;
