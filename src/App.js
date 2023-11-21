import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences,
  projects,
  otherExperiences,
  otherProjects,
} from "./editable-stuff/config.js";
import bloglist from "./editable-stuff/blog-config.jsx";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import ProjectCustom from "./components/home/ProjectCustom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";
import BlogSection from "./components/home/BlogSection.jsx";
import Experience from "./components/home/Experience";
import ExperienceCustom from "./components/home/ExperienceCustom";

const Home = React.forwardRef((props, ref) => {
  let filter = [];

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  var blogObj = Object.keys(bloglist);
  if (blogObj.length > 2) {
    var random = shuffle(Array.from(Array(blogObj.length).keys()));

    let obj0 = bloglist[blogObj[random[0]]];
    let obj1 = bloglist[blogObj[random[1]]];

    filter[obj0.id] = obj0;
    filter[obj1.id] = obj1;
  } else {
    filter = bloglist;
  }

  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        messages={mainBody.messages}
        icons={mainBody.icons}
        innerref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experiences.show && <Experience experiences={experiences} />}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {projects.show && (
        <ProjectCustom heading={projects.heading} projects={projects.data} />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
          otherSkills={skills.otherSkills}
        />
      )}
      {Object.keys(bloglist).length > 0 && (
        <BlogSection heading={"BLOG"} blogs={filter} />
      )}
      {otherExperiences.show && (
        <ExperienceCustom experiences={otherExperiences} />
      )}
    </>
  );
});

const Default = React.forwardRef((props, ref) => {
  return (
    <>
      <Home ref={ref} />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <HashRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar innerref={titleRef} />}
      <Routes>
        <Route path="/" exact element={<Default ref={titleRef} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
