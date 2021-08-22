import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/Layout'
import classnames from 'classnames'
import  * as styles from "../styles/pokemon.module.css"




// export default ({ pageContext: { pokemon } }) => (

//   <Layout>
//     <div>
//       <h1>{pokemon.name}</h1>
//       <img  src={pokemon.image} alt={pokemon.name} />
//       <h2>Abilities</h2>
//       <ul>
//         {/* {pokemon.abilities.map(ability => (
//           <li key={ability.name}>
//             <Link to={`./pokemon/${pokemon.name}/ability/${ability.name}`}>
//               {ability.name}
//             </Link>
//           </li>
//         ))} */}
//       </ul>
//       <Link to="/">Back to all Pokémon</Link>
//     </div>
//   </Layout>
// )

// import * as React from "react"
// import { graphql, Link } from "gatsby"
// import Layout from '../components/Layout'
// import  * as styles from "../styles/list.module.css"
// import classnames from 'classnames'

export default function Pokemon({data}) {

  const { name, id, stats, types, image } = data.pokemon;
  // const { stats } = Object.stats(abilities).map(([key, value])  =>  {
  //   return  (
  //       <li key={key.id}>
  //           {value}
  //       </li>
  //   );
  // });

  return (
    <div>
      <Layout>
        <div className={styles.details__wrapper}>
        <h1>{name}</h1>
        <img  src={image} alt={name} />
        <h2>Stats</h2>
        <ul>
        {Object.keys(stats).map((keyName, value) => <li className={classnames({[`stat-${keyName}`]: stats })}>{keyName}: {stats[keyName]}</li>)}
          {/* <li>
            {stats.attack}
          </li>
          <li>
            {stats.defense}
          </li> */}
          <h3>Type</h3> 
          {types.map(type => <li className={classnames({[`type-${types}`]: types })}>{type}</li>)}
          </ul>
        </div>
      </Layout>
    </div>
  )
}



export const query = graphql`
  query Pokemon($name: String) {
    pokemon(name: {eq: $name}) {
      id
      stats {
        hp
        attack
        defense
        special_attack
        special_defense
        speed
      }
      types
      image
      name
    }
  }
`
