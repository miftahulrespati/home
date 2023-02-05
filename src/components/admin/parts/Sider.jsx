import React, { useState } from "react";
import logo from "../../../assets/img/logo512.png";
import * as AntIcon from "@ant-design/icons";
import { Layout, Menu, Divider } from "antd";
import { Link } from "react-router-dom";

const { MenuUnfoldOutlined, MenuFoldOutlined } = AntIcon;

// function menuItem(item) {
//   const Icon = AntIcon[item.icon];

//   if (item.children?.length > 0) {
//     return (
//       <Menu.SubMenu
//         key={item.children?.key}
//         title={item.display}
//         icon={<Icon />}
//         style={{
//           fontSize: 10,
//         }}
//       >
//         {item.children.map((child) => {
//           // key= child.key;
//           return menuItem(child);
//         })}
//       </Menu.SubMenu>
//     );
//   }
//   return (
//     <Menu.Item
//       key={item.key}
//       icon={<Icon />}
//       style={{
//         fontSize: 10,
//       }}
//     >
//       <Link to={item?.path} style={{ textDecoration: "none" }}>
//         {item.display}
//       </Link>
//     </Menu.Item>
//   );
// }

function getItem(key, label, children, icon) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default (props) => {
  const [collapsed, setCollapsed] = useState(false);

  let items = [];
  props.menu.forEach((item) => {
    const Icon = AntIcon[item.icon];
    const label =
      item.children?.length > 0 ? (
        item.label
      ) : (
        <Link to={item.path || "/"} style={{ textDecoration: "none" }}>
          {item.label}
        </Link>
      );
    items.push(getItem(item.key, label, item.children, <Icon />));
  });

  return (
    <Layout.Sider
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "auto",
      }}
      breakpoint="lg"
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
    >
      <div>
        <div className="m-3">
          <img
            src={logo}
            style={{
              height: 56,
              margin: "auto",
              alignSelf: "center",
              display: "block",
            }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={items}
          style={{
            fontSize: 10,
          }}
        />
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["dashboard"]}> */}
        {/* {props.menu.map((item) => menuItem(item))} */}
        {/* </Menu> */}
      </div>
    </Layout.Sider>
  );
};
