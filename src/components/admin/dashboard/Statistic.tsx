import React from "react";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LikeOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const App: React.FC = () => (
  <Row gutter={16}>
    <Col xs={12} lg={6}>
      <Card bordered={false} className="my-3" >
        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
      </Card>
    </Col>
    <Col xs={12} lg={6}>
      <Card bordered={false} className="my-3" >
        <Statistic title="Trend" value={93} prefix={<LineChartOutlined />} />
      </Card>
    </Col>
    <Col xs={12} lg={6}>
      <Card bordered={false} className="my-3" >
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: "#3f8600" }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col xs={12} lg={6}>
      <Card bordered={false} className="my-3" >
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: "#cf1322" }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);

// const App: React.FC = () => (
//   <Row gutter={16}>
//     <Col span={12}>
//       <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
//     </Col>
//     <Col span={12}>
//       <Statistic title="Unmerged" value={93} suffix="/ 100" />
//     </Col>
//   </Row>
// );

export default App;
