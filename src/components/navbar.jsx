import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "green",
              marginRight: "8px",
            }}
          />
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, marginRight: "auto" }}
          >
            Salman
          </Typography>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            Home
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            About
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            Skills
          </Button>
          <Button color="inherit" sx={{ display: { xs: "none", sm: "block" } }}>
            Projects
          </Button>
          <Button
            color="inherit"
            sx={{
              display: { xs: "none", md: "none" },
            }}
          >
            Contact
          </Button>
          <IconButton
            color="inherit"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ display: { xs: "block", sm: "none", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
            <MenuItem onClick={handleClose}>Skills</MenuItem>
            <MenuItem onClick={handleClose}>Projects</MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};
