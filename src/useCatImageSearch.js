import { useState } from 'react';

const useCatImageSearch = (initialValue = '') => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para realizar la búsqueda de imágenes de gatos
    // Por ahora, simplemente mostraremos el término de búsqueda en la consola
    console.log('Búsqueda de imágenes de gatos:', searchTerm);
  };

  return {
    searchTerm,
    handleChange,
    handleSubmit
  };
};

export default useCatImageSearch;
