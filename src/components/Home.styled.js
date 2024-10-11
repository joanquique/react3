import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Contenedor Principal
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
`;

// Formulario de Búsqueda
export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

// Label del Formulario
export const SearchLabel = styled.label`
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: bold;
`;

// Input del Formulario
export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 2px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1em;
`;

// Botón de Búsqueda con Prop 'primary'
export const SearchButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.primary ? '#e74c3c' : '#2ecc71'};
  color: white;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.primary ? '#c0392b' : '#27ae60'};
  }
`;

// Lista de Imágenes
export const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
  width: 100%;
`;

// Elemento de la Lista con Prop 'favorite'
export const ImageItemContainer = styled.li`
  position: relative;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, border 0.3s;
  border: 4px solid ${props => props.favorite ? '#f1c40f' : 'transparent'};

  &:hover {
    transform: scale(1.02);
  }
`;

// Enlace de la Imagen
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

// Imagen
export const CatImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Botón de Favorito con Prop 'favorite'
export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${props => props.favorite ? '#f1c40f' : 'rgba(255, 255, 255, 0.7)'};
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f39c12;
  }
`;

// Mensaje de Error
export const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-top: 20px;
  font-weight: bold;
`;
