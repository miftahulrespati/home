import React, { useState } from "react";
import { Button } from "antd";
import { Layout, Divider } from "antd";
import Header from "./parts/Header";
import Sider from "./parts/Sider";
import Footer from "./parts/Footer";
import Content from "./parts/Content";
import Dashboard from "./Dashboard"

const Main = (props: { onLogout: any; account: any; menu: any }) => {

  return (
    <Layout hasSider>
      <Sider menu={props.menu} />
      <Layout className="site-layout" style={{ flex: "1", minHeight: "100vh" }}>
        <Header user={props.account} onLogout={props.onLogout} />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Main;
