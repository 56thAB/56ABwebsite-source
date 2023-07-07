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

export default function Header() {
  const drawerWidth = 240;

  const handleDiscordClick = () => {
    window.open("https://discord.gg/WMZCMyz", "_blank");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
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
              {" "}
              <DiscordIcon style={{ fill: "white", height: "2rem"}} />
            </IconButton>
          </Tooltip>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
