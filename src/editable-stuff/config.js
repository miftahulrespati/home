// Navigation Bar SECTION
const navBar = {
  show: false,
};

const messagesArray = [
  "Try your best to achieve your dreams.",
  "Everyday is learning day.",
  "Be the best version of yourself.",
  "Once you've met someone, you never really forget them.",
  "The Earth speaks to all of us, and if we listen, we can understand.",
  "Life is suffering. It is hard. But still, you find reasons to keep on living.",
  "Nothing that happens is ever forgotten, even if you can't remember it.",
  "Be careful, this may be a dream but you can still lose your head!",
  "The world is cruel, but I still love you.",
  "Same things make us laugh, make us cry.",
  "Just be careful who you change into.",
  "You know, I'm something of a scientist myself.",
  "Sticks and stones might break your bones, but words can break your heart.",
  "Why do we fall? So we can learn to pick ourselves up.",
  "Sumbangsihku 'tak berharga. Namun, keikhlasanku nyata.",
  "The wound is the place where the light enters you.",
  "Love is composed of a single soul inhabiting two bodies.",
];

// Main Body SECTION
const mainBody = {
  gradientColors: "#0F2027, #203A43, #2C5364, #3E5151",
  firstName: "Miftahul",
  middleName: "",
  lastName: "Respati",
  messages: messagesArray,
  icons: [
    {
      image: "fab fa-github",
      url: "https://github.com/miftahulrespati/",
    },
    {
      image: "fab fa-instagram",
      url: "https://instagram.com/miftahulrespati/",
    },
    {
      image: "fab fa-linkedin",
      url: "https://linkedin.com/in/miftahulrespati?trk=public_profile_locale-url",
    },
    // {
    //   image: "fas fa-laptop",
    //   url: "https://www.upwork.com/freelancers/~01e71cc17d90dda278",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/miftahulrespati.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./miftahulrespati.png"),
  imageSize: 375,
  message: (
    <>
      Hi there! Welcome to my portfolio.
      <br />
      <br />
      I enjoy taking on challenging problems; nothing is more satisfying than
      seeing a project come together flawlessly. Although I cannot promise that
      every line of code I write will be bug-free, I will put in countless hours
      of hard work to ensure my code is as clean and efficient as possible.
      <br />
      <br />
      When I am not busy coding, I love cooking and hanging out with my cats.
    </>
  ),
  resume: null,
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Highlighted Repository",
  gitHubUsername: "miftahulrespati", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["fullstackopen"],
};

const projects = {
  show: true,
  heading: "Projects Involved",
  data: [
    {
      name: "OneHCM",
      description: `OneHCM is an end-to-end HR application that provides robust, configurable solutions for various HR transactions.`,
      client: "Diverse Industries",
      partOf: "WCS",
      role: "Front-end Developer",
      links: [{ anchor: "OneHCM.id", url: "https://www.onehcm.id/" }],
      contributions: [
        "Developed new features, menus, and pages based on client requirements.",
        "Convert, refactor, and optimize *100+ files* of Class Component React.js into Functional Components with `React Hooks`.",
        "Upgraded the project’s React version to ensure compatibility with modern features and best practices.",
        "Collaborated with front-end developers, using `Git` to manage *version control* and prevent code conflicts.",
      ],
      technologies: ["React.js"],
    },
    {
      name: "OneHCM Face Recognition API",
      description: `Face recognition API for secure clock-in features in OneHCM, improving employee time tracking accuracy.`,
      client: "Diverse Industries",
      partOf: "WCS",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Developed a *face recognition API* using the `face_recognition` library.",
        "Optimized processing speed by up to *20%*, by utilizing `ProcessPoolExecutor`.",
        "Reduced Docker image size by up to *60%* using *multi-stage builds*, `python-slim`, removing unused dependencing.",
        "Implemented *CI/CD pipelines in Azure DevOps*, streamlining automated deployments.",
        "Applied *JWT-based authorization* (`pyjwt`) to enhance security and access control.",
        "Cache *token JWKS* responses using `TTLCache`.",
        "*Stress testing* using `Apache JMeter`",
        "Built *API documentation* using `OpenAPI (Swagger)`.",
      ],
      technologies: ["Python", "Flask", "OpenCV"],
    },
    {
      name: "OneHCM OpenAI (ChatGPT) API",
      description: `OpenAI (ChatGPT) integration for AI-powered data analysis in OneHCM.`,
      client: "Diverse Industries",
      partOf: "WCS",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Develop *AI-Powered data analysis* system.",
        "Integrated the API with the `OpenAI Platform (ChatGPT)`.",
      ],
      technologies: ["Python", "Flask", "OpenAI Platform"],
    },
    {
      name: "Matahari Supplier Portal",
      description: `Designed for Matahari Department Store and vendors to place direct orders, track order status, and receive reports.`,
      client: "Matahari Department Store",
      partOf: "VisioNet",
      role: "Full-stack Developer",
      links: null,
      contributions: [
        "Maintained and fixed bugs in the *legacy* `ASP.NET Framework` application to ensure stability.",
        "Migrated from ASP.NET Framework to `React.js (TypeScript)` and `.NET 6`, modernizing the platform.",
        "Implemented `Entity Framework` for efficient database interaction.",
        "Applied `Dependency Injection` to improve code maintainability and scalability.",
        "Integrated with external platforms via *XML file transfers over SFTP*.",
        "Automated scheduled tasks using `crontab`, optimizing background job execution.",
      ],
      technologies: ["C#", ".NET", "React TypeScript", "PostgreSQL"],
    },
    {
      name: "Matahari Companion Portal",
      description: `Facilitate the management of consignment supplies for both vendors and Matahari Department Store.`,
      client: "Matahari Department Store",
      partOf: "VisioNet",
      role: "Full-stack Developer",
      links: null,
      contributions: [
        "Developed and maintained the application using `Entity Framework` for efficient database management.",
        "Applied `Dependency Injection` to improve code maintainability and scalability.",
        "Deployed applications to production `Linux` servers.",
        "Managed `nginx` as a reverse proxy",
        "Automated scheduled tasks using `crontab`, optimizing background job execution.",
      ],
      technologies: ["C#", ".NET", "React.js", "MySQL", "Linux Server"],
    },
    {
      name: "Mitsubishi Sales Force ID",
      description: `Provides information about products and other information regarding sales of Mitsubishi Motors vehicles to assist the sales process.`,
      client: "PT Berlian Sistem Indonesia",
      partOf: "Refactory.id",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Maintained and enhanced a console application using `C# / .NET Core 3.1`.",
        "Developed a *task scheduler* to automate the execution of `stored procedures`.",
      ],
      technologies: ["C#", ".NET", "Microsoft SQL Server"],
    },
    {
      name: "MMKSI Vehicle Tracking System",
      description: `Developed to monitor the sending of fleets from the MMKSI carpool to dealers spread throughout Indonesia. 
        This system is intended to provide real-time information related to the delivery process.`,
      client: "PT Berlian Sistem Indonesia",
      partOf: "Refactory.id",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Developed APIs to support both mobile and web applications.",
        "Created and optimized `stored procedures`, ensuring efficient database operations and query performance.",
        "Debugged and fixed issues in stored procedures.",
        "Integrate with `Google Firebase` for real-time location tracking.",
      ],
      technologies: ["C#", ".NET", "Microsoft SQL Server", "Google Firebase"],
    },
    {
      name: "Mister Aladin - Badges Feature",
      description: `New feature of Misteraladin App to show badges, e.g. promotion, on flight and train tickets.`,
      client: "MNC Group",
      partOf: "Refactory.id",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Implemented functionality to fetch and manage images from `AWS S3 Storage`.",
        "Utilized `Eloquent ORM` to interact with a MySQL database, optimizing data queries.",
      ],
      technologies: ["PHP", "Laravel", "MySQL", "AWS S3 Storage"],
    },
    {
      name: "Aladinmall Seller Center",
      description: `Aladin Mall is the first e-commerce and media platform under MNC Group. 
        The feature being worked on in this project is the Seller Center, a store management platform used by shop owners.`,
      client: "MNC Group",
      partOf: "Refactory.id",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Developed and maintained backend services using `Node.js` with `AWS Amplify`.",
        "Integrated `GraphQL` to handle API queries and data fetching.",
        "Worked with `DynamoDB` for NoSQL data storage.",
      ],
      technologies: [
        "Node.js",
        "AWS Amplify",
        "DynamoDB",
        "Magento",
        "GraphQL",
      ],
    },
    {
      name: "Siap Ukur ATR/BPN",
      description: `Application for ATR/BPN Kanwil Provinsi Kalimantan Timur to improve service quality and data management.`,
      client: "ATR/BPN Kalimantan Timur",
      partOf: "Refactory.id",
      role: "Full-stack Developer",
      links: null,
      contributions: [
        "Developed and maintained using `Lumen (Laravel)`, implementing the *MVC* architecture.",
        "Built and optimized `FilamentPHP` components to enhance admin panel functionality.",
        "Integrated the system with `Metabase` for real-time data visualization and analytics.",
      ],
      technologies: ["PHP", "Lumen (Laravel)", "PostgreSQL", "Metabase"],
    },
    {
      name: "Lion Parcel",
      description: `Web and mobile app to meet the needs of the logistics company, especially in tracking and claim features.\n
        Another feature is Bisa Belanja, a shopping platform with delivery throughout Indonesia.`,
      client: "Lion Parcel",
      partOf: "Refactory.id",
      role: "Back-end Developer",
      links: null,
      contributions: [
        "Implemented `concurrency` in Go, optimizing performance.",
        "Developed and maintained a *microservice* architecture.",
        "Utilized `Redis` for caching and improving data retrieval speed.",
      ],
      technologies: ["Go", "PostgreSQL", "Redis"],
    },
    {
      name: "Veranita Wang Portfolio Website",
      description: `A semi-personal portfolio website owned by beauty influencer Veranita Wang.`,
      client: "Veranita Wang",
      partOf: null,
      role: "Wordpress Developer",
      links: [{ anchor: "Veranita Wang", url: "https://veranitawang.com" }],
      contributions: [
        "Managed *hosting, domain, and cPanel*.",
        "Developed and customized the website using *WordPress with Oxygen Web Builder*.",
      ],
      technologies: ["Wordpress", "Oxygen Web Builder"],
    },
  ],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    {
      name: "C# / .NET",
      value: require("../assets/icon/dotnet-logo.png"), // source: https://github.com/dotnet/brand/tree/main
      isImage: true,
    },
    { name: "React.js", value: "fab fa-react", isImage: false },
    { name: "Python", value: "fab fa-python", isImage: false },
    {
      name: "TypeScript",
      value: require("../assets/icon/ts-logo-128.png"), // source: https://www.typescriptlang.org/branding/
      isImage: true,
    },
    { name: "PHP / Laravel", value: "fab fa-laravel", isImage: false },
    {
      name: "Go",
      value: require("../assets/icon/Go-Logo_Aqua.png"), // source: https://go.dev/blog/go-brand
      isImage: true
    },
    { name: "HTML & CSS", value: "fas fa-file-code", isImage: false },
    { name: "SQL and RDBMS", value: "fas fa-database", isImage: false },
    { name: "Git", value: "fab fa-git-square", isImage: false },
    { name: "Docker / Containerization", value: "fab fa-docker", isImage: false },
    { name: "Azure DevOps Pipeline", value: "fas fa-infinity", isImage: false },
    { name: "Linux based OS", value: "fab fa-linux", isImage: false },
  ],
  softSkills: [
    {
      name: "EF SET English 76/100",
      value: "fas fa-language",
      isImage: false,
      link: "https://www.efset.org/cert/Pk93B4/",
    },
    { name: "Strong logical thinking", value: "fas fa-cog", isImage: false },
    { name: "Problem solving", value: "fas fa-lightbulb", isImage: false },
    { name: "Decision making", value: "fas fa-marker", isImage: false },
    { name: "Loving", value: "fas fa-heart", isImage: false },
  ],
  otherSkills: [
    {
      name: "Engineering drawing",
      value: "fas fa-pencil-ruler",
      isImage: false,
    },
    { name: "Electrical engineering", value: "fas fa-bolt", isImage: false },
    { name: "PCB design", value: "fas fa-microchip", isImage: false },
    {
      name: "Pneumatic system",
      value: "fas fa-angle-double-up",
      isImage: false,
    },
    { name: "PLC programming", value: "fas fa-list", isImage: false },
    {
      name: "Radiation safety (Certified)",
      value: "fas fa-shield-alt",
      isImage: false,
    },
    {
      name: "NDT (Certified Industrial Radiographer)",
      value: "fas fa-weight",
      isImage: false,
    },
    {
      name: "Pencak silat enthusiast",
      value: "fas fa-user-ninja",
      isImage: false,
    },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: `Thanks for taking the time to stop by, and I hope you enjoy your visit!
            Please don't hesitate to reach out at`,
  email: "hello@miftahulrespati.com",
};

