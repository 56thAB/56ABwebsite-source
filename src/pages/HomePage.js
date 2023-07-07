import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";


export default function HomePage() {
  return (
    <Layout>
    <Breadcrumb to="/" title="Home">
      <p></p>
    </Breadcrumb>
  </Layout>
  );
}
