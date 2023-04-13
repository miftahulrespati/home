import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCardCustom = ({ value }) => {
  const { id, title, cover, description } = value;
  return (
    <Col lg={6}>
      <a href={`/#/blog/${id}`} style={{ textDecoration: "none" }}>
        <Card className="card shadow-lg p-3 mb-5 bg-white rounded text-dark">
          <Card.Body>
            <Card.Title
              style={{
                display: "flex",
                alignItems: "center",
                height: 75,
              }}
              as="h4"
            >
              {title}
            </Card.Title>
            <hr />
            <Card.Text
              style={{
                minHeight: 80,
              }}
            >
              <span
                className="mt-3"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {description}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default ProjectCardCustom;
