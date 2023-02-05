import React from "react";
import { isMobile } from "react-device-detect";
import { Button, Form, Input, Space, message, Modal } from "antd";
import logo from "../../assets/img/logo512.png";
import { accounts } from "../../editable-stuff/admin";

const Login = (props: {
  onFinish: any;
  accounts: { email: string; password: string };
}) => {
  const onFinish = (value: any) => {
    let account = accounts.find(
      (a) => a.email === value.email || a.username === value.email
    );
    if (!account) {
      message.error(`User not found with email or username: ${value.email}`);
      return;
    }

    if (account?.password !== value.password) {
      message.error("Wrong password");
      return;
    }

    props.onFinish(account);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div className="border rounded px-5 py-3 bg-light">
          <Space direction="vertical" size="middle" align="center">
            <img
              src={logo}
              alt="logo"
              style={{ height: "77px", margin: "auto" }}
            />
            <Form
              name="loginForm"
              labelCol={{
                span: 0,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
                size: "large",
              }}
              onFinish={(val) => onFinish(val)}
              autoComplete="off"
              className="custom-login-box"
            >
              <div style={{ width: "100%", textAlign: "left" }}>
                <span style={{ fontWeight: "bold" }}>Enter to Login</span>
              </div>
              <br />
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input email / username",
                  },
                ]}
              >
                <Input
                  addonBefore={<i className="fas fa-user"></i>}
                  placeholder="email / username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password",
                  },
                ]}
              >
                <Input.Password
                  addonBefore={<i className="fas fa-lock"></i>}
                  placeholder="password"
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <div className="d-flex justify-content-center">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
            <div style={{ fontWeight: "lighter" }}>
              <p>email: admin@mail.com</p>
              <p>password: Password123!</p>
            </div>
          </Space>
        </div>
      </div>
      <Modal
        title="You're on your phone"
        open={isMobile}
        // open={true}
        footer={[
          <Button type="primary" onClick={() => (window.location.href = "/")}>
            Return to portfolio
          </Button>,
        ]}
      >
        The Admin Panel demo would be better accessed on a desktop browser.
      </Modal>
    </>
  );
};

export default Login;
