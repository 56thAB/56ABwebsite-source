import React from "react";
import styles from "./Guides.module.css";
import GuideHeader from "./GuideHeader";
import GuideContent from "./GuideContent";
import guides from "../../../db/guidesDB.json";

export default function Guides() {
  return (
    <div className={styles.grid}>
      {guides.map(({ name, link }) => {
        return (
          <div className={styles.guideDiv}>
            {" "}
            <GuideHeader name={name} link={link} />
            <GuideContent name={name} link={link} />
          </div>
        );
      })}
    </div>
  );
}
