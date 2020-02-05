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

export const getCharacterByStatus = (status) => {
  return fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
    .then(characters => characters.map({
      
    }));  
  
  // .then(res => res.json());



  // .then(({ image, name }) => {
  //   image,
  //   name,
  //   status;
  // });
};
