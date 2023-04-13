import React from "react";
import { useParams } from "react-router";
import bloglist from "../../editable-stuff/blog";
const BlogPost = () => {
  const { id } = useParams();
  const post = bloglist[id];

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
            <h1 className="display-4 text-center pt-5">{post.title}</h1>
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
        <h1 className="display-1 text-center m-5 text-light">
          404 - Page not found
        </h1>
      )}
    </>
  );
};

export default BlogPost;
