export interface SocialMedia {
  linkedin: string;
  github: string;
  twitter: string;
}

export interface SiteMetadata {
  author: string;
  title: string;
  socialMedia: SocialMedia;
  contactMe: string;
  jobTitle: string;
  geoLocation: string;
  blogLink: string;
  readonly seoDescription: string;
}

export interface Role {
  title: string;
  startDate: string;
  endDate: string;
  duration: string;
  achievements: string[];
}

export interface Experience {
  id: string;
  company: string;
  roles: Role[];
  location: string;
  overallDuration: string;
  technologies: string[];
  description?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  location: string;
}

export interface Skill {
  name: string;
  level: "specialist" | "advanced" | "intermediate";
}

export const siteMetadata: SiteMetadata = {
  author: "Christian Arty",
  title: "Christian Arty - Senior Software Engineer",
  socialMedia: {
    linkedin: "https://www.linkedin.com/in/christianarty/",
    github: "https://github.com/christianarty",
    twitter: "https://twitter.com/christian_arty",
  },
  contactMe: "contact@christianarty.com",
  jobTitle: "Senior Software Engineer @ LinkedIn",
  geoLocation: "New York, NY",
  blogLink: "https://blog.christianarty.com",
  get seoDescription() {
    return (
      this.title +
      " | Javascript Expert | I create fast and reliable user interfaces and experiences to provide your customers the best experience possible."
    );
  },
};

export const aboutSection = {
  headline:
    "Senior Software Engineer at LinkedIn | Product Engineer | Innovation-Driven, Quality-Focused, Outcome-Oriented",
  bio: `I’m a Product Engineer who turns complex ideas into intuitive experiences, shipping with quality by default.

I have deep roots in front-end and modern web technologies, where I’ve spent years building polished, performant user experiences. I don't stay in one lane; whether it’s platform infrastructure, backend systems, or the user experience, I take ownership beyond the front end to help the product evolve and teams move faster.

Regardless of the layer, my approach is the same: dive deep into ambiguous problems, uncover root causes, and craft durable solutions. I don’t just optimize code; I optimize for the success of the product and the people using it.

If you’re building products where experience, quality, and execution matter, let’s connect.`,
};

