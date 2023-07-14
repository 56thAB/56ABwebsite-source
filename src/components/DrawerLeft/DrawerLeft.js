import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";

import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";
import styles from "./DrawerLeft.module.css"
import GeneratedRoutes from "../../routes/GenerateRoutes/GeneratedRoutes";




const drawerWidth = 200; // Adjusted width

export default function DrawerLeft({ children }) {
  const [open, setOpen] = useState(true);

  const handleGuidesClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000000", // Set the background color to black
            color: "white", // Set the text color to white
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ marginLeft: "auto", marginRight: "auto" }}>
          <img src={require("./img/log6.png")} className={styles.logo}/>
        </Toolbar>
        <Divider sx={{ backgroundColor: "#7b7b7bff" }} /> {/* Set the divider color */}
        <List>
          <ListItemButton LinkComponent={Link} to="/">
            <ListItemIcon sx={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton LinkComponent={Link} to="/chat">
            <ListItemIcon sx={{ color: "white" }}>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>

          {/* <ListItemButton LinkComponent={Link} to="/aboutus">
            <ListItemIcon sx={{ color: "white" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton> */}

<Divider sx={{ backgroundColor: "#7b7b7bff" }} /> {/* Set the divider color */}
          <ListItemButton
            onClick={handleGuidesClick}
            LinkComponent={Link}
            to="/guides"
          >
            <ListItemIcon sx={{ color: "white" }}>
              <FolderCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Guides" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {GeneratedRoutes.map(({ name, path}) => (
                <ListItemButton LinkComponent={Link}
                  sx={{ pl: 4 }}
                  key={name}
                  to={path}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
      <div style={{ margin: "auto" }}>{children}</div>
    </Box>
  );
}
