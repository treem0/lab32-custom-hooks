import React from 'react';
import Character from '../components/Character';
import { useCharacters } from '../hooks/characters';


const CharacterFn = () => {
  const { character, handleCharChange } = useCharacters();

  return (
    <>
      <button onClick={({ target }) => handleCharChange(target.value)}>New Character</button>
      <Character image={character.image} name={character.name}/>
    </>
  );
    
};

export default CharacterFn;
