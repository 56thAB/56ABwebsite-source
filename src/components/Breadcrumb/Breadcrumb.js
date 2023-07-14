import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ children, title, to }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={styles.center}>
      <NavLink to={to} className={styles.text}>
        {title}
      </NavLink>
      <Breadcrumbs aria-label="breadcrumb" >
        <Typography className={styles.text} >{children}</Typography>
        
      </Breadcrumbs>
    </Breadcrumbs>
  );
}
