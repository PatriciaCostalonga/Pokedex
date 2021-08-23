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
    },

    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`name`, `id`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          pokeapi: {
            name: pokemon => pokemon.name,
            id: pokemon => pokemon.id
            // type: type => type.name,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (pokemon, getNode) => pokemon.frontmatter.tags !== "exempt",
      },
    }
  ],
}
