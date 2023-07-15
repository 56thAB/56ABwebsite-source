import React from "react";
import { useSelector } from "react-redux";

export default function BackgroundImageProvider({ children }) {
  const image = useSelector(
    (state) => state.backgroundImage.newImage
  );

  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgb(26, 26, 26)",
        minHeight:"100vh"
      }}
    >
      {children}
    </div>
  );
}
