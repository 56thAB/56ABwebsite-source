import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import styles from "./Guides.module.css";

import GeneratedRoutes from "../../routes/GenerateRoutes/GeneratedRoutes";

export default function Guides() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, p: 1 }}
      className={styles.container}
    >
      <Grid container>
        {GeneratedRoutes.map((guide) => (
          <Grid item xs={12} sm={6} key={guide.path}>
            <Box
              height={100}
              width={300}
              border="1px solid #ccc"
              borderRadius={4}
              p={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              className={styles.box}
            >
              <Typography variant="h6">
                <img
                  src={require(`../../${guide.image}`)}
                  className={styles.img}
                />
                {guide.name}{" "}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
