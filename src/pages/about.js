import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import * as styles from "../styles/about.module.css"

export default function about() {
    return (
        <Layout>
            <div className={styles.text__wrapper}>
                <h1>About page</h1>
                <div className={styles.description}>
                    <p>This Pokedex was built using Gatsby, React and GraphQL. For the API I used the <Link href="https://graphql-pokeapi.vercel.app/">The Unofficial GraphQL for PokeAPI</Link>.</p>
                </div>
            </div>
        </Layout>
    )
}
