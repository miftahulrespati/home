import { useState } from "react";
import { Card } from "antd";
import Table from "./dashboard/Table";
import Statistic from "./dashboard/Statistic";
import Step from "./dashboard/Step";
import illustration from "../../assets/img/illustration.jpg";

const tabList = [
  {
    key: "table",
    tab: "Table",
    content: <Table />,
    description: `Need to organize and manage your data? 
      The intuitive and user-friendly platform allows you to view, delete, edit, and add data in the columns of your choice.
      Table is the perfect way to structure, organize and present data in a clear and easy-to-understand format.`,
  },
  {
    key: "statistic",
    tab: "Statistic",
    content: <Statistic />,
    description: `Statistic helps you quickly and easily collect, organize, and interpret data in meaningful ways. 
      Make informed decisions with visualization tools - monitor trends in your data, spot outliers, and get insights faster. 
      Make the most of your data.`,
  },

  {
    key: "step",
    tab: "Step",
    content: <Step />,
    description: `Displays the running process, telling you whether the procedure succeeded or failed. 
      This will guide you through the steps of any task, so you can stay on track and get things done faster. 
      You'll never have to worry about forgetting a step or getting lost.`,
  },
  {
    key: "more",
    tab: "And many more",
    img: illustration,
    description: `Basically, anything can be displayed depending on your needs. 
      High-performance web admin panel tailored to your specific needs.`,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("table");

  const onTabChange = (key: string) => {
    setActiveTab(key);
  };
  return (
    <Card
      style={{ width: "100%" }}
      tabList={tabList}
      activeTabKey={activeTab}
      onTabChange={onTabChange}
    >
      <Card className="mb-3">
        {tabList.find((tab) => tab.key === activeTab)?.img ? (
          <div>
            <div>
              {tabList.find((tab) => tab.key === activeTab)?.description}
            </div>
            <div className="d-flex justify-content-around">
              <img
                src={illustration}
                alt=""
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "60vh",
                  marginTop: 12,
                }}
              />
            </div>
          </div>
        ) : (
          tabList.find((tab) => tab.key === activeTab)?.description
        )}
      </Card>
      <div>{tabList.find((tab) => tab.key === activeTab)?.content}</div>
    </Card>
  );
};

export default Dashboard;
