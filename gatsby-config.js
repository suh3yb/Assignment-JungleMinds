/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'SWAPI',
        // This is the field under which it's accessible
        fieldName: 'swapi',
        // URL to query from
        url: 'https://swapi.graph.cool/',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
  ],
  siteMetadata: {
    title: 'StarWars Universe',
    description:
      'A website where you can find information about Star Wars Universe.',
  },
};
