import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { ConfigProvider, message, FloatButton, Popconfirm } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { accounts, menu } from "./editable-stuff/admin";

import Main from "./components/admin/Main";
import Login from "./components/admin/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState();

  const onLogin = (account) => {
    message.success(`Welcome ${account.username}`);
    setIsLoggedIn(true);
    setAccount(account);
  };

  const onLogout = () => {
    message.info("Goodbye");
    setIsLoggedIn(false);
  };

  const onClick = () => {
    window.location.href = "/";
  };

  const Confirm = () => {
    return (
      <Popconfirm
        title="Redirect to portfolio?"
        // description="Are you sure to delete this task?"
        placement="topLeft"
        okText="Yes"
        cancelText="Cancel"
        onConfirm={onClick}
      >
        <FloatButton
          icon={<HomeOutlined />}
          type="primary"
          style={{ right: 24 }}
        />
      </Popconfirm>
    );
  };

  const component = !isLoggedIn ? (
    <Login onFinish={onLogin} accounts={accounts} />
  ) : (
    <Main onLogout={onLogout} account={account} menu={menu} />
  );

  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL + "/admin"}>
        <ConfigProvider
          theme={{
            token: {
              // colorPrimary: "#00b96b",
            },
          }}
        >
          {component}
          <Confirm />
        </ConfigProvider>
      </HashRouter>
    </>
  );
};

export default App;
