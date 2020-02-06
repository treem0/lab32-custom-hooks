import React from 'react';
import Character from '../components/Character';
import { useCharacters } from '../hooks/characters';
import { getCharactersByStatus } from '../services/rickAndMortyApi';


const CharacterFn = () => {
  const { characters, handleCharChange, value, handleValueChange } = useCharacters();

  const characterItem = characters.map((character) => (
    <li key={character.id} >
      <Character name={character.name} image={character.image} status={character.status} />
    </li>
  ));

  return (
    <>
      <select value={value} onChange={({ target }) => handleValueChange(target.value)}>
        <option value="alive" name="alive">Alive</option>
        <option value="dead" name="dead">Dead</option>
        <option value="unknown" name="unknown">Unknown</option>
      </select>
      <button onClick={handleCharChange}>New Character</button>
      <ul>
        {characterItem}
      </ul>
    </>
  );
    
};

export default CharacterFn;
