import React from "react";
import styles from "./Links.module.css";
import MembersOnline from "./MembersOnline";
import Discord from "./Discord";

export default function Links() {
  return (
    <div className={styles.links}>
      <Discord />
      <img src={require("./img/56outfcam.png")} className={styles.img} />

      <MembersOnline />
    </div>
  );
}
