import React from "react"
import { graphql} from "gatsby"
import Layout from '../components/Layout'
import classnames from 'classnames'
import  * as styles from "../styles/pokemon.module.css"


export default function Pokemon({data}) {
  const { name, id, types, sprites} = data.pokeapi.pokemon;
  console.log(data.pokeapi.pokemon.types)

  return (
    <div>
      <Layout>
        <div className={styles.details__wrapper}>
          <h1>{name}</h1>
          <h4>ID Number: #{id}</h4>
          <div className={styles.image__types}>
            <img className={styles.pokemon__image} src={sprites.front_default} alt={name} />
            <section className={styles.type__section}>
              <h2>Type</h2>
              <div className={styles.type__wrapper}>
                  {types.map(({type}, i) => (
                  <div className={styles.types__all}>
                    <div className={classnames({[`type-${type.name}`]: type.name })} key={i}>
                      {type.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
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
      }
    }
  }
`
