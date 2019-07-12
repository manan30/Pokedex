import React, { useState } from 'react';

import SearchInput from './styled';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <SearchInput
      placeholder="Explore the pokedex"
      onChange={handleChange}
      value={searchValue}
    />
  );
};

export default SearchBar;
