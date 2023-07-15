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
  "The most widely used currency in Planetside 2, Certification Points allow you to purchase upgrades and weapons.",
  image: "./img/Cert.png",
  },
  {
  name: "Nanites",
  description:
  "Nanites are the currency used for spawning vehicles, aircraft, MAX-Units, grenades, and utility equipment. You accumulate 50 Nanites per minute, so it's important to spend them wisely.",
  image: "./img/Nanites.png",
  },
  {
  name: "Merit",
  description:
  "Merits are obtained by defending or capturing facilities. They can be spent at the Sanctuaries Outfit vendor for minor cosmetics and tactical equipment.",
  image: "./img/Merit.png",
  },
  {
  name: "ISO-4",
  description:
  "ISO-4 is a currency acquired through completing special missions and participating in alerts. It is used for obtaining and upgrading Implants, which are small modifications that can enhance your playstyle.",
  image: "./img/ISO-4.png",
  },
  {
  name: "A7",
  description:
  "A7 can be obtained through special missions or found randomly on the map, although it is extremely rare. It can be used for purchasing special items at the black market vendor in Sanctuary.",
  image: "./img/A7.png",
  },
  {
  name: "Daybreak Cash",
  description:
  "Daybreak Cash is acquired by purchasing it with real money. It allows you to buy cosmetics and weapon skins in Planetside. However, for the purpose of this guide, we will focus primarily on Certification Points, as they are the most common and important form of currency.",
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
