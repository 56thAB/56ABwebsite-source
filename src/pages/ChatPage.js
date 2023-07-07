import React from "react";
import Chat from "../components/Chat";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function ChatPage() {
  return (
    <Layout>
      <Breadcrumb to="/chat" title="Chat">
        <p></p>
      </Breadcrumb>
      <Chat />
    </Layout>
  );
}
