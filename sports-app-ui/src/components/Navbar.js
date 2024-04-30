import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SignInIcon from "@mui/icons-material/Login";
import SignOutIcon from "@mui/icons-material/Logout";
import RegisterIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon />,
      },
      {
        text: "Register",
        icon: <RegisterIcon />,
      },
      {
        text: "SignIn",
        icon: <SignInIcon />,
      },
      {
        text: "Search",
        icon: <SearchIcon />,
      },
    ];
    return (
      <nav>
        <div className="nav-logo-container">
         <div className="yellow"><h1>Sports League</h1></div> 
        </div>
        <div className="navbar-links-container">
          <a href="/">Home</a>
          <a href="/register">Register</a>
          <a href="/login">SignIn</a>
         <a href="/search"> <button className="primary-button">Search</button></a>
        </div>
      
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    );
}

export default Navbar;
