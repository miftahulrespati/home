import React, { useState, useEffect } from "react";
import { Button, Result, Steps, theme, Row, Col, Space } from "antd";

const steps = [
  {
    title: "First",
    content: (
      <Result status={"success"} title="Your operation has been executed" />
    ),
  },
  {
    title: "Second",
    content: (
      <Result status={"success"} title="Your operation has been executed" />
    ),
  },
  {
    title: "Last",
    content: (
      <Result status={"error"} title="Your operation has been executed" />
    ),
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Row gutter={16}>
        <Col
          md={24} xs={8}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Steps
            responsive
            current={current}
            items={items}
            status={current === steps.length - 1 ? "error" : "process"}
          />
          <Space style={{ marginTop: 36 }}>
            {
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => prev()}
                disabled={!(current > 0)}
              >
                Previous
              </Button>
            }
            {
              <Button
                type="primary"
                onClick={() => next()}
                disabled={!(current < steps.length - 1)}
              >
                Next
              </Button>
            }
          </Space>
        </Col>
        <Col md={24} xs={16} style={contentStyle} >
          {steps[current].content}
        </Col>
      </Row>
    </>
  );
};

export default App;
