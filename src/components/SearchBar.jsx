import React from 'react';
import '/src/styles/searchbar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
        aria-label="Search news"
      />
      <button
        onClick={() => setSearchQuery('')}
        className="clear-button"
        aria-label="Clear search"
        title="Clear search"
      >
        &#10005;
      </button>
    </div>
  );
};

export default SearchBar;
