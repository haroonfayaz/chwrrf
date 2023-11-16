import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../main.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MobileScreenShareOutlined from "@mui/icons-material/MobileScreenShareOutlined";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 3,
        p: 4,
        backgroundImage: "url('/images/map.png')",
        backgroundColor: "#222",
        backgroundPosition: "right 90px center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        mb: 3,
        pb: 3,
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: "none", p: 2 }}>
            <Avatar
              alt="CHWRRF Logo"
              src={process.env.PUBLIC_URL + "/images/logo-2.png"}
              sx={{
                width: 70,
                height: 70,
                mr: 1,
                display: { xs: "block", md: "flex" },
              }}
              variant="rounded"
            />
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
              }}
            >
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the poor
            </Typography>
            <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
              <NavLink to="#" target="_blank" className="social-icon">
                <FacebookIcon fontSize="large" />
              </NavLink>

              <NavLink to="#" target="_blank" className="social-icon">
                <TwitterIcon fontSize="large" />
              </NavLink>

              <NavLink to="#" target="_blank" className="social-icon">
                <InstagramIcon fontSize="large" />
              </NavLink>

              <NavLink to="#" target="_blank" className="social-icon">
                <WhatsAppIcon fontSize="large" />
              </NavLink>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: "none", p: 2 }}>
            <Typography
              variant="h5"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#ddd",
                textDecoration: "underline",
              }}
            >
              Registration and Bank Info
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Reg No.026896
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Account Name: Centre for Human Well-Being Research and
              Rehabilitation Foundation.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Account number: 0007010100003823
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              IFSC Code: JAKA0NASEEM
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              {" "}
              Branch: U.C. Hazratbal, Srinagar
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Pan Number: AADTC2301H
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#999",
                "&::after": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              NGO Darpan Unique Id: JK/2023/0337867
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: "none", p: 2 }}>
            <Typography
              variant="h5"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "#ddd",
                textDecoration: "underline",
              }}
            >
              CHWRRF Location
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                alignItems: "center",

                fontWeight: 500,
                color: "#999",
              }}
            >
              <MailOutlineIcon
                fontSize="large"
                sx={{ pr: 2, fontSize: "50px" }}
              />{" "}
              chwrrf@rediffmail.com
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                alignItems: "center",
                fontWeight: 500,
                color: "#999",
              }}
            >
              <MobileScreenShareOutlined sx={{ pr: 2, fontSize: "50px" }} />
              +(91) 70069 60120
            </Typography>
            <Typography
              variant="body1"
              sx={{
                pt: 2,
                display: { xs: "block", md: "flex" },
                alignItems: "center",

                fontWeight: 500,
                color: "#999",
              }}
            >
              <LocationOnOutlinedIcon
                fontSize="large"
                sx={{ pr: 2, fontSize: "50px" }}
              />
              Habak Naseem Bagh, Hazratbal, Srinagar Jammu and Kashmir, India
              Pin Code:190006
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
