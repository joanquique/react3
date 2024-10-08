import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCatBreeds } from '../api';
import './BreedDetails.css'; // Asegúrate de crear este archivo para estilos

const BreedDetails = () => {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreed = async () => {
      try {
        const breeds = await fetchCatBreeds();
        const selectedBreed = breeds.find(b => b.id === breedId);
        if (selectedBreed) {
          setBreed(selectedBreed);
        } else {
          setError('Raza no encontrada.');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener la raza de gato:', err);
        setError('Error al cargar la información de la raza.');
        setLoading(false);
      }
    };
    getBreed();
  }, [breedId]);

  if (loading) {
    return <p>Cargando información de la raza...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="BreedDetails">
      <h2>{breed.name}</h2>
      <p><strong>Temperamento:</strong> {breed.temperament}</p>
      <p><strong>Origen:</strong> {breed.origin}</p>
      <p><strong>Descripción:</strong> {breed.description}</p>
      <Link to="/breeds">Volver a Razas</Link>
    </div>
  );
};

export default BreedDetails;
