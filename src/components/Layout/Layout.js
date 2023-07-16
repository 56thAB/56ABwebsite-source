import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { setBreadcrumb } from "../../actions";
import DrawerLeft from "../DrawerLeft";
import Header from "../Header";
import BackgroundImageProvider from "../../tools/BackgroundTool/BackgroundImageProvider";

export default function Layout({ children, image }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const breadcrumbs = useSelector((state) => state.breadcrumb.breadcrumbs);

  useEffect(() => {
    // Set the active route and component name when the route changes
    const segments = location.pathname.split('/').filter(Boolean);



    dispatch(setBreadcrumb(segments));
  }, [location, dispatch]);

  

  return (
    <>
      <BackgroundImageProvider>
        <header>
          <Header breadcrumbs={breadcrumbs} />
        </header>
        <main style={{ backgroundImage: image ? `url(${image})` : "none" }}>
          <DrawerLeft>{children}</DrawerLeft>
        </main>
        <footer>{/* Render your footer component here */}</footer>
      </BackgroundImageProvider>
    </>
  );
}
