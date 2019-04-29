export const getAllMovie = async () => {
  const res = await fetch('https://swapi.co/api/films');
  const resJson = await res.json();
  const editedMovieList = resJson.results.map(movie => ({
    id: parseFloat(movie.url.slice(27, 28)),
    title: movie.title,
    description: movie.opening_crawl,
    releaseDate: movie.release_date,
  }));
  return editedMovieList;
};

export const getSingleMovie = async id => {

  const res = await fetch(`https://swapi.co/api/films/${id}`);
  const resJson = await res.json();
  const resCharacters = resJson.characters.map(url =>
    fetch(url)
      .then(data => data.json())
  );

  const allcharacters = await Promise.all(resCharacters);
  const characterwSpecies = allcharacters.map(result =>
    fetch(result.species[0])
      .then(data => data.json())
      .then((species) => {
          let character = Object.assign({});
          character['species_name'] =species.name 
          character['name'] =result.name 
          return character;
      })
      .catch(e => console.log(e))
  );
  const characters = await Promise.all(characterwSpecies);
  console.log(characters);
  return characters;
};
