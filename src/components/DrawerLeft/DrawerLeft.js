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
import { CardMedia } from "@mui/material";
import { setContent } from "../../actions";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";

import Guides from "../Guides";
import AboutUs from "../AboutUs";

import db from "../../db/guidesDB.json";

const drawerWidth = 240;

export default function DrawerLeft({ children }) {
  const [open, setOpen] = useState(true);

  const handleGuidesClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={require("./log6.png")} width="200px" margin="10px" />
        </Toolbar>
        <Divider />
        <List>
          <ListItemButton LinkComponent={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton LinkComponent={Link} to="/chat">
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>

          <ListItemButton LinkComponent={Link} to="/aboutus">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItemButton>

          <ListItemButton onClick={handleGuidesClick} LinkComponent={Link} to="/guides">
            <ListItemIcon>
              <FolderCopyIcon />
            </ListItemIcon>
            <ListItemText primary="Guides" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {db.map(({ name, link }) => (
                <ListItemButton sx={{ pl: 4 }} key={name} LinkComponent={Link} to={`/guides/${name.toLowerCase().replace(/\s/g, "")}`}>
                  <ArticleIcon />
                  <ListItemText primary={name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
        <Divider />
      </Drawer>
      <div  style={{margin:"auto"}}> {children}</div>
     
    </Box>
  );
}
