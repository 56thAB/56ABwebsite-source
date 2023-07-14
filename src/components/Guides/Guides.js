import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import styles from "./Guides.module.css";

import GeneratedRoutes from "../../routes/GenerateRoutes/GeneratedRoutes";

// console.log("../." ,GeneratedRoutes[0].image)
export default function Guides() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 3 }}
      className={styles.container}
    >
      <Grid container spacing={2}>
        {GeneratedRoutes.map((guide) => (
          <Grid item xs={12} sm={6} md={4} key={guide.path}>
            <Box
              height={100}
              width={300}
              border="1px solid #ccc"
              borderRadius={4}
              p={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{ backgroundColor: "#480000" }} // Dark red background color
            >
              <Typography variant="h6">{guide.name}</Typography>
              <img src={require(`../../${guide.image}`)}></img>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
