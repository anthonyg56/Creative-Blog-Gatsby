module.exports = {
  siteMetadata: {
    title: `A Creatives Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'creative-blog-gatsby', // (REQUIRED, replace with your own)
          accessToken: 'MC5YakYzYVJFQUFDQUFkV0Fn.77-977-9Bu-_vTdJ77-9Fw8EfO-_ve-_vQoNUe-_ve-_vWwt77-9I--_vV_vv71877-977-977-9TO-_vWY', // (optional API access token)
          /*path: '/preview', // (optional preview path. Default: /preview)
          previews: true // (optional, activated Previews. Default: false)
          pages: [{ // (optional, builds pages dynamically)
            type: 'Article',         // TypeName from prismic
            match: '/article/:uid',  // Pages will be generated under this pattern
            path: '/article',        // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/article.js'),
          }],*/
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
