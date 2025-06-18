import React from 'react';

import SearchBarDesktop from './SearchBarDesktop';
import SearchBarMobile from './SearchBarMobile';

const SearchBar = ({ hideNav }) => (
  <>
    <SearchBarMobile hideNav={hideNav} />
    <SearchBarDesktop hideNav={hideNav} />
  </>
);

export default SearchBar;
