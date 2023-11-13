import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation, Link } from "react-router-dom";

const menuItems = [
  {
    route: "About",
    target: "about",
  },
  {
    route: "Missions",
    target: "mission",
  },
  {
    route: "Team",
    target: "team",
  },
  {
    route: "Campaigns",
    target: "campaigns",
  },
  {
    route: "Volunteers",
    target: "volunteers",
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    if (location.pathname === "/blog") {
      navigate("/");
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <Avatar
              alt="CHWRRF Logo"
              src="images/logo-2.png"
              sx={{
                width: 50,
                height: 50,
                mr: 1,
                display: { xs: "none", md: "flex" },
              }}
              variant="rounded"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              CHWRRF
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                PaperProps={{
                  style: {
                    width: "200px",
                    marginLeft: "0",
                  },
                }}
              >
                <Typography
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 500,
                    fontSize: 20,
                  }}
                >
                  <Link to="/">Home</Link>
                </Typography>
                {menuItems.map((item) => (
                  <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                    <Typography>
                      <ScrollLink
                        activeClass="active"
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={0}
                      >
                        {item.route}
                      </ScrollLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar
              alt="CHWRRF Logo"
              src="images/logo-2.png"
              sx={{
                width: 50,
                height: 50,
                mr: 1,
                display: { xs: "flex", md: "none" },
              }}
              variant="rounded"
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              CHWRRF
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 30,
                alignItems: "center",
              }}
            >
             <Link to ="/"
             style={{
                  textDecoration: "none",
                  color:"black",
                }}>

              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 20,

                }}
              >
                Home
              </Typography>
             </Link>
              {menuItems.map((item) => (
                <MenuItem key={item.route} onClick={handleCloseNavMenu}>
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                      fontSize: 20,
                    }}
                  >
                    <ScrollLink
                      activeClass="active"
                      to={item.target}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.route}
                    </ScrollLink>
                  </Typography>
                </MenuItem>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 900,
                    height: "40px",
                    fontSize: "16px",
                    backgroundColor: "#f8b864",
                  }}
                >
                  Donate
                </Button>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
