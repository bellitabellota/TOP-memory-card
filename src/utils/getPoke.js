export async function getPoke(pokemon) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {mode: 'cors'});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
/*     console.log(json)
    console.log(json.name)
    console.log(json.sprites.other.dream_world.front_default) */
    return json.sprites.other.dream_world.front_default
  } catch (error) {
    console.log(error);
  } 
}