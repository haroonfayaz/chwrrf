import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { future_campaigns } from "../data/Constants";

const CampaignsComponent = () => {
  const customNavText = ["<span>Prev</span>", "<span>Next</span>"];


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
        <div className="line tem" id="Programs">
          <div className="section-heading text-center mb-40">
            <h2>Recent Campaigns</h2>
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
          autoplayHoverPause={true}
          navContainerClass="owl-nav1"
          navText={customNavText}
          responsive={responsiveSettings}
        >
          {future_campaigns.map((camp, index) => (
            <div
              className={`card ${index === 0 ? " " : "d-none d-md-block"}`}
              key={camp.id}
            >
              <img src={camp.img} className="card-img-top" alt={camp.title} />
              <div className="card-body">
                <h5 className="card-title">{camp.title}</h5>
                <p className="card-text">{camp.desc}</p>
                <Link to="/blog" className="read-more-link">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CampaignsComponent;
