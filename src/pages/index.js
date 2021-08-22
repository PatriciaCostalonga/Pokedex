import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import classnames from 'classnames'


export default function PokemonList({ data }) {

    const pokemonList = data.pokeapi.pokemons.results;

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
                        <h1>{pokemon.name}</h1>
                        <h4>{pokemon.id}</h4>
                        
                        <img className={styles.thumbnail} src={pokemon.artwork} alt={pokemon.name} />

                    </Link>
                    </li>
                ))}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PokemonList {
        pokeapi {
        pokemons(limit: 251, offset: 0) {
            count
            results {
            name
            id
            image
            url
            dreamworld
            artwork
            }
        }
        }
    }
`