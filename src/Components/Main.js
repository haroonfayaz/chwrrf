import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../main.css";

const Main = () => {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Box sx={{ border: "none", pt: 2,borderRadius:3 }}>
            <div
              id="carouselExampleCaptions"
              className="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/slider-1.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="animate__animated animate__fadeInLeft">
                      Join Us Today
                    </h5>
                    <h1 className="animate__animated animate__fadeInRight">
                      Better Life for People
                    </h1>
                    <p className="animate__animated animate__fadeInBottom">
                      Help today because tomorrow you may be the one who needs
                      helping! <br />
                      Forget what you can get and see what you can give.
                    </p>
                    <a
                      href="#donate"
                      className="button animate__animated animate__fadeInLeft"
                    >
                      Donate
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="images/slider-2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="animate__animated animate__fadeInRight">
                      Together we <br />
                      can make a Difference
                    </h1>
                    <p className="animate__animated animate__fadeInBottom">
                      Help today because tomorrow you may be the one who needs
                      helping! <br />
                      Forget what you can get and see what you can give.
                    </p>
                    <a
                      href="#donate"
                      className="button animate__animated animate__fadeInLeft"
                    >
                      Donate
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="images/slider-3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="animate__animated animate__fadeInRight">
                      Give a little. Change a lot.
                    </h1>
                    <p className="animate__animated animate__fadeInBottom">
                      Help today because tomorrow you may be the one who needs
                      helping! Forget what you can get and see what you can
                      give.
                    </p>
                    <a
                      href="#donate"
                      className="button animate__animated animate__fadeInLeft"
                    >
                      Donate
                    </a>
                  </div>
                </div>
                
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} >
          <Box
            sx={{
              p: 2,
              backgroundColor: "#f8b864",
              borderRadius: 3,
              height: "600px",
              m:{xs:4}
              
            }}
          >
            <Typography
              variant="h4"
              sx={{
                pt: 2,
                fontSize: { xs: "28px" },
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "white",
                textDecoration: "underline",
              }}
            >
              News Link and Notifications
            </Typography>
            <div className="scrolling-container">
              <div className="scrolling-content">
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    fontSize: { xs: "18px" },

                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title 22
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    pt: 2,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link Title
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pt: 2,
                    pl: 1,
                    display: { xs: "block", md: "flex" },
                    fontWeight: 500,
                    color: "white",
                    "&::after": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  News Link
                </Typography>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Container
          sx={{
            display: { xs: "block", md: "flex" },
            backgroundColor: "white",
            position: "relative",
            top: "-80px",
          }}
        >
          <Grid item xs={12} md={4}>
            <div className="promo-content">
              <img src="images/icon-1.png" alt="prmo icon" />
              <h3>Make Donation</h3>
              <p>
                Your donation will make a difference to so many people in the
                community and help create a brighter, more prosperous future for
                everyone.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="promo-content">
              <img src="images/icon-2.png" alt="prmo icon" />
              <h3>Fundraising</h3>
              <p>
                It takes a lot of dedication, hard work and initiative to make
                your fundraising campaign a success. That's why we need your
                help in fundraising for our charity.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="promo-content">
              <img src="images/icon-3.png" alt="prmo icon" />
              <h3>Become A Volunteer</h3>
              <p>
                Volunteering with our charity is an incredibly rewarding
                experience. You can witness first-hand the difference that can
                be made by volunteering.
              </p>
            </div>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default Main;
