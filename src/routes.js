import React, { lazy } from "react";

import Dashboard from "./components/admin/Dashboard";
import HowItWorks from "./components/admin/HowItWorks";

export default [
  {
    id: "admin-panel-demo",
    component: <Dashboard />,
    title: "Admin Panel Demo",
    path: "/",
    exact: true,
  },
  {
    id: "how-it-works",
    component: <HowItWorks />,
    title: "How It Works",
    path: "/how-it-works",
    exact: true,
  },
];
