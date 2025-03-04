const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL =
  "https://github.com/miftahulrespati/miftahulrespati.github.io.git";
const commitMessage = "Add role per project";

ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
    message: commitMessage || "Updates",
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log(`PUBLISHED: ${commitMessage || "Updates"}`);
  }
);
