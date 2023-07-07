import Guides from "../components/Guides";
import {Link} from "react-router-dom"
import { Breadcrumbs,Typography } from "@mui/material";
import Layout from "../components/Layout";

export default function GuidesPage() {
  return (
    <Layout>
       <Breadcrumbs aria-label="breadcrumb">
        <Link to="/guides" color="inherit">
          Guides
        </Link>
      </Breadcrumbs>
      <Guides />{" "}
    </Layout>
  );
}
  