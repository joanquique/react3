// src/components/Home.js
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useCatImageSearch from '../useCatImageSearch';
import { fetchRandomCatImages } from '../api';
import './Home.css'; // Asegúrate de crear este archivo para estilos

const Home = () => {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCatImages, setFilteredCatImages] = useState([]);
  const [error, setError] = useState(null);

  // Definir handleSearch usando useCallback para optimizar
  const handleSearch = useCallback((term) => {
    const filteredImages = catImages.filter(cat => {
      return cat.breeds && cat.breeds.some(breed => breed.name.toLowerCase().includes(term.toLowerCase()));
    });
    console.log('Imágenes filtradas:', filteredImages); // Log de imágenes filtradas
    setFilteredCatImages(filteredImages);
  }, [catImages]);

  const { searchTerm, handleChange, handleSubmit } = useCatImageSearch('', handleSearch);

  useEffect(() => {
    const getCatImages = async () => {
      try {
        const data = await fetchRandomCatImages(); 
        console.log('Datos recibidos en Home:', data); // Verifica los datos recibidos
        setCatImages(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener imágenes de gatos:', error);
        setError('No se pudieron cargar las imágenes de gatos. Por favor, intenta nuevamente más tarde.');
        setLoading(false); 
      }
    };
    getCatImages();
  }, []);

  // Log para verificar qué imágenes se están intentando renderizar
  console.log('Imágenes para renderizar:', filteredCatImages.length > 0 ? filteredCatImages : catImages);

  return (
    <div className="Home">
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="search">Buscar imágenes de gatos:</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar imágenes de gatos..."
        />
        <button type="submit">Buscar</button>
      </form> */}
      {loading ? (
        <p>Cargando imágenes...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        (filteredCatImages.length > 0 ? filteredCatImages : catImages).length > 0 ? (
          <section>
            <ul>
              {(filteredCatImages.length > 0 ? filteredCatImages : catImages).map(cat => (
                <li key={cat.id}>
                  <Link to={`/cat/${cat.id}`}>
                    <img src={cat.url} alt={`Gato ${cat.id}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p>No se encontraron imágenes para la búsqueda: "{searchTerm}"</p>
        )
      )}
    </div>
  );
};

export default Home;
