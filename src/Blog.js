import React, { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Blog from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Header from "./components/blog/Header";

const Blogjees = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'The Wired Thoughts';
    }, [pathname]);

    return null;
  }
  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/blog"}>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Blog />} />
        <Route path="/:id" exact element={<BlogPost />} />
      </Routes>
    </HashRouter>
  );
};

export default Blogjees;
