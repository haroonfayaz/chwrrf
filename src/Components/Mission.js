import React from "react";
import { Box} from "@mui/material";

const Mission = () => {
  return (
    <Box>
   
      <section className ="about-section bd-bottom shape circle padding" id="mission">
            <div className ="container">
                <div className ="section-heading text-center mb-40">
                    <h2>Mission and Vision</h2>
                    <span className ="heading-border"></span>
               </div>
                <div className ="row">
                   <div className ="col-md-4 xs-padding">
                        <div className ="profile-wrap">
                            <img className ="profile" 
                            src={process.env.PUBLIC_URL +"/images/profile-2.jpg"} 
                            alt="profile"/>
                            <h3>Dr. Bilal Ahmad Khan <span>Founder & Chairman of CHWRRF.</span></h3>
                            <p>BBA, MSW, PhD.</p>
                            <p>Social Audit Coordinator- PM POSHAN Scheme<br/>Fellow- Tribal Research Institute<br/>Doctoral Fellow- Indian Council of Social Science Research<br/>Research Assistant- Indian Council of Social Science Research<br/>L7 Trainer – Quess Corp Formerly IKYA Human Capital solutions Pvt. Ltd.</p>
                            <img src={process.env.PUBLIC_URL +"/images/sign.png"} alt="sign"/>
                        </div>
                    </div>
                    <div className ="col-md-8 xs-padding">
                        <div className ="about-wrap row">
                            <div className ="col-md-6 xs-padding">
                                <img src={process.env.PUBLIC_URL +"/images/history.jpg"} alt="about-thumb"/>
                                <h3>Our Mission</h3>
                                <p>Centre for Human Well-Being Research and Rehabilitation Foundation serves as a way to bring justice, balance and kindness to every society and community</p>
                                {/* <a href="#" className ="default-btn">Read More</a> */}
                            </div>
                            <div className ="col-md-6 xs-padding">
                                <img src={process.env.PUBLIC_URL +"/images/mission.jpg"} alt="about-thumb"/>
                                <h3>Our Vision</h3>
                                <p>Our Vision is working for the good of others at the expense of one's interest and to ensure that human beings are not deprived of their basic needs for survival.
                                </p>
                                {/* <a href="#" className ="default-btn">Read More</a> */}
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
