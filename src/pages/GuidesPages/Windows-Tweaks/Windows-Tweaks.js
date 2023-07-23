import React from "react";
import { Typography, Container, Grid, Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";

import FSOImage from "./img/FSO.png";
import EnhancedPrecisionImage from "./img/EnhancedPrecision.png";

export default function EtraSettings() {
  return (
    <>
      <Container
        sx={{
          width: "70%",
          margin: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.68)",
          marginTop: "2rem",
          padding: "1rem",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem", color: "white" }}>
          Useful Windows settings Settings
        </Typography>
        <Typography variant="h5" sx={{ color: "white" }}>
          {" "}
          Disable Mouse Acceleration
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          <br />
          Mouse acceleration makes your cursor move faster than it should when
          moved quickly and slower when moved slowly. This can be detrimental to
          muscle memory, and Windows applies a strange and illogical
          acceleration curve, which is unfavorable for gaming. To disable mouse
          acceleration globally:
        </Typography>
        <ol>
          <li>
            Go to the Control Panel, select Hardware and Sound, and then Devices
            and Printers.
          </li>
          <li>Choose your mouse from the menu of devices.</li>
          <li>Click the Pointer Options tab in the Mouse Properties window.</li>
          <li>Uncheck the box next to Enhance pointer precision.</li>
          <li>Click Apply, then OK.</li>
        </ol>
        <CardMedia
          component="img"
          image={EnhancedPrecisionImage}
          alt="Enhanced Precision Image"
          sx={{ maxWidth: "60%", margin: "auto" }}
        />
        <br />
        <Typography variant="h5" sx={{ color: "white" }}>
          {" "}
          Disable Fullscreen Optimization for Planetside{" "}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          <br />
          Windows treats the in-game "fullscreen" setting as "borderless
          windowed" to enable faster ALT+TAB switching. However, this introduces
          some input lag in gaming. To disable fullscreen optimization:
        </Typography>
        <ol>
          <li>Open the game folder.</li>
          <li>Right-click the PlanetSide2_x64.exe (not LaunchPad.exe).</li>
          <li>In the context menu, select Properties.</li>
          <li>Go to the Compatibility tab.</li>
          <li>Click on the Change settings for all users button.</li>
          <li>Check (turn on) the Disable fullscreen optimizations option.</li>
        </ol>
        <CardMedia
          component="img"
          image={FSOImage}
          alt="FSOImage"
          sx={{ maxWidth: "60%", margin: "auto" }}
        />
        <br />
        <Typography variant="h5" sx={{ color: "white" }}>
          {" "}
          How to Make the Game Stretched
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          <br />
          If you're accustomed to playing CS:GO at stretched resolution, you can
          achieve a similar effect in other games without changing the in-game
          resolution. Here's how:
        </Typography>
        <ul>
          <li>
            Change the resolution in your Windows screen settings (or nVidia
            control panel) to 4:3 aspect ratio (E.g. 1280×960).
          </li>
          <li>
            You do not need to change resolution in game. Keep it 1920x1080
            there.
          </li>
        </ul>{" "}
        <br />
        <Typography variant="h5" sx={{ color: "white" }}>
          {" "}
          BONUSES{" "}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          <br />
          Here are some additional resources for hardware, software, and general
          PC optimizations:
        </Typography>
        <ul>
          <li>
            <a
              to="https://youtu.be/jZrnfWpENTo"
              target="_blank"
              style={{
                color: "#b8b8b8",
                textDecoration: "underline",
              }}
            >
              Nvidia control panel set up guide
            </a>
          </li>
          <li>
            Channels with in-depth optimizations:{" "}
            <a
              to="https://www.youtube.com/c/BattleNonSense"
              target="_blank"
              style={{
                color: "#b8b8b8",
                textDecoration: "underline",
              }}
            >
              BattleNonSense
            </a>{" "}
            and{" "}
            <a
              href="https://www.youtube.com/c/OptimumTech"
              target="_blank"
              style={{
                color: "#b8b8b8",
                textDecoration: "underline",
              }}
            >
              OptimumTech
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}
