import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import BlogCard from "./BlogCard";

const BlogSection = ({ heading, blogs }) => {
  return (
    <Jumbotron fluid id="blog-customs" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {Object.entries(blogs).map(([id, blog]) => {
            return <BlogCard key={id} id={id} value={blog} />;
          })}
        </Row>
        <span className="d-flex justify-content-center">
          <a
            href={"/#/blog"}
            className="btn btn-outline-secondary mx-auto"
            // style={{ width: "" }}
          >
            <i className="fas fa-paper-plane" /> To The WIRED THOUGHTS
          </a>
        </span>
      </Container>
    </Jumbotron>
  );
};

export default BlogSection;
