import React from "react";
import styles from "./GuideHeader.module.css"

export default function GuideHeader({ children, name, link}) {
  console.log(name);
  return (
    <div className={styles.center}>
      <p>{name}</p>
      <a
        target="_blank"
        href={link}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/7824/7824725.png"
          width="32px"
          height="32px"
        />
      </a>
      {children}
    </div>
  );
}
