import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Guides.module.css";

import GeneratedRoutes from "../../routes/GenerateRoutes/GeneratedRoutes";

export default function Guides() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 1 }}
      className={styles.container}
    >
      <Grid container className={styles.gridContainer}>
        {GeneratedRoutes.map((guide) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={guide.path}
          className={styles.gridItem}
          >
            <Button
              LinkComponent={Link}
              to={guide.path}
              size="large"
              color="inherit"
              className={styles.button}
              variant="outlined"
            >
              <img
                src={require(`../../${guide.image}`)}
                className={styles.img}
              />
              {guide.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
