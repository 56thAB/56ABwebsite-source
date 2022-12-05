import Button from "./Button";
import styles from "./Navigation.module.css";

import React from "react";

export default function Navigation({handleClick}) {
  return (
    <div className={styles.nav}>
      <Button name={"Guides"} handleClick={handleClick} />
      <Button name={"Timestamp"} handleClick={handleClick} />
      <Button name={"About Us"} handleClick={handleClick} />
      <Button name={"Gallery"} handleClick={handleClick} />
    </div>
  );
}
