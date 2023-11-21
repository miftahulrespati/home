const accounts = [
  {
    email: "admin@mail.com",
    password: "Password123!",
    username: "Administrator",
  },
  {
    email: "a",
    password: "a",
    username: "Administrator",
  },
];

const menu = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "DashboardOutlined",
    path:"/",
  },
  {
    key: "user",
    label: "User Management",
    icon: "UserOutlined",
    path:"/",
  },
  {
    key: "product",
    label: "Product Management",
    icon: "AppstoreOutlined",
    children: [
      {
        key: "product-1",
        label: "Product 1",
        // icon: "BookOutlined",
        path:"/",
      },
      {
        key: "product-2",
        label: "Product 2",
        // icon: "GoldOutlined",
        children: [
          {
            key: "product-2.1",
            label: "Product 2.1",
            // icon: "DollarOutlined",
            path:"/",
          },
          {
            key: "product-2.2",
            label: "Product 2.2",
            // icon: "LineChartOutlined",
            path:"/",
          },
        ],
      },
    ],
  },
  {
    key: "setting",
    label: "Setting",
    icon: "SettingOutlined",
    path:"/",
  },
  {
    key: "info",
    label: "How It Works",
    icon: "QuestionCircleOutlined",
    path:"/how-it-works",
  },
];

export { accounts, menu };
