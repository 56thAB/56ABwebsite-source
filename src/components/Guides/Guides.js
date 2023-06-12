import React from 'react'
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";

import { CardMedia } from '@mui/material';

export default function Guides() {
      const { link } = useSelector((state) => state.content);

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
    <CardMedia
      component="iframe"
      sx={{ aspectRatio: "16/9", height: "80vh", maxWidth: "53rem", alignSelf: "center", margin: "auto" }}
      src={link}
      title="Embedded Document"
    />
  </Box>
  )
}
