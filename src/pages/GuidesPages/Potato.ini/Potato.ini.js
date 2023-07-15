import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Divider, Link, Container } from "@mui/material";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";
import BackgroundImageProvider from "../../../tools/BackgroundTool/BackgroundImageProvider";
import { setBackgroundImageLink } from "../../../actions";

import backgroundImage from "./img/PotatoBackground.png";

export default function Potatoini() {
  const dispatch = useDispatch();
  
  const defaultImage = useSelector(
    (state) => state.backgroundImage.link // Access the default image link from the Redux store
  );

  
  useEffect(() => {
    dispatch(setBackgroundImageLink(backgroundImage));

    return () => {
      dispatch(setBackgroundImageLink(defaultImage));
    };
  }, [dispatch, defaultImage]);


  return (
    <Layout>
      <Breadcrumb to="/guides" title="Guides">
       Potato.ini 
      </Breadcrumb>

      <Container
        sx={{
          width: "70%",
          margin: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.68)",
          marginTop: "2rem",
          padding: "1rem",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <Typography variant="h5" sx={{ marginTop: "2rem" }}>
          Why Do You Need the Right Settings?
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Right settings will give you lots of benefits in the game. By picking
          the right settings, it will be easier to see enemies and hit them. The
          right settings will increase your FPS or make it more stable,
          resulting in a smoother experience. Response time will be lower, and
          mouse response will be better. In addition, in Planetside, your
          shooting speed is connected to your PC performance. Very roughly
          speaking: the less frames = the slower you shoot. Fast fire rate guns
          are affected by it even more (that's why it is important to keep your
          frames high, especially on TR).
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1.5rem" }}>
          Proof: <br />
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/4cXekLslYpY"
            title="YouTube video player"
            frameBorder="0" // Update 'frameborder' to 'frameBorder'
            allowFullScreen // Update 'allowfullscreen' to 'allowFullScreen'
          ></iframe>
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "2rem" }}>
          Applying the "Potato.ini" Settings
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          First and foremost, if you don't want to spend much time going
          in-depth about settings, you can just apply the so-called "potato.ini"
          settings for the best in-game performance. By browsing your game's
          local files, you will find a file named UserOptions.ini. Open it. This
          file contains all your in-game settings. We recommend making a backup
          before making any changes to it. Anyways, here are the potato settings
          for you to copy:
        </Typography>
        <pre>
          {`
[Rendering]
OverallQuality=-1
GraphicsQuality=1
TextureQuality=0
ShadowQuality=0
LightingQuality=1
EffectsQuality=1
TerrainQuality=1
FloraQuality=4
ModelQuality=3
Gamma=0.550000
VerticalFOV=80
ParticleLOD=0
ParticleDistanceScale=0.650000
FogShadowsEnable=0
MotionBlur=0
VSync=0
AO=0
MaximumFPS=250
UseLod0a=0
BloomEnabled=0
Smoothing=0
SmoothingMaxFramerate=150
SmoothingMinFramerate=60
UseAspectFOV=0
UseGlobalRenderDistance=0
RenderDistance=150.000000
InfantryRenderDistance=150.000000
GroundVehicleRenderDistance=800.000000
AirVehicleRenderDistances=1000.000000
UnderwaterGodRaysQuality=1
AAQuality=-1
SSLRQuality=0
Tessellation=0
WaterQuality=0`}
        </pre>

        <Typography variant="h6" sx={{ marginTop: "2rem" }}>
          UserOptions.ini Settings Explanation
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          Here is a{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnt8_M-I9KByf3o8S8uFJr1eA6YQlnnscTOpZIjIl6gjC6w8K7q7YEV4FI3DuVfNIII_15P1CsM3kY/pubhtml"
            target="_blank"
          >
            link to a Google Spreadsheet
          </Link>{" "}
          explaining in depth what each setting in UserOptions.ini does.
        </Typography>

        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          You may want to play with the texture settings (try both Low and Ultra
          to see which gives you better frames, depending on your machine). It
          also reduces your render distance to 200m, so you might want to adjust
          that back up for flying or vehicles.
        </Typography>
      </Container>
    </Layout>
  );
}
