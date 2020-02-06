import React from 'react';
import Character from '../components/Character';
import { useCharacters } from '../hooks/characters';


const CharacterFn = () => {
  const { character, handleCharChange, value, handleValueChange } = useCharacters();

  // const characterItem = characters.map((character) => (
  //   <li key={character.name} >
  //     <Character name={character.name} image={character.image} status={character.status} />
  //   </li>
  // ));

  return (
    <>
      <select value={value} onChange={({ target }) => handleValueChange(target.value)}>
        <option value="alive" name="alive">Alive</option>
        <option value="dead" name="dead">Dead</option>
        <option value="unknown" name="unknown">Unknown</option>
      </select>
      <button onClick={handleCharChange}>New Character</button>
      <Character image={character.image} name={character.name} status={character.status}/>
    </>
  );
    
};

export default CharacterFn;
