//require is how we import something in node
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await graphql(`
      query PokemonList{
        allPokemon {
          nodes {
            name
          }
        }
      }
    `)

    data.allPokemon.nodes.forEach(node => {
        actions.createPage({
            path: '/pokemon/'+ node.name,
            component: path.resolve('./src/templates/pokemon.js'),
            context: { name: node.name }
        })
    })
}

