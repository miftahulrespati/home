import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCardCustom = ({ value }) => {
  const { name, description, client, partOf, links, technologies } = value;
  return (
    <Col lg={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h4">{name} </Card.Title>
          <Card.Subtitle>
            {partOf ? `as part of ${partOf}` : <br />}
          </Card.Subtitle>
          <Card.Text className="mt-3" style={{ minHeight: 110 }}>
            {description}
            {links && <CardButtons links={links} />}
          </Card.Text>
          <hr />
          <div className="my-3" style={{ height: 42 }}>
            {technologies && <Technology technologies={technologies} />}
          </div>
          {value.client ? <CardFooter client={client} /> : <Skeleton />}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ links }) => {
  return (
    <span className="d-grid gap-2 my-3 d-md-block">
      {/* {d - md - block} */}
      {links.map((link, index) => {
        return (
          <a
            key={`${link.anchor}-${index}`}
            href={link.url}
            target=" _blank"
            className="btn btn-outline-secondary mx-2"
          >
            <i className="fas fa-external-link-alt" /> {link.anchor}
          </a>
        );
      })}
    </span>
  );
};

const Technology = ({ technologies }) => {
  return (
    <div className="pb-3">
      Technologies:
      {technologies.map((technology) => (
        <span key={technology} className="badge bg-light text-dark mx-1">
          {technology}
        </span>
      ))}
    </div>
  );
};

const CardFooter = ({ client }) => {
  return (
    <p className="card-text">
      <small className=" text-muted mr-4">
        <i className="fas fa-user pr-4" /> Client: {client}
      </small>
    </p>
  );
};

export default ProjectCardCustom;
