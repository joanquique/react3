// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CatDetails from './components/CatDetails';
import Breeds from './components/Breeds';
import BreedDetails from './components/BreedDetails';
import {
  AppContainer,
  Header,
  Title,
  Nav,
  NavList,
  NavLink,
  MainContent
} from './components/App.styled';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header>
          <Title>Galería de Gatos</Title>
          <Nav>
            <NavList>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/breeds">Razas</NavLink></li>
              <li><NavLink to="/about">Acerca de</NavLink></li>
            </NavList>
          </Nav>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/breed/:breedId" element={<BreedDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cat/:id" element={<CatDetails />} />
          </Routes>
        </MainContent>
        <Footer bgColor="#bdc3c7" />
      </AppContainer>
    </Router>
  );
};

export default App;
