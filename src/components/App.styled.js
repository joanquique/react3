import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Contenedor Principal
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Encabezado
export const Header = styled.header`
  background-color: #2c3e50;
  padding: 20px;
  color: white;
`;

// Título en el Encabezado
export const Title = styled.h1`
  margin-bottom: 10px;
  text-align: center;
  font-size: 2em;
`;

// Navegación
export const Nav = styled.nav``;

// Lista de Navegación
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

// Enlaces de Navegación con Props
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e;
  }
`;

// Contenido Principal
export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;