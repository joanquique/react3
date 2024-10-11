import React, { useState } from 'react';
import {
  ImageItemContainer,
  StyledLink,
  CatImage,
  FavoriteButton
} from './ImageItem.styled';

const ImageItem = ({ cat }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };

  return (
    <ImageItemContainer favorite={isFavorite}>
      <StyledLink to={`/cat/${cat.id}`}>
        <CatImage src={cat.url} alt={`Gato ${cat.id}`} />
      </StyledLink>
      <FavoriteButton favorite={isFavorite} onClick={toggleFavorite}>
        {isFavorite ? '★' : '☆'}
      </FavoriteButton>
    </ImageItemContainer>
  );
};

export default ImageItem;
