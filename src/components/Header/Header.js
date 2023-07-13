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

import styles from "./Header.module.css";

export default function Header() {
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
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              56th Assault Battalion
            </Typography>

            <Tooltip
              title="Our discord server. Feel free to join and look around!"
              palcement="bottom"
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleDiscordClick}
              >
                <DiscordIcon className={styles.icon} />
              </IconButton>
            </Tooltip>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* To display content under header */}
      <div style={{ minHeight: "68px" }}></div>
    </>
  );
}
