import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCatBreeds } from '../api';
import './Breeds.css'; // Asegúrate de crear este archivo para estilos

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreeds = async () => {
      try {
        const data = await fetchCatBreeds();
        setBreeds(data);
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener las razas de gatos:', err);
        setError('No se pudieron cargar las razas de gatos. Por favor, intenta nuevamente más tarde.');
        setLoading(false);
      }
    };
    getBreeds();
  }, []);

  return (
    <div className="Breeds">
      <h2>Razas de Gatos</h2>
      {loading ? (
        <p>Cargando razas...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <ul>
          {breeds.map(breed => (
            <li key={breed.id}>
              <Link to={`/breed/${breed.id}`}>
                {breed.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breeds;
