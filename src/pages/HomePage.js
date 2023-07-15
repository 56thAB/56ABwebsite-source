import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Breadcrumbs , Typography} from "@mui/material";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Home from "../components/Home"

import backgroundImage from "./img/homepageBackground.png"
import { setBackgroundImageProperties } from "../actions";

export default function HomePage() {

  const dispatch = useDispatch();

  const { defaultImage} = useSelector(
    (state) => state.backgroundImage
  );

  useEffect(() => {
    dispatch(setBackgroundImageProperties(backgroundImage));

    return () => {
      dispatch(setBackgroundImageProperties(defaultImage));
    };
  }, [dispatch, defaultImage]);
  return (
    <Layout >
      <Breadcrumb to="/" title="Home">
      </Breadcrumb>
        <Home />
    </Layout>
  );
}
