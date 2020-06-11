import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <SearchBar></SearchBar>
      <SearchResult></SearchResult>
    </div>
  );
};

export default Search;
