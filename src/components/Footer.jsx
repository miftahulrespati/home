import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        {"Template forked from "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/hashirshoaeb/home"
          aria-label="My GitHub"
        >
          <span className="badge bg-dark">Hashir Shoaib</span>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
