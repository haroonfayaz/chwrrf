import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEvents } from "../eventApi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CampaignsComponent = () => {
  const [events, setEvents] = useState([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const fetchEvents = async () => {
    try {
      const eventsData = await getAllEvents();
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="line tem" id="campaigns">
          <div className="section-heading text-center mb-40">
            <h2>Recent Campaigns</h2>
            <span className="heading-border"></span>
          </div>
        </div>
        <Carousel responsive={responsive} infinite={true}>
          {events?.map((camp, index) => (
            <div
              className={`card ${index === 0 ? " " : " d-md-block"}`}
              key={camp.id}
            >
              <img
                src={`https://admin.chwrrf.org/api/program/image/${encodeURIComponent(
                  camp.photoPath
                )}`}
                className="card-img-top"
                alt={camp.title}
              />

              <div className="card-body">
                <h5 className="card-title">{camp.title}</h5>
                <p className="card-text">{camp.description}</p>
                <Link to="/blog" className="read-more-link">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CampaignsComponent;
