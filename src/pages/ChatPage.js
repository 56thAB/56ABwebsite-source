import React from "react";
import Header from "../components/Header";
import DrawerLeft from "../components/DrawerLeft";

import Chat from "../components/Chat";
import Layout from "../components/Layout";

export default function ChatPage() {
  return (
    <div>
      <Layout>
        <Chat />{" "}
      </Layout>
    </div>
  );
}
