import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ReactComponent as DiscordIcon } from "./img/discord.svg";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GradingIcon from "@mui/icons-material/Grading";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { setBreadcrumb } from "../../actions";

import Breadcrumb from "../Breadcrumb";

export default function Header({ breadcrumbs }) {
  const drawerWidth = 200;

  const handleDiscordClick = () => {
    window.open("https://discord.gg/WMZCMyz", "_blank");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.header}>
        <AppBar
          sx={{
            backgroundColor: "#5e1313",
            borderBottom: "1px solid black",
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" component="div" >
                56th Assault Battalion {">"}
              </Typography> 
              <Typography variant="h6" component="div"sx={{ marginLeft: "15px" }}>
                <Breadcrumb />
              </Typography>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Tooltip
                title="Our discord server. Feel free to join and look around!"
                placement="bottom"
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ marginRight: 2 }}
                  onClick={handleDiscordClick}
                >
                  <DiscordIcon className={styles.icon} />
                </IconButton>
              </Tooltip>

              {/* <Button color="inherit">Login</Button> */}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      {/* To display content under the header */}
      <div style={{ minHeight: "68px" }}></div>
    </>
  );
}
