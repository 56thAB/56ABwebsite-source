import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { CardMedia, Container, Typography } from "@mui/material";
import ContentLoader from "react-content-loader";

export default function Guides({ guide }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      {guide.link && (
        <CardMedia
          component="iframe"
          sx={{
            aspectRatio: "16/9",
            height: "80vh",
            maxWidth: "53rem",
            alignSelf: "center",
            margin: "auto",
          }}
          src={guide.link}
          title="Embedded Document"
        />
      )}
      {guide.images && (
        <>
          <br />
          <br />
        
          <Typography variant="h5" component="h3" style={{textAlign:"center"}}>
            Gallery
          </Typography>
          {guide.images.map(({ url, title, anchor }) => (
            <Container key={url}>
              {!imageLoaded && (
                <ContentLoader
                  viewBox="0 0 861 627"
                  speed={2}
                  backgroundColor="#e6e6e6"
                  foregroundColor="#c4c4c4"
                  style={{ width: "861px", height: "627px" }}
                  id={anchor}
                >
                  <rect x="0" y="0" rx="3" ry="3" width="861" height="627" />
                  <rect x="20" y="10" rx="3" ry="3" width="300" height="10" />
                  <rect x="20" y="30" rx="3" ry="3" width="250" height="10" />
                  <rect x="20" y="50" rx="3" ry="3" width="200" height="10" />
                  <rect x="20" y="70" rx="3" ry="3" width="280" height="10" />
                </ContentLoader>
              )}
              <img
                src={url}
                alt={title}
                style={{ display: imageLoaded ? "block" : "none" }}
                onLoad={handleImageLoad}
                id={anchor}
              />
              <Typography variant="subtitle1">{title} </Typography>
              <br />
              <br />
              <br />
            </Container>
          ))}
        </>
      )}
    </Box>
  );
}
