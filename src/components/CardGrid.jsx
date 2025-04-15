import { getPoke } from "../utils/getPoke";
import { useEffect, useState } from "react";

const pokemons = ["ditto", "squirtle", "wartortle", "butterfree", 
                  "fearow", "nidoqueen", "clefable", "jigglypuff",
                  "vileplume", "diglett", "growlithe", "bellsprout",
                  "graveler", "grimer", "hitmonlee", "starmie"];

function CardGrid() {
  const [pokemonURLs, setPokemonURLs] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      if(!ignore) {
        const fetchedPokemonURLs = await Promise.all(
          pokemons.map(async (pokemon) => {
            const url = await getPoke(pokemon);
            return url;
          })
        );
        
        setPokemonURLs(fetchedPokemonURLs);
      }
    }
    startFetching();

    return () => {
      ignore = true;
    }
  }, [])

  return(
    <div className="card-grid">
      {pokemonURLs.map((url) => {
        return <Card url={url} key={url} />;
      })}
    </div>
  )
}

export default CardGrid;

function Card({url}) {

  return(
    <div className="card">
      <img src={url} alt="" />
    </div>
  )
}