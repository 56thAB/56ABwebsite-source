import React from "react";
import { Route } from "react-router-dom";
import Layout from "../../components/Layout";
import Guides from "../../components/Guides";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function GuideRoute({ guide }) {
  return (    
      <Layout>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/guides" color="inherit">
            Guides
          </Link>
          <Typography color="text.primary">{guide.name}</Typography>
        </Breadcrumbs>
        <Guides guide={guide} />
      </Layout>
  );
}