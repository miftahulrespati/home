import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface DataType {
  key: string;
  productName: string;
  qty: number;
  branch: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
  },
  {
    title: "Branch",
    dataIndex: "branch",
    key: "branch",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 7 ? "geekblue" : "green";
          if (tag === "rare") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a className="btn-primary">
          <EditOutlined />
        </a>
        <a className="btn btn-outline-danger btn-sm">
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    productName: "Perfume",
    qty: 28,
    branch: "Seoul",
    tags: ["nice", "expensive"],
  },
  {
    key: "2",
    productName: "Diamond",
    qty: 8,
    branch: "Garut",
    tags: ["rare"],
  },
  {
    key: "3",
    productName: "Bread",
    qty: 98,
    branch: "Essen",
    tags: ["delicious", "crunchy"],
  },
];

const App: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default App;
