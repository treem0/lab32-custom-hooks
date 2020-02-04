import { useState, useEffect } from 'react';
import { getCharacter } from '../services/rickAndMortyApi';


export const useCharacters = () => {
  const [character, updateCharacter] = useState({
    image: '',
    name: ''
  });

  useEffect(() => {
    handleCharChange();
  }, []);

  const handleCharChange = () => {
    getCharacter()
      .then(character => updateCharacter(character)
      );
  };
  return { character, handleCharChange };
};
