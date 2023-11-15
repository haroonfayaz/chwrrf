import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { volunteers } from "../data/Constants";

const Volunteers = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <Box>
      <Container>
        <section
          className="team-section bg-grey bd-bottom circle shape padding"
          id="volunteers"
        >
          <div className="container">
            <div className="section-heading text-center mb-40">
              <h2>Meet Out Volunteers</h2>
              <span className="heading-border"></span>
              <p>
                Help today because tomorrow you may be the one who <br /> needs
                more helping!
              </p>
            </div>
            <div className="team-wrapper row">
              <div className="col-lg-8 sm-padding">
                <div className="team-wrap row">
                  {volunteers.map((vol, index) => (
                    <div
                      className="col-md-4"
                      style={{
                        padding: "5px",
                      }}
                      key={index}
                    >
                      <div className="team-details">
                        <img src={vol.img} alt="team" />
                        <div className="hover">
                          <h3>
                            {vol.name}
                            <span>{vol.qual}</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4 sm-padding">
                <div className="team-content">
                  <h2>Become a Volunteer?</h2>
                  <h3>
                    Join your hand with us for a better life and beautiful
                    future.
                  </h3>
                  <p>
                    The secret to happiness lies in helping others. Never
                    underestimate the difference YOU can make in the lives of
                    the poor, the abused and the helpless.
                  </p>
                  <ul className="check-list">
                    <li>
                      <i className="fa fa-check"></i>We are friendly to each
                      other.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>If you join with us,We will
                      give you free training.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Its an opportunity to help
                      poor children.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>No goal requirements.
                    </li>
                    <li>
                      <i className="fa fa-check"></i>Joining is totally free. We
                      don't need any money from you.
                    </li>
                  </ul>
                  <button onClick={handleNavigate} className="normal_button">
                    Join with us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Box>
  );
};

export default Volunteers;
