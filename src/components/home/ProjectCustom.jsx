import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCardCustom from "./ProjectCardCustom";

const ProjectCustom = ({ heading, projects }) => {
  let data = new Array(projects.length);
  for (let i = 0; i < projects.length; i++) {
    data[i] = projects[i];
  }

  return (
    <Jumbotron fluid id="project-customs" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {data.map((project, index) => {
            return <ProjectCardCustom
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />;
          })}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default ProjectCustom;
