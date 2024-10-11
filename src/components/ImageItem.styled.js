import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Contenedor de la Imagen
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

// Botón de Favorito
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