export const experiences: Experience[] = [
  {
    id: "linkedin",
    company: "LinkedIn",
    overallDuration: "Mar 2022 - Present · 3 yrs 10 mos",
    location: "Sunnyvale, California, United States · Remote",
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "TypeScript",
      "Redux",
      "Testing",
      "CI/CD",
    ],
    roles: [
      {
        title: "Senior Software Engineer",
        startDate: "Mar 2023",
        endDate: "Present",
        duration: "2 yrs 10 mos",
        achievements: [
          "Worked across multiple teams within Developer Productivity, building internal products that enable LinkedIn engineers to ship faster and better",
          "QA Agent - Lead infrastructure for an agentic QA against the platform, human-like testing redefining how LinkedIn ensures product quality at scale",
          "Initiatives v2 - Rebuilt LinkedIn's internal debt management system end-to-end, aligning stakeholders and delivered a system designed for adoption and built with quality by default",
          "Improved engineering onboarding and productivity by centralizing documentation, improving internal developer resources, and mentoring engineers to raise the bar overall quality and velocity",
        ],
      },
      {
        title: "Software Engineer",
        startDate: "Mar 2022",
        endDate: "Mar 2023",
        duration: "1 yr 1 mo",
        achievements: [
          "Accelerated the adoption of GraphQL by building the migration tooling and mocking infrastructure needed to move off our legacy in-house data layer.",
          "Unblocked the company-wide migration to Yarn 3 by redesigning dependency management tooling for compatibility; this cut developer install times by 50% and streamlined workflows across the organization",
        ],
      },
    ],
  },
  {
    id: "aws",
    company: "Amazon Web Services (AWS)",
    overallDuration: "Oct 2020 - Mar 2022 · 1 yr 6 mos",
    location: "Austin, Texas, United States · Remote",
    technologies: [
      "ReactJS",
      "Redux",
      "React-Testing-Library",
      "Playwright",
      "JavaScript",
      "Cypress",
    ],
    roles: [
      {
        title: "Frontend Engineer II",
        startDate: "Oct 2020",
        endDate: "Mar 2022",
        duration: "1 yr 6 mos",
        achievements: [
          "Worked on the Private Offer Experiences team, where I owned the user journey that allows sellers to create exclusive, custom-priced deals for specific buyers",
          "Guided implementation of a new revenue-related feature for our platform and coordinated with various stakeholders and teams regarding design, implementation, and delivery",
          "Analyzed the codebase, spotted developer inefficiencies, and optimized the developer velocity for new required features by 90%, all within the first month of hire",
          "Incrementally rewritten our E2E test suite by creating a reusable and well-tested testing suite for my team, which includes how they unit test & how they write e2e tests, improving our reliability by 40%",
        ],
      },
    ],
  },
  {
    id: "consortium",
    company: "Consortium Networks",
    overallDuration: "Feb 2019 - Oct 2020 · 1 yr 9 mos",
    location: "Philadelphia, Pennsylvania, United States · Remote",
    technologies: [
      "ReactJS",
      "Redux",
      "Jest",
      "React-testing-library",
      "JavaScript",
      "Python",
    ],
    roles: [
      {
        title: "Senior Software Consultant",
        startDate: "Feb 2019",
        endDate: "Oct 2020",
        duration: "1 yr 9 mos",
        achievements: [
          "Led the modernization of a legacy customer portal into an easy-to-use, maintainable React-based web application",
          "Delivered dynamic data-visualization features in the new portal, enabling interactive, customizable views for users",
          "Built and maintained a comprehensive unit and integration testing suite achieving 80% code coverage, allowing for easier refactoring strengthening long-term stability and maintainability",
        ],
      },
    ],
  },
  {
    id: "mckesson",
    company: "McKesson Pharmaceuticals",
    overallDuration: "Oct 2019 - Oct 2020 · 1 yr 1 mo",
    location: "California, United States · Remote",
    technologies: [
      "ReactJS",
      "Redux",
      "Redux-saga",
      "JavaScript",
      "Java",
      "GWT",
      "Enzyme",
      "Jest",
      "Storybook",
    ],
    roles: [
      {
        title: "Software Consultant",
        startDate: "Oct 2019",
        endDate: "Oct 2020",
        duration: "1 yr 1 mo",
        achievements: [
          "Re-platformed their legacy GWT front-end to a modern React front-end platform",
          "Controlled and wrote the test suite for their custom components using Enzyme and Jest",
          "Increase developer productivity by 80% by introducing Storybook and a shared developer environment to develop their components in isolation and created a standard of how components are developed",
        ],
      },
    ],
  },
  {
    id: "opeff",
    company: "Opeff Technologies",
    overallDuration: "May 2018 - Oct 2019 · 1 yr 6 mos",
    location: "Hicksville, New York · On-site",
    technologies: [
      "C#",
      "ASP.NET",
      "MSSQL",
      "Azure",
      "AngularJS",
      "Selenium",
      "Pytest",
      "Python",
      "JavaScript",
    ],
    roles: [
      {
        title: "Software Developer",
        startDate: "May 2018",
        endDate: "Oct 2019",
        duration: "1 yr 6 mos",
        achievements: [
          "Automated the development pipeline using CI/CD tools and created in-house scripts for other repetitive tasks, accelerating weekly production releases",
          "Improved and refactored the Selenium-based test suite, minimizing implementation time for new features",
          "Developed full-stack: API endpoints and routes views to the proper controller using ASP.NET & C#",
          "Assisted in the front-end development and documentation, UI/UX development, and assisted other developers in methodology and style needed",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    id: "stonybrook",
    institution: "Stony Brook University",
    degree: "Bachelor of Science",
    field: "Biology",
    startYear: 2015,
    endYear: 2019,
    location: "Stony Brook, New York",
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", level: "specialist" },
  { name: "React.js", level: "specialist" },
  { name: "TypeScript", level: "advanced" },
  { name: "Python", level: "advanced" },
  { name: "Redux", level: "advanced" },
  { name: "Node.js", level: "advanced" },
  { name: "Testing (Jest, Playwright, Cypress)", level: "advanced" },
  { name: "Java", level: "intermediate" },
  { name: "C#", level: "intermediate" },
  { name: "AngularJS", level: "intermediate" },
  { name: "CI/CD", level: "advanced" },
  { name: "Git", level: "advanced" },
];
