import React from "react";
import { Route } from "react-router-dom";
import Layout from "../../components/Layout";
import Guides from "../../components/Guides";
import { Breadcrumbs, Typography } from "@mui/material";

import Breadcrumb from "../../components/Breadcrumb";

import { Link } from "react-router-dom";

export default function GuideRoute({ guide }) {
  return (
    <Layout>
      <Breadcrumb to="/guides" title="Guides">
        <Typography> {guide.name}</Typography>
      </Breadcrumb>
      <Guides guide={guide} />
    </Layout>
  );
}
