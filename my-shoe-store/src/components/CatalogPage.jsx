import React, { useState } from 'react';
import Header from './Header';
import CatalogComponent from './CatalogComponent';
import Footer from './Footer';
import SearchComponent from './SearchComponent';

function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
  };

  return (
    <div>
      <Header />
      <h2 className="text-center">Каталог</h2>
      <SearchComponent onSearch={handleSearch} />
      <CatalogComponent searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default CatalogPage;
