module.exports = {
  siteMetadata: {
    title: `O Carioca Web`,
    description: `Site de contato de Carlos Abreu - Desenvolvimento de sites O Carioca Web`,
    author: `@ocariocawebdesign`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // I have created a dummy site for us to use with the plugins we discussed
        baseUrl: "ocariocawebdesign.com",
        protocol: "https",
        hostingWPCOM: false,
        // We will be using some advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://ocariocawebdesign.com",
          replacementUrl: "https://localhost:8000",
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities;
        },
      },
    },
        //"gatsby-plugin-sitemap": "^2.8.0", essa linha está no package.json

    //`gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
