import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './components/HomePage'; // Компонент для главной страницы
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';

function App() {
  return (
    <Router>
      <div>
        {/* Маршрутизация и рендеринг компонентов страниц */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Главная страница */}
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

