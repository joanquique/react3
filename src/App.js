// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CatDetails from './components/CatDetails';
import Breeds from './components/Breeds';
import BreedDetails from './components/BreedDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Galería de Gatos</h1>
          <nav>
            <ul className='menu'>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/breeds">Razas</Link></li>
              <li><Link to="/about">Acerca de</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breed/:breedId" element={<BreedDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cat/:id" element={<CatDetails />} />
          </Routes>
        </main>
        <footer>
          <p>© 2024 Joan Alvarez</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
