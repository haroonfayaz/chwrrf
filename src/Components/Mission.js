import React from "react";
import { Box} from "@mui/material";

const Mission = () => {
  return (
    <Box>
   
      <section class="about-section bd-bottom shape circle padding" id="mission">
            <div class="container">
                <div class="section-heading text-center mb-40">
                    <h2>Mission and Vision</h2>
                    <span class="heading-border"></span>
               </div>
                <div class="row">
                   <div class="col-md-4 xs-padding">
                        <div class="profile-wrap">
                            <img class="profile" src="images/profile-2.jpg" alt="profile"/>
                            <h3>Dr. Bilal Ahmad Khan <span>Founder & Chairman of CHWRRF.</span></h3>
                            <p>BBA, MSW, PhD.</p>
                            <p>Social Audit Coordinator- PM POSHAN Scheme<br/>Fellow- Tribal Research Institute<br/>Doctoral Fellow- Indian Council of Social Science Research<br/>Research Assistant- Indian Council of Social Science Research<br/>L7 Trainer – Quess Corp Formerly IKYA Human Capital solutions Pvt. Ltd.</p>
                            <img src="images/sign.png" alt="sign"/>
                        </div>
                    </div>
                    <div class="col-md-8 xs-padding">
                        <div class="about-wrap row">
                            <div class="col-md-6 xs-padding">
                                <img src="images/history.jpg" alt="about-thumb"/>
                                <h3>Our Mission</h3>
                                <p>Centre for Human Well-Being Research and Rehabilitation Foundation serves as a way to bring justice, balance and kindness to every society and community</p>
                                {/* <a href="#" class="default-btn">Read More</a> */}
                            </div>
                            <div class="col-md-6 xs-padding">
                                <img src="images/mission.jpg" alt="about-thumb"/>
                                <h3>Our Vision</h3>
                                <p>Our Vision is working for the good of others at the expense of one's interest and to ensure that human beings are not deprived of their basic needs for survival.
                                </p>
                                {/* <a href="#" class="default-btn">Read More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Box>
  );
};

export default Mission;
