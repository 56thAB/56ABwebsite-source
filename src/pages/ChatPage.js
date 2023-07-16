import React from "react";
import Chat from "../components/Chat";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import { Typography } from "@mui/material";

export default function ChatPage() {
  return (
    <>
      {/* <Breadcrumb to="/chat" title="Chat">
      </Breadcrumb> */}
      <Chat />
    </>
  );
}
