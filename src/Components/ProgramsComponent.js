import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useNavigate, Link } from "react-router-dom";

const ProgramsComponent = () => {
  const customNavText = ["<span>Prev</span>", "<span>Next</span>"];

  const navigate = useNavigate();
  const handleButtonblog = () => {
    navigate("/blog");
  };

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
          <div className="card" onClick={() => handleButtonblog()}>
            <img src={process.env.PUBLIC_URL +"/images/post-1.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog" className="read-more-link">
                Read more
              </Link>{" "}
            </div>
          </div>
          <div className="card d-none d-md-block">
          <img src={process.env.PUBLIC_URL +"/images/post-2.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog" className="read-more-link">
                Read more
              </Link>{" "}
            </div>
          </div>
          <div className="card d-none d-md-block">
          <img src={process.env.PUBLIC_URL +"/images/post-3.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog" className="read-more-link">
                Read more
              </Link>{" "}
            </div>
          </div>
          <div className="card">
          <img src={process.env.PUBLIC_URL +"/images/post-4.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 4</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog" className="read-more-link">
                Read more
              </Link>{" "}
            </div>
          </div>
          <div className="card d-none d-md-block">
          <img src={process.env.PUBLIC_URL +"/images/post-5.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 5</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog" className="read-more-link">
                Read more
              </Link>{" "}
            </div>
          </div>
          <div className="card d-none d-md-block">
          <img src={process.env.PUBLIC_URL +"/images/post-6.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 6</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/blog" className="read-more-link">
                Read more
              </Link>{" "}
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default ProgramsComponent;
