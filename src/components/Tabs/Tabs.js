import React from "react";
import Guides from "./Guides";
import AboutUs from "./About Us";



export default function Tabs({ tab}) {
  
    if (tab === "Guides") {
      return <div> <Guides /></div>;
    }
  
    if (tab === "About Us") { 
      return <div> <AboutUs /></div>;
    }
}
