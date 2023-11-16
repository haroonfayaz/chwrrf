import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../main.css";
import { Main_carousel, news_data, promo_Options } from "../data/Constants";

const Main = () => {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Box sx={{ border: "none", pt: 2, borderRadius: 3 }}>
            <div id="carouselExampleCaptions" className="carousel">
              <div className="carousel-inner">
                {Main_carousel.map((carousel, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={carousel.id}
                  >
                    <img
                      src={carousel.img}
                      className="d-block w-100"
                      alt={carousel.title}
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="animate__animated animate__fadeInLeft">
                        {carousel.tagline}
                      </h5>
                      <h3 className="animate__animated animate__fadeInRight">
                        {carousel.title}
                      </h3>
                      <p className="animate__animated animate__fadeInBottom">
                        {carousel.desc}
                      </p>
                      <a
                        href="#donate"
                        className="button animate__animated animate__fadeInLeft"
                      >
                        Donate
                      </a>
                    </div>
                  </div>
                ))}
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
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "#f8b864",
              borderRadius: 3,
              height: "600px",
              m: { xs: 4 },
            }}
          >
            <Typography
              sx={{
                p: 2,
                fontSize: { xs: "20px",md:"22px" },
                display: { xs: "block", md: "flex" },
                fontWeight: 500,
                color: "white",
                textDecoration: "underline",
              }}
            >
              News Link & Notifications
            </Typography>
            <div className="scrolling-container">
              <div className="scrolling-content">
                {news_data.map((data) => (
                  <div>
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
                      {data.news_title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
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
                      {data.link_title}
                    </Typography>
                    <Typography
                      sx={{
                        display: { xs: "block", md: "flex" },
                        fontWeight: 300,
                        fontSize: 13,
                        color: "white",
                        "&::after": {
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {data.date}
                    </Typography>
                  </div>
                ))}
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
          {promo_Options.map((promo) => (
            <Grid item xs={12} md={4}>
              <div className="promo-content" key={promo.id}>
                <img src={promo.img} alt="prmo icon" />
                <h3>{promo.title}</h3>
                <p>{promo.desc}</p>
              </div>
            </Grid>
          ))}
        </Container>
      </Grid>
    </Box>
  );
};

export default Main;
