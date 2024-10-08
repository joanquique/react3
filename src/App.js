import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useCatImageSearch from './useCatImageSearch'; // Importamos nuestro custom hook
import { fetchRandomCatImages } from './api';

const App = () => {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm, handleChange, handleSubmit } = useCatImageSearch(); // Utilizamos nuestro custom hook
  const [filteredCatImages, setFilteredCatImages] = useState([]); // Definimos el estado para las imágenes filtradas

  useEffect(() => {
    const getCatImages = async () => {
      try {
        const data = await fetchRandomCatImages(); 
        setCatImages(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener imágenes de gatos:', error);
        setLoading(false); 
      }
    };
    getCatImages();
  }, []);

  // Función para manejar la búsqueda y filtrar las imágenes de gatos
  const handleSearch = () => {
    const filteredImages = catImages.filter(cat => {
      // Verificamos si cat.breed está definido antes de llamar a toLowerCase()
      return cat.breed && cat.breed.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredCatImages(filteredImages);
  };

  return (
    <Router>
      <div className="App">
        <h1>Imágenes de gatos:</h1>
        {/* Agregamos el formulario de búsqueda */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Buscar imágenes de gatos..."
          />
          <button type="submit" onClick={handleSearch}>Buscar</button> {/* Llamamos a handleSearch al hacer clic en el botón de búsqueda */}
        </form>
        {loading ? (
          <p>Cargando imágenes...</p>
        ) : (
          <ul>
            {/* Mostramos las imágenes filtradas si hay alguna, de lo contrario, mostramos todas las imágenes */}
            {(filteredCatImages.length > 0 ? filteredCatImages : catImages).map(cat => (
              <li key={cat.id}>
                <img src={cat.url} alt="Gato" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Router>
  );
};

export default App;
