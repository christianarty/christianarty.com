export const siteMetadata = {
  author: "Christian Arty",
  title: "Christian Arty - Front End Engineer",
  socialMedia: {
    linkedin: "https://www.linkedin.com/in/christianarty/",
    github: "https://github.com/christianarty",
    twitter: "https://twitter.com/christian_arty",
  },
  contactMe: "contact@christianarty.com",
  jobTitle: "Front End Engineer @ LinkedIn",
  geoLocation: "New York, NY",
  blogLink: "https://blog.christianarty.com",
  get seoDescription() {
    return (
      this.title +
      " | Javascript Expert | I create fast and reliable user interfaces and experiences to provide your customers the best experience possible."
    );
  },
};
