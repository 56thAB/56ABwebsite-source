import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./Header";
import Links from "./Links";
import Navigation from "./Navigation";
import Tabs from "./Tabs";

export default function App() {
  const [tab, setTab] = useState("");

  useEffect(() => {
    document
      .getElementById("tabs")
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  });

  const handleClick = (e) => {
    setTab(e.target.name);
  };

  return (
    <div className="App">
      <Header />
      <Links />
      <Navigation handleClick={handleClick} />
      <div id="tabs"></div>
      <Tabs tab={tab} />
    </div>
  );
}
