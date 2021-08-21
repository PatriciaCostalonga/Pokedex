// import React from "react"
// import { Link } from "gatsby"

// export default ({ pageContext: { pokemon } }) => (
//   <div style={{ width: 960, margin: `4rem auto` }}>
//     <h1>{pokemon.name}</h1>
//     <img  src={pokemon.image} alt={pokemon.name} />
//     <h2>Abilities</h2>
//     <ul>
//       {pokemon.abilities.map(ability => (
//         <li key={ability.name}>
//           <Link to={`./pokemon/${pokemon.name}/ability/${ability.name}`}>
//             {ability.name}
//           </Link>
//         </li>
//       ))}
//     </ul>
//     <Link to="/">Back to all Pokémon</Link>
//   </div>
// )

import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import  * as styles from "../styles/list.module.css"
import classnames from 'classnames'

export default function Pokemon() {
  return (
    <div>
      <Layout>
        {/* <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've created</h3>
            <div className={styles.projects}>

            </div>
            <p>Like what you see? Email me at {contact}</p>
        </div> */}
      </Layout>
    </div>
  )
}




