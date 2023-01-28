import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCardCustom = ({ value }) => {
  const { name, description, client, partOf, links, technologies } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h4">{name} </Card.Title>
          {partOf && <Card.Subtitle >as part of {partOf}</Card.Subtitle>}
          <Card.Text className="mt-3">{description}</Card.Text>
          {links && <CardButtons links={links} />}
          <hr />
          {<Technology technologies={technologies} />}
          {value ? <CardFooter client={client} /> : <Skeleton />}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ links }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
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
    </div>
  );
};

const Technology = ({ technologies }) => {
  return (
    <div className="pb-3">
      Technologies:
      {technologies.map((technology) => (
        <span key={technology} className="badge bg-light text-dark mx-1">{technology}</span>
      ))}
    </div>
  );
};

const CardFooter = ({ client }) => {
  return (
    <p className="card-text">
      <small className=" text-muted mr-4">
        <i className="fas fa-user pr-4" />
        Client: {client}
      </small>
    </p>
  );
};

export default ProjectCardCustom;
