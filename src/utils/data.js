export const SKILLS = [
  {
    title: "Frontent",
    icon: "/assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3", percentage: "80%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "React.js", percentage: "75%" },
      { skill: "TypeScript", percentage: "70%" },
    ],
  },
  {
    title: "Backend",
    icon: "/assets/images/backend-icon.png",
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/tools-icon.png",
    skills: [
      { skill: "GitHub", percentage: "85%" },
      { skill: "Git", percentage: "70%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Responsive Design", percentage: "75%" },
    ],
  },
  {
    title: "Personal Skills",
    icon: "/assets/images/skills-icon.png",
    skills: [
      { skill: "Problem Solving", percentage: "90%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Details", percentage: "80%" },
      { skill: "Creativity", percentage: "90%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "JKPGCITY-TOUR (Full Stack Web App)",
    details: [
      "Utilized npm packages like express, cors, bcrypt, jsonwebtoken, pg (PostgreSQL client for Node.js), dotenv for environment variables, and puppeteer for web scraping.",
      "Implemented a RESTful API with Express.js to handle server-side calls and facilitate communication between the backend and frontend.",
      "Developed a server-side backend to manage CRUD (Create, Read, Update, Delete) operations. Admins have full access to edit stores, and guest users have limited access.",
      "Implemented authentication for admins using JWT (JSON Web Tokens). Admins can create an account by providing a referral code (224466) for added security.",
      "Dockerized the application for easy deployment and scalability, with a setup for Kubernetes (K8s) for local development and cloud deployment.",
      "Deployed the backend on Google Cloud Platform (GCP) and connected it to a PostgreSQL instance on Google Cloud for data storage and management.",
      "Frontend is deployed separately using Netlify and communicates with the backend via REST API requests identified by CORS headers.",
      "Frontend dependencies include react, react-dom, react-router-dom for routing, bootstrap for styling, d3 for data visualization, and testing libraries such as @testing-library/jest-dom, @testing-library/react, and @testing-library/user-event.",
      "Backend dependencies include bcrypt for password hashing, cors for enabling CORS (Cross-Origin Resource Sharing), dotenv for loading environment variables, express for building the web server, jsonwebtoken for JWT authentication, pg for PostgreSQL database interaction, and puppeteer for web scraping.",
    ],
    link: "https://jkpgcity-tour-mockup.netlify.app/",
    github: "https://github.com/OtaiprO/jkpgcity-tour",
  },
  {
    title: "Current Portfolio Web App",
    details: [
      "Uses (React - TypeScript - CSS - Slick api)",
      "Responsive",
      "Has multiple components and components within components",
      "Smooth scrolling function while navigating using Nav bar",
      "Clean interactive UI with good UX",
      "Projects and Skills are stored in utils > data.js",
    ],
    link: "",
    github: "https://github.com/OtaiprO/Portfolio",
  },

  {
    title: "Shows Suggestions Service",
    details: [
      "Utilized npm packages like express, express-handlebars, body-parser, sqlite3, express-session, and bcrypt.",
      "Lo-fi GUI provides navigation and elements users can expect",
      "Admins have full CRUD (Create, Read, Update, Delete) access, while guest users can only suggest new titles.",
      "Main application app.js connects to four extended app routers: animes-router.js, tv-shows-router.js, suggestions-router.js, and movies-router.js",
      "Each router handles a specific type of motion picture show type",
      "Relational database with four tables: movies, animes, tvshows, and suggestions",
      "Validation constraints for attributes like name, story, rating, released date, and picture",
      "Intuitive design for user interaction",
      "Login to use website as admin. Username - abod, Password - abc123.",
    ],
    link: "https://shows-suggestions-service-mlhnrigwpa-ez.a.run.app",
    github: "https://github.com/OtaiprO/Express-Shows-Suggestions-App",
  },
  {
    title: "Particles System Generative Art Piece",
    details: [
      "Uses (JavaScript - PIXI.js - HTML - CSS)",
      "Made for the Creative Coding Project",
      "The system has views which uses particles and are genereated using text",
      "Fetches Jönköping's temprature and the used device local time to immpact the render, when rerenring you are guaranteed to get different art",
      "The colour palette will depend on your time (Houre, Minute, Seconds) and Jönköping's temprature",
      "Use mouce crusor to move the particles around for more fun experience",
    ],
    link: "https://otaipro.github.io/Particles-System-Generative-Art/",
    github: "https://github.com/OtaiprO/Particles-System-Generative-Art",
  },
  {
    title: "Creative Coding Generative Art Portfolio",
    details: [
      "Uses (JavaScript - HTML - CSS - Tune.js)",
      "Made for the Creative Coding course, a collection of JS AI generative art pieces",
      "The code is comples, some pieces uses flow fields with particles/agents some uses L-system with extra touches to generate trees, and more! ",
      "Really fun wiith interesting results",
    ],
    link: "https://OtaiprO.github.io/Creative-Coding-Portfolio",
    github: "https://github.com/OtaiprO/Creative-Coding-Portfolio",
  },
  {
    title: "Will Of Fire (Java Script Game)",
    details: [
      "Uses (JavaScript - HTML - CSS )",
      "Made in my first university year when I first learned JS for the JS course projct, made it alone in 3 days and got 5 from 5 on it",
      "Has simple enemy AI where they follow closest emey and have different attacks",
      "Creative use of the (for) loops to show the health bar",
      "Amazing and clear UI and UX",
      "Uses JSON Stringify and Parse to store score board data into the cookies",
      "Connects JS with Html, like create ul/li elements using JS",
    ],
    link: "https://OtaiprO.github.io/Will-Of-Fire-JS-game",
    github: "https://github.com/OtaiprO/Will-Of-Fire-JS-game",
  },
];
