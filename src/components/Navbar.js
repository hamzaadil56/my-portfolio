import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BoltIcon from "@mui/icons-material/Bolt";
import HandymanIcon from "@mui/icons-material/Handyman";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  const links = [
    { about: <PersonIcon /> },
    { projects: <EngineeringIcon /> },
    { skills: <BoltIcon /> },
    { services: <HandymanIcon /> },
    { contact: <ContactSupportIcon /> },
  ];
  function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
        height: "100%",
        padding: 4,
        backgroundColor: "#181717",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <a className="link" href="#hero">
        <div className="logo-container">
          <h4>Muhammad Hamza</h4>
          <img
            src="./images/profile-pic(1).png"
            width="45px"
            height="45px"
            alt=""
          />
        </div>
      </a>

      <List>
        {links.map((item, index) => (
          <a className="link" href={`#${Object.keys(item)[0]}`}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon className="list-item-icon">
                  {Object.values(item)[0]}
                </ListItemIcon>
                <ListItemText primary={capitalize(Object.keys(item)[0])} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="menu-container">
      <React.Fragment>
        <Button className="menu-btn" onClick={toggleDrawer(true)}>
          <MenuIcon
            className="drawer-icon"
            style={{ color: "white", fontSize: 50 }}
          />
        </Button>
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
