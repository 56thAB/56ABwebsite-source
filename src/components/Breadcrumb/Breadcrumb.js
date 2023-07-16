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
    if (data.length === 0) {
      // Add "Home" as the default breadcrumb when data is empty
      breadcrumbs.push(
        <NavLink to="/" className={styles.text} key="home">
          Home
        </NavLink>
      );
    } else {
      for (let i = 0; i < data.length; i++) {
        currentPath += "" + data[i];
        breadcrumbs.push(
          <NavLink to={currentPath} className={styles.text} key={currentPath}>
            {data[i]}
          </NavLink>
        );
      }
    }


    return (
      <Breadcrumbs   separator={
        <span
          style={{
            color: 'white',
            fontSize: '1.2em',
          }}
        >
          &gt;
        </span>
      }
      aria-label="breadcrumb" className={styles.center}>
       {breadcrumbs} {/* Render the array of breadcrumb components */}
      </Breadcrumbs>
    );
  }


}
