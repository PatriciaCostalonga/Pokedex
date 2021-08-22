/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "POKEAPI",
        // This is the field under which it's accessible
        fieldName: "pokeapi",
        // URL to query from
        url: "https://graphql-pokeapi.vercel.app/api/graphql",
      },
    }
  ],
}
