/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
  ],
  siteMetadata: {
    title: "Revolution Gymnastics",
    description: "Revolution Gymnastics and Sports Centre",
    copyright: "Copyright 2022 Revolution Gymnastics",
    menuLinks: [
      {
        title: "About",
        url: "/about",
        submenu: [
          {
            title: "Staff",
            url: "staff",
          },
          {
            title: "Career",
            url: "career",
          },
          {
            title: "Clinic",
            url: "clinic",
          },
          {
            title: "Sponsor",
            url: "sponsor",
          },
        ],
      },
      {
        title: "Recreational",
        url: "/recreational",
        submenu: [
          {
            title: "Toddler",
            url: "toddler",
          },
          {
            title: "Pre-School",
            url: "preschool",
          },
          {
            title: "Girls",
            url: "girls",
          },
          {
            title: "Boys",
            url: "boys",
          },
          {
            title: "Trampoline-Tumbling",
            url: "trampolinetumbling",
          },
          {
            title: "Advanced-Recreational",
            url: "advancedrecreational",
          },
          {
            title: "Trampoline-Tumbling",
            url: "trampolinetumbling",
          },
          {
            title: "Open-Gym",
            url: "opengym",
          },
          {
            title: "Trial-class",
            url: "trialclass",
          },
          {
            title: "Private-Lessons",
            url: "privatelesson",
          },
        ],
      },
      {
        title: "Camps",
        url: "/camp",
        submenu: [
          {
            title: "March Break",
            url: "marchbreak",
          },
          {
            title: "PD Day",
            url: "pdday",
          },
          {
            title: "Summer Camp",
            url: "summer",
          },
          {
            title: "Winter Camp",
            url: "winter",
          },
        ],
      },
      {
        title: "Competitive",
        url: "/competitive",
        submenu: [
          {
            title: "Competitive Team",
            url: "competitiveteam",
          },
          {
            title: "Coaching Education ",
            url: "coachingEducation",
          },
          {
            title: "Competitive Team",
            url: "competitiveteam",
          },
          {
            title: "Perfect Balance",
            url: "perfectbalance",
          },
          {
            title: "Wall of Honour",
            url: "wallofhonour",
          },
          {
            title: "NCAA stars",
            url: "ncaastars",
          },
          {
            title: "NCAA Hopefuls",
            url: "ncaahopefuls",
          },
        ],
      },
      {
        title: "Events",
        url: "/event",
        submenu: [
          {
            title: "Kid's Night Out",
            url: "kidsnightout",
          },
          {
            title: "Birthday",
            url: "birthday",
          },
        ],
      },
    ],
  },
}
