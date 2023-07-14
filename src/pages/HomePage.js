import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs , Typography} from "@mui/material";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Home from "../components/Home"

export default function HomePage() {
  return (
    <Layout >
      <Breadcrumb to="/" title="Home">
      </Breadcrumb>
        <Home />
    </Layout>
  );
}
