import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import React from "react";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  const data = useSelector((state) => state.breadcrumb);

  if (data) {
    let breadcrumbs = [];
    if (data.length === 0) {
      breadcrumbs.push(
        <NavLink to="/" className={styles.text} key="home">
          Home
        </NavLink>
      );
    } else {
      // Since 'currentPath' will store the complete path, we don't need it anymore.
      // Instead, we can use the 'data' array directly.
      for (let i = 0; i < data.length; i++) {
        const path = data.slice(0, i + 1).join("/"); // Construct the path for the current breadcrumb
        breadcrumbs.push(
          <NavLink to={`/${path}`} className={styles.text} key={path}>
            {data[i]}
          </NavLink>
        );
      }
    }

    return (
      <Breadcrumbs
        separator={
          <span
            style={{
              color: "white",
              fontSize: "1.2em",
            }}
          >
            &gt;
          </span>
        }
        aria-label="breadcrumb"
        className={styles.center}
      >
        {breadcrumbs}
      </Breadcrumbs>
    );
  }
}






