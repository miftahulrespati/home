import React, { useState } from "react";
import moment from "moment";
import bloglist from "../../editable-stuff/blog-config";
import { Link } from "react-router-dom";

const Blog = () => {
  const sortedBlogs = Object.entries(bloglist).sort((a, b) =>
    moment(b[1].publishedDate).diff(moment(a[1].publishedDate))
  );

  return (
    <>
      <div
        className={`container mt-5 
                  bg-light 
                  border-top border-5 rounded border-dark
                  shadow-lg`}
        style={{ maxWidth: "90%" }}
      >
        <h1 className="text-center pt-5">The Wired Thoughts</h1>
        {sortedBlogs.map(([id, value], index) => {
          return (
            <BlogCard
              key={index}
              title={value.title}
              description={value.description}
              index={id}
              cover={value.cover}
              publishedDate={value.publishedDate}
            />
          );
        })}
      </div>
    </>
  );
};

const BlogCard = ({ index, title, cover, description, publishedDate }) => {
  const [titleColor, setTitleColor] = useState("#373b3e");

  return (
    <div className="m-5">
      {/* <div className=""> */}
      <div className="row">
        <div className="col-md-3">
          <Link to={`/${index}`} style={{ textDecoration: "none" }}>
            <img src={cover} className="card-img rounded mb-3" alt="cover" />
          </Link>
        </div>
        <div className="col-md-9">
          {/* <div className=""> */}
          <Link
            to={`/${index}`}
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setTitleColor("#65727e")}
            onMouseLeave={() => setTitleColor("#373b3e")}
          >
            <h2 className="" style={{ color: titleColor }}>
              {title}
            </h2>
          </Link>
          <p className="lead">{description}</p>
          <p>{moment(publishedDate).format("DD MMMM YYYY")}</p>
          {/* </div> */}
        </div>
      </div>
      <hr />
      {/* </div> */}
    </div>
  );
};

export default Blog;
