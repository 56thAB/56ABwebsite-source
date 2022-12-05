import React from "react";
import styles from "./Guides.module.css";
import GuideHeader from "./GuideHeader";
import GuideContent from "./GuideContent";
import guides from "../../db/guides.json";

export default function Guides() {
  return (
    <div className={styles.grid}>
      {guides.map(({ name, link }) => {
        return (
          <div className={styles.guideDiv}>
            {" "}
            <GuideHeader name={name} link={link} />
            <GuideContent link={link} />
          </div>
        );
      })}
    </div>
  );
}
