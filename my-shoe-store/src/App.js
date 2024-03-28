import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './components/HomePage'; 
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import NotfoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
