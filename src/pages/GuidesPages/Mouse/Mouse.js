import React from "react";
import { Typography, Divider, Link, Container } from "@mui/material";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";

export default function Mouse() {
  return (
    <Layout>
      <Breadcrumb to="/guides" title="Guides">
        Mouse Settings
      </Breadcrumb>

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
    <Typography variant="body1" sx={{ marginTop: "1rem", color: "white" }}>
      <strong>Improving Mouse Performance</strong>
      <br />
      If you have an old mouse, consider upgrading to a cheap gaming mouse from popular brands like Logitech, SteelSeries, or Razer (at least $50). These mice have more precise and faster sensors, work at high speeds without bugs, and offer various technical improvements.
    </Typography>

    <Typography variant="body1" sx={{ marginTop: "1rem", color: "white" }}>
      <strong>Optimizing Settings</strong>
      <br />
      In your mouse software, adjust the polling rate to the highest available setting and disable acceleration and angle snapping.
    </Typography>

    <Typography variant="body1" sx={{ marginTop: "1rem", color: "white" }}>
      <strong>Recommended Sensitivity</strong>
      <br />
      Aim for a sensitivity of around 20-60cm/360° for optimal performance.
    </Typography>

    <Typography variant="body1" sx={{ marginTop: "1rem", color: "white" }}>
      <strong>DPI and In-Game Sensitivity</strong>
      <br />
      High DPI is generally better for the following reasons:
    </Typography>

    <ol>
      <li>
        Comparing High DPI vs Low DPI:
        <br />
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/QrF_e5vKqPk"
          title="YouTube video player"
            frameBorder="0" 
            allowFullScreen 
        ></iframe>
      </li>

      <li>
        50% Less Input Lag! Low DPI vs. High DPI Analysis:
        <br />
        <iframe
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/6AoRfv9W110"
          title="YouTube video player"
            frameBorder="0" 
            allowFullScreen 
        ></iframe>
      </li>

      <li>
        In Planetside, when using vehicles, high DPI changes the acceleration curve to a more predictable one for air and ground vehicles.
      </li>
    </ol>

    <Typography variant="body1" sx={{ marginTop: "1rem", color: "white" }}>
      <strong>Important Notes:</strong>
      <br />
      <strong>Note 1:</strong> If you have a cheap mouse with high DPI, it may have smoothing effects or acceleration, or a fake high DPI.
      <br />
      <strong>Note 2:</strong> For Planetside, setting DPI higher than 2000 is unnecessary, as it may not have low enough sensitivity values to match your old sensitivity.
    </Typography>
  </Container>
</Layout>

  );
}
