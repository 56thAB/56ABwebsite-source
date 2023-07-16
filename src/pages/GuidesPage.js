import Breadcrumb from "../components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect} from "react";
import { setBackgroundImageProperties } from "../actions";

import backgroundImage from "./img/guidesBackground.jpg"

import Guides from "../components/Guides";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";

export default function GuidesPage() {
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
    <>
      {/* <Breadcrumb to="/guides" title="Guides">
      </Breadcrumb> */}
      <Guides />
    </>
  );
}
