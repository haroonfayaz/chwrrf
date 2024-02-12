import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { future_campaigns } from "../data/Constants";
import { getAllFuturePlans } from "../api";

const ProgramsComponent = () => {
  const customNavText = ["<span>Prev</span>", "<span>Next</span>"];
  const [plans, setPlan] = useState([]);


  const fetchPlans = async () => {
    try {
      const responseData = await getAllFuturePlans();
      console.log(responseData)
      setPlan(responseData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    fetchPlans();
  }, []);
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
            <h2>Future Programs</h2>
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
          {plans.map((camp, index) => (
            <div
              className={`card ${index === 0 ? " " : " d-md-block"}`}
              key={camp.id}
            >
                 <img
                src={`http://13.40.5.17:8080/api/program/image/${encodeURIComponent(
                  camp.photoPath
                )}`}
                className="card-img-top"
                alt={camp.title}
              />
              <img src={camp.img} className="card-img-top" alt={camp.title} />
              <div className="card-body">
                <h5 className="card-title">{camp.title}</h5>
                <p className="card-text">{camp.description}</p>
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

export default ProgramsComponent;
