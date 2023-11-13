import React from "react";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Volunteers = () => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate("/")
  }
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
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-1.jpg" alt="team" />
                      <div className="hover">
                        <h3>
                          Joseph Mathew{" "}
                          <span>
                            Zonal Coordinator- Family Strengthening Program SOS
                            Children's Villages of India{" "}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-2.jpg" alt="team" />
                      <div className="hover">
                        <h3>
                          Dr. Aadil Bashir Wani
                          <span>
                            Sr.Assistant Professor Social work University of
                            Kashmir Child Rights Expert{" "}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-3.png" alt="team" />
                      <div className="hover">
                        <h3>
                          Dr. Faroze Ahmad Khan
                          <span>
                            Gastroenterologist Health Deptt. J&K Health Expert
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-4.jpg" alt="team" />
                      <div className="hover">
                        <h3>
                          Alfred Gnanaolivu{" "}
                          <span>
                            Consultant at Freelance Consultancy & Training Eco
                            Foundation for Social Alternative EFSA) Bengaluru,
                            Karnataka, India
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-5.jpg" alt="team" />
                      <div className="hover">
                        <h3>
                          Ms. Affarmand Rashid
                          <span>
                            Assistant Director incharge of SOS children’s
                            village of Srinagar. Experienced Developmental
                            Practitioner on Child Rights, Women Empowerment and
                            Youth Development.
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-6.jpg" alt="team" />
                      <div className="hover">
                        <h3>
                          Mr. Nasir Rahim{" "}
                          <span>
                            Senior Child Rights Practitioner and Youth
                            Development Expert. SOS Children’s Village of India.
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                  </div>
                  <div
                    className="col-md-4"
                    style={{
                      padding: "5px",
                    }}
                  >
                    {" "}
                    <div className="team-details">
                      <img src="images/team-7.jpg" alt="team" />
                      <div className="hover">
                        <h3>
                          Dr. Basharat Ahmad Bhat{" "}
                          <span>PhD Life Sciences University of Kashmir</span>
                        </h3>
                      </div>
                    </div>
                  </div>
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
