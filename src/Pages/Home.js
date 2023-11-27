import { Box } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import Main from "../Components/Main";
import About from "../Components/About";
import Mission from "../Components/Mission";
import Volunteers from "../Components/Volunteers";
import CampaignsComponent from "../Components/CampaignsComponent";
import ProgramsComponent from "../Components/ProgramsComponent";
import TeamComponent from "../Components/TeamComponent";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <Box >
      <Navbar/>
      <Main />
      <About />
      <Mission/>
      <ProgramsComponent/>
      <TeamComponent/>
      <Volunteers/>
      <CampaignsComponent/>
      <Footer />
    </Box>
  );
};

export default Home;
