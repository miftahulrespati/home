import React from "react";

import { Jumbotron } from "./migration";

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    setProfilePicUrl(link);
  }, [link]);

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-lg-5 text-center d-block d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle img-fluid mb-3"
              src={profilePicUrl}
              alt="profilepicture"
              style={{ maxHeight: imgSize }}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p style={{ fontSize: 16 }} className="lead text-center">
            {message}
          </p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
