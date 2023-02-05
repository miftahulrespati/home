import React from "react";
import { Layout } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

export default () => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
      }}
    >
      {"Admin Panel Demo ©2023 Miftahul Respati using "} <AntDesignOutlined />
    </Layout.Footer>
  );
};
