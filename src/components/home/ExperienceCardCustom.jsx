import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="pb-3 text-center">
        <div className="d-flex align-self-center row" style={{ height: 100 }}>
          <img
            className="bg-white my-auto"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
            src={data.companylogo}
            alt=""
          />
        </div>
        <p className="">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
