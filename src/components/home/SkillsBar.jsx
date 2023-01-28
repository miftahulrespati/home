import React from "react";

function SkillsBar({ skill, value, isImage }) {
  return (
    <tr>
      <td width={30} align="center">
        <span className="lead">
          {isImage ? (
            <img src={value} style={{ width: 20 }} alt="icon" />
          ) : (
            <i className={value} />
          )}
        </span>
      </td>
      <td className="pl-2">{skill}</td>
    </tr>
  );
}

export default SkillsBar;
