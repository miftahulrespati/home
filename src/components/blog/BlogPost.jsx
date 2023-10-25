import React, { useEffect } from "react";
import { useParams } from "react-router";
import moment from "moment";
import bloglist from "../../editable-stuff/blog";
const BlogPost = () => {
  const { id } = useParams();
  const post = bloglist[id];

  function Title(title) {
    useEffect(() => {
      document.title = `${title} - The Wired Thoughts`;
    }, [title]);
  }

  if (post) Title(post.title);
  else Title("Not found");

  return (
    <>
      {post ? (
        <div
          className={`container my-5 pb-3
                      bg-light rounded 
                      border-top border-5 rounded border-dark
                      shadow-lg`}
          style={{ maxWidth: "90%" }}
        >
          <div className="container-md" style={{ maxWidth: "960px" }}>
            <h1 className="display-5 text-center pt-5">{post.title}</h1>
            <p className="text-center">
              {moment(post.publishedDate).format("DD MMMM YYYY")}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="img-fluid m-5 rounded"
                src={post.cover}
                alt={post.title}
                style={{ width: "70%" }}
              />
            </div>
            <div>{post.getBlog()}</div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="display-1 text-center m-5 text-dark">
            404 <br />
            Page not found
          </h1>
          <div
            className="row justify-content-around mx-auto"
            style={{ width: "60%" }}
          >
            <a
              href={"/"}
              className="btn btn-outline-secondary my-3 mx-auto col-lg-4"
            >
              <i className="fa fa-home" /> Back to Portfolio
            </a>
            <a
              href={"/#/blog"}
              className="btn btn-outline-secondary my-3 mx-auto col-lg-4"
            >
              <i className="fas fa-paper-plane" /> THE WIRED THOUGHTS
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPost;
