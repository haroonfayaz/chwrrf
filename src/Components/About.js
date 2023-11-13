import { Box } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <section className="causes-section bg-grey bd-bottom padding" id="about">
        <div className="container">
          <div className="section-heading">
            <h2>About Us</h2>
            <span className="heading-border"></span>{" "}
          </div>
          <div className="causes-wrap row">
            <div className="col-md-12 xs-padding">
              <div className="causes-content">
                <div className="causes-details">
                  <p>
                    The “Centre for Human Well-being Research and Rehabilitation
                    Foundation” is a Non-Profit Organization working since last
                    5 years dedicated to help the Poor and needy people in terms
                    of Skill Development & livelihood, Education, Health,
                    sports, Water, sanitation & Hygiene (WASH), Environment,
                    Disaster Risk reduction, Response management (DRRM), Gender
                    & inclusion, child protection, Early childhood care &
                    development (ECCD) women empowerment and other financial
                    assistance across Jammu & Kashmir. The organization is
                    Non-Governmental and Non-Religious organization. The
                    Foundation has a continuous goal to focus on the challenges
                    which the needy people especially women face and to provide
                    our support to them. The Foundation provides financial aid
                    to the needy (could be a student, single mother/father,
                    sick, poor or anyone else) who has a real and genuine need.
                    Centre for Human Well-being Research and Rehabilitation
                    Foundation is a Charity Foundation deeply involved in
                    helping poor and needy people across Jammu and Kashmir to
                    make a positive difference in their lives. Centre for Human
                    Well-being Research & Rehabilitation Foundation has been
                    started with this sole purpose as a charity foundation and
                    is striving hard to make a positive difference in peoples’
                    lives with the slogan
                    <br /> <b>“A step towards Change”.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Box>
  );
};

export default About;
