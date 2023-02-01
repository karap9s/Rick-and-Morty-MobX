import React from 'react';
import Buttons from './Components/Buttons/Buttons';
import Cards from './Components/Cards/Cards';
import SearchBar from './Components/SearchBar/SearchBar';

const Main: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <Cards />
      <Buttons />
    </div>
  );
};

export default Main;
