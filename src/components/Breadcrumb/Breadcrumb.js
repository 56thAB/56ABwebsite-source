import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import React from "react";
import styles from "./Breadcrumb.module.css"

export default function Breadcrumb({ children, title, to }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={styles.center}>
      <Link to={to} color="inherit">
        {title}
      </Link>
      {children}
    </Breadcrumbs>
  );
}
