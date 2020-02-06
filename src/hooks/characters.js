import { useState, useEffect } from 'react';
import { getCharacter, getCharactersByStatus } from '../services/rickAndMortyApi';


export const useCharacters = () => {
  const [characters, updateCharacters] = useState([]);
  const [value, setValue] = useState('alive');

  useEffect(() => {
    handleCharChange();
  }, []);

  const handleCharChange = () => {
    getCharactersByStatus(value)
      .then(characters => updateCharacters(characters));
  };
  
  const handleValueChange = (value) => {
    setValue(value);
  };

  return { characters, handleCharChange, handleValueChange, value };
};
