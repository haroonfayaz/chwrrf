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
// import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const menuItems = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "About",
    path: "/about",
  },
  {
    route: "Missions",
    path: "/mission",
  },
  {
    route: "Team",
    path: "/team",
  },
  {
    route: "Campaigns",
    path: "/campaigns",
  },
  {
    route: "Volunteers",
    path: "/volunteers",
  },
];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
              CHWRFF
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
                {menuItems.map((item) => (
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography>
                      <Link
                        style={{ textDecoration: "none", color: "black",fontWeight:700  }}
                        to={item.path}
                      >
                        {item.route}
                      </Link>
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } ,ml:30}}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={handleCloseNavMenu}
                  sx={{
                    textAlign: "right",
                    color: "green",
                    display: "block",
                    fontWeight: 700,
                    fontSize: "14px",
                    alignItems:"center"
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "18px",
                    }}
                    to={item.path}
                  >
                    {item.route}
                  </Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ fontWeight: 900, height: "40px", fontSize: "16px" }}
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
