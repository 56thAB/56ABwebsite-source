import React from 'react'
import Box from "@mui/material/Box";
import {  useDispatch } from "react-redux";
import { CardMedia } from '@mui/material';

export default function Guides({guide}) {

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
    <CardMedia
      component="iframe"
      sx={{ aspectRatio: "16/9", height: "80vh", maxWidth: "53rem", alignSelf: "center", margin: "auto" }}
      src={guide.link}
      title="Embedded Document"
    />
  </Box>
  )
}