const experiences = {
  show: true,
  heading: "Developer Experience",
  data: [
    {
      role: "Full-stack Developer | Technical Consultant",
      companylogo: require("../assets/img/wcs.png"),
      date: "March 2024 - Present",
    },
    {
      role: "Full-stack Developer | IT Support",
      companylogo: require("../assets/img/visionet.png"),
      date: "Dec 2022 - Nov 2023",
    },
    {
      role: "Full-stack Developer",
      companylogo: require("../assets/img/refactory.png"),
      date: "Nov 2021 - Oct 2022",
    },
  ],
};

const otherExperiences = {
  show: true,
  heading: "Other Experience",
  data: [
    {
      role: "Electrical Engineer | PLC Programmer",
      companylogo: require("../assets/img/alpha.jpg"),
      date: "Feb 2021 - May 2021",
    },
    {
      role: "Radiation Safety Officer",
      companylogo: require("../assets/img/bonne.png"),
      date: "Dec 2020",
    },

    {
      role: "Student Intern | Instrumentation Sub-Department",
      companylogo: require("../assets/img/medco.png"),
      date: "Jul 2019 - Aug 2019",
    },
  ],
};

const otherProjects = {
  show: true,
  heading: "Other Projects, Volunteer, etc",
  data: [
    {
      name: "Design of Instrumentation and Control System on Kartini Reactor Simulator",
      description: `
      Undergraduate final project.
      Reactors require Instrumentation and Control (I&C) and Reactor Protection System (RPS) to operate safely.
      Built I&C and RPS of the simulator display phenomena resembling the Kartini Reactor.
      `,
      client: null,
      partOf: null,
      links: null,
      technologies: ["Electrical Engineering", "Proteus", "Arduino"],
    },
    {
      name: "Committee Head of Student Industrial Visit by Electro Mechanics Students Community",
      description: `
      Successfully organized and led three batches of students on industrial visits to PT INKA Persero, Madiun, Indonesia,
      resulting in increased knowledge and understanding of the manufacturing process.
      `,
      client: null,
      partOf: null,
      links: null,
      technologies: null,
    },
  ],
};
// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  projects,
  skills,
  getInTouch,
  experiences,
  otherExperiences,
  otherProjects,
};
