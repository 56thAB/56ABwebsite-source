import React, { useState, useEffect } from "react";
import styles from "./Guides.module.css";
import GuideHeader from "./GuideHeader";
import GuideContent from "./GuideContent";
import guides from "../../../db/guidesDB.json";
import Button from "./Button";

export default function Guides() {
  const [guide, setGuide] = useState("Lesson 1");

  useEffect(() => {

    document
    .getElementById("guide")
    .scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });

  const handleGuide = (e) => {
    setGuide(e.target.name);
    console.log(guide);
  };

  return (
    <>
      <div className={styles.buttons}>
        {guides.map(({ name, link }) => {
          return <Button name={name} handleGuide={handleGuide} />;
        })}
      </div>

      <div className={styles.guide}>
        {guides.map(({ name, link }) => {
          if (guide === name) {
            return (
              <div className={styles.guideDiv}>
                {" "}
                <GuideHeader name={name} link={link} />
                <GuideContent name={name} link={link} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
