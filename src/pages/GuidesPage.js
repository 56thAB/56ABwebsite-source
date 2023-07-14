import Breadcrumb from "../components/Breadcrumb";
import Guides from "../components/Guides";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

export default function GuidesPage() {
  return (
    <Layout>
      <Breadcrumb to="/guides" title="Guides">
      </Breadcrumb>
      <Guides />
    </Layout>
  );
}
