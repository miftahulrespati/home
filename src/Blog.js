import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";

export default () => {
  const titleRef = React.useRef();

  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/blog"}>
      <Routes>
        <Route path="/" exact element={<Blog />} />
      </Routes>
    </HashRouter>
  );
};
