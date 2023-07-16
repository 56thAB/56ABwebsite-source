import React from "react";
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Typography } from "@mui/material";

export default function AboutUsPage() {
  return (
    <>
      {/* <Breadcrumb to="/aboutus" title="About Us">
      </Breadcrumb> */}
      <AboutUs />
    </>
  );
}
