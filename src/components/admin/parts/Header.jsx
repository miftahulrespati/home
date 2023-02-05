import React from "react";
import { LogoutOutlined, DownOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Dropdown, Space, Button, Divider } from "antd";

export default (props) => {
  const handleMenuClick = (e) => {
    if (e?.key === "logout") props.onLogout();
  };

  const items = [
    {
      label: "Change Password",
      key: "change-password",
      icon: <LockOutlined />,
    },
    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "#35aef5",
        }}
      >
        <div className="d-flex justify-content-end align-self-center">
          <div
            style={{
              position: "fixed",
              right: 5,
              top: 0,
            }}
          >
            <Avatar size={24} icon={<UserOutlined />} />
            <Dropdown
              menu={menuProps}
              trigger={["click"]}
              placement="bottomRight"
              arrow
            >
              <Button type="secondary">
                <Space
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <b>{props.user?.username || "Belum Login"}</b>
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </div>
      </Layout.Header>
      <Divider
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          borderTop: "2px solid #d04342",
          marginTop: 63,
        }}
      />
    </>
  );
};
