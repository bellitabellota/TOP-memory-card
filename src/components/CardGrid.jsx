import { getPoke } from "../utils/getPoke";
import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";

const pokemons = ["ditto", "squirtle", "wartortle", "butterfree", 
                  "fearow", "nidoqueen", "clefable", "jigglypuff",
                  "vileplume", "diglett", "growlithe", "bellsprout",
                  "graveler", "grimer", "hitmonlee", "starmie"];

function CardGrid({currentScore, setCurrentScore, bestScore, setBestScore}) {
  const [pokemonURLs, setPokemonURLs] = useState([]);
  const [cardsClicked, setCardsClicked] = useState([]);

  const clickHandler = (e) => {
    const clickedSrc = e.target.src;

    if(cardsClicked.includes(clickedSrc)) {
      if(currentScore > bestScore) { setBestScore(currentScore); }

      setCurrentScore(0);
      setCardsClicked([]);
    } else {
      setCardsClicked([...cardsClicked, cardsClicked[cardsClicked.length] = clickedSrc]);
      incrementCurrentScore(currentScore);
    }
    setPokemonURLs(shuffleArray(pokemonURLs));
  }

  const incrementCurrentScore = (score) => {
    setCurrentScore(score + 1);
  }

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
        return <Card url={url} key={url} clickHandler={clickHandler}/>;
      })}
    </div>
  )
}

export default CardGrid;

function Card({url, clickHandler}) {

  return(
    <div className="card">
      <img src={url} alt="" onClick={(e) => {
          clickHandler(e);
        }}/>
    </div>
  )
}