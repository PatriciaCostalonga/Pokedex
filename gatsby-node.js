//require is how we import something in node
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
    query PokemonList {
      pokeapi {
      pokemons(limit: 251, offset: 0) {
          results {
            name
          }
      }
      }
  }
    `)

    data.pokeapi.pokemons.results.forEach(result => {
        actions.createPage({
            path: '/pokemon/'+ result.name,
            component: path.resolve('./src/templates/pokemon.js'),
            context: { name: result.name }
        })
    })
}

