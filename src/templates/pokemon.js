import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import classnames from 'classnames'
import  * as styles from "../styles/pokemon.module.css"


export default function Pokemon({data}) {

  
  const pokemon = data.pokeapi.pokemon

  // const types = pokemon.types.map(type =>{
  //   pokemon.types[type]
  // })

  console.log(data.pokeapi.pokemon.types)

  // const types = Object.types(test).map(([key, value])  =>  {
  //   return  (
  //       <li key={key.id}>
  //           {value}
  //       </li>
  //   );
  // });
  // console.log(pokemon.types.map(({type}, i) => {type[0]}))

  return (
    <div>
      <Layout>
       
       
        <div className={styles.details__wrapper}>
        <h1>{pokemon.name}</h1>
        <img  src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>Stats</h2>
        <ul>
        {/* {Object.keys(stats).map((keyName, value) => <li className={classnames({[`stat-${keyName}`]: stats })}>{keyName}: {stats[keyName]}</li>)} */}
          {/* <li>
            {stats.attack}
          </li>
          <li>
            {stats.defense}
          </li> */}
          <h3>Type</h3> 

          {/* {pokemon.types.map(({type}, i) => {type[0]})} */}

          {/* render={data => (
            <div class="featured-products">
              {data.allContentfulFeaturedProduct.edges.map(({ node }, i) => (
                <div class="product" key={i}>
                  {node.featuredProducts.map(product => (
                    <div>{product}</div>
                  ))}
                </div>
              ))}
            </div>
          )} */}

          {/* {types.map(type => <li className={classnames({[`type-${types[name]}`]: types.name })}>{types[name]}</li>)} */}
          {/* {types.map(type => <li className={classnames({[`type-${types}`]: types })}>{type}</li>)} */}
          </ul>
        </div>
      </Layout>
    </div>
  )
}


export const query = graphql`
  query Pokemon($name: String!) {
    pokeapi {
      pokemon(name: $name) {
        id
        name
        order
        types {
          type {
            name
          }
        }
        sprites {
          back_default
          back_female
          back_shiny
          back_shiny_female
          front_default
          front_female
          front_shiny
          front_shiny_female
        }
        height
        weight
        stats {
          base_stat
          stat {
            name
          }
        }
      }
    }
  }
`
