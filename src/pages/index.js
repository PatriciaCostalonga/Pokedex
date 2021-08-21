import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

// import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home( {data} ) {
  console.log(data)
  // const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);


  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Front-end developer based in London</p>
          <Link className={styles.btn} to="/PokemonList">Pokedex</Link>

        </div>
        {/* <GatsbyImage image={getImage(data.file)} alt="Banner" /> */}
      </section>
    </Layout>
  )
}