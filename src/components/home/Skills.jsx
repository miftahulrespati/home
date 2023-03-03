import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";

const Skills = React.forwardRef(
  ({ heading, hardSkills, softSkills, otherSkills }, ref) => {
    const skillsTabRef = React.useRef(null);
    return (
      <Jumbotron
        innerref={skillsTabRef}
        fluid
        className="bg-white m-0"
        id="skills"
      >
        <Container className="p-5 ">
          <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
            {heading}
          </h2>
          <Tabs
            className="skills-tabs"
            defaultActiveKey="hard-skills"
            id="skills-tabs"
            fill
            justify
          >
            <Tab
              tabClassName="skills-tab lead"
              // border-bottom-0 bg-white"
              eventKey="hard-skills"
              title="Technical Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={hardSkills} />
              </Row>
            </Tab>
            <Tab
              tabClassName="skills-tab lead"
              // border-bottom-0 bg-white"
              eventKey="soft-skills"
              title="Soft Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={softSkills} />
              </Row>
            </Tab>
            <Tab
              tabClassName="skills-tab lead"
              // border-bottom-0 bg-white"
              eventKey="others"
              title="Other Interests"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={otherSkills} />
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </Jumbotron>
    );
  }
);

export default Skills;
