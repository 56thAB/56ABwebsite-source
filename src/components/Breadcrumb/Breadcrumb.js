import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import React from "react";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  const data = useSelector((state) => state.breadcrumb);

  if (data) {
    let breadcrumbs = []; // Array to store breadcrumb components
    let currentPath = "";
    for (let i = 0; i < data.length; i++) {
      currentPath += "" + data[i];
      breadcrumbs.push(
        <NavLink to={currentPath} className={styles.text} key={currentPath}>
          {data[i]}
        </NavLink>
      );
    }

    return (
      <Breadcrumbs aria-label="breadcrumb" className={styles.center}>
        {breadcrumbs} {/* Render the array of breadcrumb components */}
      </Breadcrumbs>
    );
  }


}
