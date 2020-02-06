export const getCharacter = () => {
  const randomNum = Math.floor(Math.random() * 493) + 1;

  return fetch(`https://rickandmortyapi.com/api/character/${randomNum}`)
    .then(res => res.json())
    .then(({ image, name, status }) => ({
      image,
      name,
      status
    }));
};

export const getCharactersByStatus = (status) => {
  return fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
    .then(res => res.json())
    .then(characters => characters.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image
      };
    }));

  // .then(({ image, name }) => {
  //   image,
  //   name,
  //   status;
  // });
};
