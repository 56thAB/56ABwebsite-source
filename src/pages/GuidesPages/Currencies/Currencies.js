import React from "react";
import {
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Layout from "../../../components/Layout";
import Breadcrumb from "../../../components/Breadcrumb";

const currencyData = [
  {
    name: "Certification Points",
    description:
      "Most used currency in Planetside 2, with it you can buy Upgrades and Weapons.",
    image: "./img/Cert.png",
  },
  {
    name: "Nanites",
    description:
      "Currency used for spawning in Vehicles, Aircraft, MAX-Units, Grenades, and utility equipment. You always gain 50 per minute, so keep spending them!",
    image: "./img/Nanites.png",
  },
  {
    name: "Merit",
    description:
      "Obtained by defending/capturing Facilities. These can be spent at the Sanctuaries Outfit vendor for minor cosmetics and tactical equipment (More on that in lesson-2-infantry)",
    image: "./img/Merit.png",
  },
  {
    name: "ISO-4",
    description:
      "Currency obtained through completing special Missions and participating in alerts. ISO-4 is used for obtaining and upgrading Implants, small modifications which can give a twist to your playstyle. (More on that in lesson-2-infantry)",
    image: "./img/ISO-4.png",
  },
  {
    name: "A7",
    description:
      "Obtained through special Missions, they also can be randomly found on the map, albeit extremely rare (don't search for it). It can be used for special Items at the black market vendor in Sanctuary.",
    image: "./img/A7.png",
  },
  {
    name: "Daybreak Cash",
    description:
      "Currency obtained by spending your mommies money on Planetside. With it, you can purchase some cosmetics and weapon skins (everything else is not worth it). The primary thing we're going to look into are Certification Points, as these are the most common and important form of currency.",
    image: "./img/Wrelcoin.png",
  },
];

export default function Currencies() {
  return (
    <Layout>
      <Breadcrumb to="/guides" title="Guides">
      Currencies
      </Breadcrumb>

      <TableContainer sx={{ width: "70%", margin: "auto", backgroundColor:"rgba(0, 0, 0, 0.68)", marginTop:"2rem",padding:"1rem", borderRadius:"25px"}}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>
              <Typography variant="subtitle1" color="white" fontWeight="bold">
                  Currency Name
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="subtitle1" color="white" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyData.map((currency) => (
              <TableRow key={currency.name}>
                <TableCell sx={{ width: "15rem" }}>
                   
                  <Typography variant="body1" color="white">
                  <img
                      src={require(`${currency.image}`)}
                      alt={currency.name}
                      style={{ marginRight: "8px", maxWidth:"24px"}}
                    />   {currency.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" color="white">
                    {currency.description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
