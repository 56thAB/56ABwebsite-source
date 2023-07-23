import React, { useState } from "react";
import { Typography, Container, Grid, Card, CardMedia, Dialog, DialogContent } from "@mui/material";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";

const vsync = require("./img/vsync.png");

export default function EtraSettings() {
  const [open, setOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const images = {};

  for (let i = 1; i <= 8; i++) {
    // Change 3 to the total number of images you have
    images[`image${i}`] = require(`./img/settings${i}.png`);
  }

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageUrl(null);
  };

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
        <Typography variant="body1" sx={{ marginTop: "1rem", color: "white" }}>
          <strong>Useful settings in-game</strong>
          <br />
          Now let’s talk about in-game settings you should know about. These
          settings may make your life much easier.
        </Typography>

        {/* Image Gallery */}
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {Object.entries(images).map(([key, imageUrl]) => (
            <Grid item xs={12} key={key} onClick={() => handleImageClick(imageUrl)}>
              {/* Set xs={12} to occupy the full width on all screen sizes */}
              <Card>
                <CardMedia component="img" image={imageUrl} alt={key} />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="body1"
          sx={{ marginTop: "1rem", color: "white", fontStyle: "italic" }}
        >
          Analysis of input lag of fullscreen, windowed and borderless windowed modes with/without vsync and triple buffering.
        </Typography>
        <Card  onClick={() => handleImageClick(vsync)}>
          <CardMedia component="img" image={vsync}  />
        </Card>
      </Container>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth >
        <DialogContent sx={{ p: 0, backgroundColor: "transparent" }}>
          {selectedImageUrl && (
            <CardMedia component="img" image={selectedImageUrl} alt="Selected Image" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
