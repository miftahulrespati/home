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
      image: "fa-github",
      url: "https://github.com/miftahulrespati/",
    },
    {
      image: "fa-instagram",
      url: "https://instagram.com/miftahulrespati/",
    },
    {
      image: "fa-linkedin",
      url: "https://id.linkedin.com/in/miftahulrespati?trk=public_profile_browsemap/",
    },
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
  imageLink: require("../editable-stuff/miftahulrespati.png"),
  imageSize: 375,
  message:
    "Hardworking engineer graduated with a Bachelor of Applied Engineering in Electro-Mechanics from Polytechnic Institute of Nuclear Technology (STTN-BATAN). Aiming to leverage my academic experience and proven knowledge of engineering and logical thinking to be an excellent developer.",
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
      name: "Supplier Portal",
      description:
        "Web application used by Matahari Department Store and vendors for supply management.",
      client: "Matahari Department Store",
      partOf: "VisioNet",
      links: null,
      technologies: ["C#", ".NET", "React.js"],
    },
    {
      name: "Mitsubishi Sales Force ID",
      description:
        "An application from PT Mitsubishi Motors Krama Yudha Sales Indonesia (MMKSI) which provides information about products and other information regarding sales of Mitsubishi Motors vehicles to assist the sales process.",
      client: "PT Berlian Sistem Indonesia",
      partOf: "Refactory.id",
      links: null,
      technologies: ["C#", ".NET", "Microsoft SQL Server"],
    },
    {
      name: "MMKSI Vehicle Tracking System",
      description:
        "A system developed to monitor the sending of fleets from the MMKSI carpool to dealers spread throughout Indonesia. This system is intended to provide real-time information related to the delivery process. The mobile application will be used by drivers who make deliveries, then it will send the driver's current location to be displayed in the tracking system in our web application.",
      client: "PT Berlian Sistem Indonesia",
      partOf: "Refactory.id",
      links: null,
      technologies: ["C#", ".NET", "Microsoft SQL Server", "Google Firebase"],
    },
    {
      name: "Misteraladin feature: badges",
      description:
        "New feature of the Misteraladin to show badges, e.g. promotion, on flight and train tickets.",
      client: "MNC Group",
      partOf: "Refactory.id",
      links: null,
      technologies: ["PHP", "Laravel", "MySQL"],
    },
    {
      name: "Aladinmall Seller Center",
      description:
        "Aladin Mall is the first e-commerce and media platform under MNC Group. The feature being worked on in this project is the Seller Center, a store management platform used by shop owners.",
      client: "MNC Group",
      partOf: "Refactory.id",
      links: null,
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
      description:
        "Application for ATR/BPN Kanwil Provinsi Kalimantan Timur to improve service quality and file management.",
      client: "ATR/BPN Kalimantan Timur",
      partOf: "Refactory.id",
      links: null,
      technologies: ["PHP", "Laravel", "PostgreSQL", "Metabase"],
    },
    {
      name: "Lion Parcel",
      description:
        "Web and mobile app to meet the needs of the logistics company, especially in tracking and claim features.\nAnother feature is Bisa Belanja, a shopping platform with delivery throughout Indonesia.",
      client: "Lion Parcel",
      partOf: "Refactory.id",
      links: null,
      technologies: ["Go", "PostgreSQL"],
    },
    {
      name: "Veranita Wang Portfolio Website",
      description:
        "A portfolio and semi-personal website owned by beauty influencer Veranita Wang.",
      client: "Veranita Wang",
      partOf: null,
      links: [{ anchor: "Veranita Wang", url: "https://veranitawang.com" }],
      technologies: ["Wordpress"],
    },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/miftahulrespati.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/miftahulrespati.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills and Other",
  hardSkills: [
    { name: "JavaScript", value: "fab fa-js", isImage: false },
    { name: "React", value: "fab fa-react", isImage: false },
    { name: "HTML / CSS", value: "fas fa-file-code", isImage: false },
    {
      name: "C#",
      value: require("../assets/icon/csharp.png"), // source: "https://icons8.com/icon/55204/c-sharp-logo"
      isImage: true,
    },
    { name: "Go", value: require("../assets/icon/go.png"), isImage: true },
    { name: "PHP / Laravel", value: "fab fa-laravel", isImage: false },
    {
      name: "GraphQL",
      value: require("../assets/icon/graphql.png"),
      isImage: true,
    },
    { name: "SQL and RDBMS", value: "fas fa-database", isImage: false },
  ],
  softSkills: [
    {
      name: "EF SET English 76/100",
      value: "fas fa-language",
      isImage: false,
    },
    { name: "Strong logical thinking", value: "fas fa-cog", isImage: false },
    { name: "Problem solving", value: "fas fa-lightbulb", isImage: false },
    { name: "Decision making", value: "fas fa-marker", isImage: false },
    { name: "Loving", value: "fas fa-heart", isImage: false },
  ],
  otherExperiences: [
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
    { name: "Radiation safety", value: "fas fa-shield-alt", isImage: false },
    {
      name: "NDT",
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
  message: "Looking for a freelancer? Hit me!",
  email: "miftahulrespati@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Fullstack Developer | IT Support",
      companylogo: require("../assets/img/visionet.png"),
      date: "Dec 2022 - Present",
    },
    {
      role: "Web Developer | Software Engineer",
      companylogo: require("../assets/img/refactory.png"),
      date: "Nov 2021 - Oct 2022",
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
  leadership,
  getInTouch,
  experiences,
};
