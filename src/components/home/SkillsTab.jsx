import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills }) {
  return (
    <table width={"70%"}>
      <tbody>
        {skills.map((skill, index) => (
          <SkillsBar
            key={`${skill}-${index}`}
            skill={skill.name}
            value={skill.value}
            isImage={skill?.isImage}
          />
        ))}
      </tbody>
    </table>
  );
}

function SkillsTab({ skills }) {
  const n = 3;
  const result = [[], [], []];
  const itemsPerLine = Math.ceil(skills.length / 3);
  for (let line = 0; line < n; line++) {
    for (let i = 0; i < itemsPerLine; i++) {
      const value = skills[i + line * itemsPerLine];
      if (!value) continue; //avoid adding "undefined" values
      result[line].push(value);
    }
  }
  return (
    <>
      <Col xs={12} md={4}>
        <SkillsSection skills={result[0]} />
      </Col>
      <Col xs={12} md={4}>
        <SkillsSection skills={result[1]} />
      </Col>
      <Col xs={12} md={4}>
        <SkillsSection skills={result[2]} />
      </Col>
    </>
  );
}

export default SkillsTab;
