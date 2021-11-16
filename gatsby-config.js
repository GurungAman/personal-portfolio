module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personal-portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Aman Gurung",
        short_name: "Aman Grg",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        duration: 100,
      },
    },
  ],
};
