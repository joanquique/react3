import React, { useEffect, useState, useCallback } from 'react';
import useCatImageSearch from '../useCatImageSearch';
import { fetchRandomCatImages } from '../api';
import {
  HomeContainer,
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
  ImageList,
  ImageItemContainer,
  StyledLink,
  CatImage,
  FavoriteButton,
  ErrorMessage
} from './Home.styled';

const Home = () => {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCatImages, setFilteredCatImages] = useState([]);
  const [error, setError] = useState(null);

  // Definir la función de búsqueda
  const handleSearch = useCallback((term) => {
    const filteredImages = catImages.filter(cat => {
      return cat.breeds && cat.breeds.some(breed => breed.name.toLowerCase().includes(term.toLowerCase()));
    });
    console.log('Imágenes filtradas:', filteredImages);
    setFilteredCatImages(filteredImages);
  }, [catImages]);

  // Usar el hook personalizado con el callback
  const { searchTerm, handleChange, handleSubmit } = useCatImageSearch('', handleSearch);

  useEffect(() => {
    const getCatImages = async () => {
      try {
        const data = await fetchRandomCatImages(); 
        //console.log('Datos recibidos en Home:', data);
        // Inicializar la propiedad 'favorite' en cada cat
        const catsWithFavorite = data.map(cat => ({ ...cat, favorite: false }));
        setCatImages(catsWithFavorite);
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener imágenes de gatos:', error);
        setError('No se pudieron cargar las imágenes de gatos. Por favor, intenta nuevamente más tarde.');
        setLoading(false); 
      }
    };
    getCatImages();
  }, []);

  //console.log('Imágenes para renderizar:', filteredCatImages.length > 0 ? filteredCatImages : catImages);

  // Función para manejar el clic en favorito
  const toggleFavorite = (id) => {
    setCatImages(prevImages => 
      prevImages.map(cat => 
        cat.id === id ? { ...cat, favorite: !cat.favorite } : cat
      )
    );
    setFilteredCatImages(prevImages => 
      prevImages.map(cat => 
        cat.id === id ? { ...cat, favorite: !cat.favorite } : cat
      )
    );
  };

  return (
    <HomeContainer>
      {loading ? (
        <p>Cargando imágenes...</p>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        (filteredCatImages.length > 0 ? filteredCatImages : catImages).length > 0 ? (
          <section>
            <ImageList>
              {(filteredCatImages.length > 0 ? filteredCatImages : catImages).map(cat => (
                <ImageItemContainer key={cat.id} favorite={cat.favorite}>
                  <StyledLink to={`/cat/${cat.id}`}>
                    <CatImage src={cat.url} alt={`Gato ${cat.id}`} />
                  </StyledLink>
                  <FavoriteButton 
                    favorite={cat.favorite} 
                    onClick={() => toggleFavorite(cat.id)}
                  >
                    {cat.favorite ? '★' : '☆'}
                  </FavoriteButton>
                </ImageItemContainer>
              ))}
            </ImageList>
          </section>
        ) : (
          <p>No se encontraron imágenes para la búsqueda: "{searchTerm}"</p>
        )
      )}
    </HomeContainer>
  );
};

export default Home;
