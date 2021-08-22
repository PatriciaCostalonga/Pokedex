import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../../components/Layout'
import  * as styles from "../../styles/list.module.css"
import classnames from 'classnames'


export default function PokemonList({ data }) {
    console.log(data.allPokemon.nodes[0])

    const pokemonList = data.allPokemon.nodes;

    return (
        <Layout>
            <div>
                Pokedex
                <div className={styles.pokemon__list}>
                {pokemonList.map(pokemon => (
                    <li
                    key={pokemon.id}
                    style={{
                        textAlign: `center`,
                        listStyle: `none`,
                        display: `inline-block`,
                    }}
                    className={styles.card}
                    >
                    <Link to={`/pokemon/${pokemon.name}`}>
                        <p>{pokemon.name}</p>
                        <p className={styles.attack}>Attack {pokemon.stats.attack}</p>
                        <p className={styles.defense}>Defense {pokemon.stats.defense}</p>

                        <p>Type {pokemon.types.map(type => <li className={classnames({[`type-${pokemon.types}`]: pokemon.types })}>{type}</li>)}</p>
                        <img  src={pokemon.image} alt={pokemon.name} />

                    </Link>
                    </li>
                ))}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PokemonList{
        allPokemon {
            nodes {
                name
                id
                stats {
                    attack
                    defense
                    special_attack
                    hp
                    special_defense
                    speed
                }
                types
                image
            }
        }
    }
`
