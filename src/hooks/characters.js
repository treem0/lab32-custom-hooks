import { useState, useEffect } from 'react';
import { getCharacter, getCharacterByStatus } from '../services/rickAndMortyApi';


export const useCharacters = () => {
  const [character, updateCharacter] = useState({
    image: '',
    name: '',
    status: ''
  });
  const [value, setValue] = useState('alive');

  useEffect(() => {
    handleCharChange();
  }, []);

  const handleCharChange = () => {
    getCharacterByStatus(value)
      .then(character => updateCharacter(character)
      );
  };
  
  const handleValueChange = (value) => {
    setValue(value);
  };

  return { character, handleCharChange, handleValueChange, value };
};
