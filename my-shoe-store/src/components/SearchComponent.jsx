import React, { useState } from 'react';
import '../css/search.css'

const SearchComponent = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    return (
      <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Поиск"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
          type="search" 
        />
        {}
      </form>
    );
  };

export default SearchComponent;
