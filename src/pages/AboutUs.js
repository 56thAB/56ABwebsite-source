import React from "react";
import Layout from "../components/Layout";
import AboutUs from "../components/AboutUs";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function AboutUsPage() {
  return (
    <Layout>
      <Breadcrumb to="/aboutus" title="About Us">
        <p></p>
      </Breadcrumb>
      <AboutUs />
    </Layout>
  );
}
