import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import phoneBackground from "../../phoneBackground.jpg"

export default function BackgroundImageProvider({ children }) {
  const image = useSelector(
    (state) => state.backgroundImage.newImage
  );
  const [backgroundImage, setBackgroundImage] = useState(image);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth<= 1050) {
        setBackgroundImage(phoneBackground);
      } else {
        setBackgroundImage(image);
      }
    };

    handleResize(); // Set initial background image based on screen size

    window.addEventListener("resize", handleResize); // Update background image on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    }})


  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
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
