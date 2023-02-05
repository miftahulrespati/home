import React from "react";
import { Layout, theme } from "antd";
import Dashboard from "../Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../../../routes";

export default () => {
  const element = routes.map((route) => (
    <Route key={route.id} path={route?.path} exact={route?.exact} element={route?.component} />
  ));

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Content
      style={{
        margin: "80px 16px 0px 16px",
        textAlign: "center",
        background: colorBgContainer,
        overflow: "initial",
      }}
    >
      <div className="site-layout-background" style={{ padding: 24 }}>
        <Routes>{element}</Routes>
      </div>
    </Layout.Content>
  );
};
