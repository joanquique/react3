import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCatImageById } from '../api';
import './CatDetails.css'; // Asegúrate de crear este archivo para estilos

const CatDetails = () => {
  const { id } = useParams();
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCatImage = async () => {
      try {
        const data = await fetchCatImageById(id);
        if (data.length > 0) {
          setCatImage(data[0]);
        } else {
          setError('Imagen no encontrada.');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error al obtener los detalles de la imagen:', err);
        setError('Error al cargar los detalles de la imagen.');
        setLoading(false);
      }
    };
    getCatImage();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles de la imagen...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="CatDetails">
      <h2>Detalles de la Imagen de Gato</h2>
      <img src={catImage.url} alt={`Gato ${catImage.id}`} />
      {catImage.breeds && catImage.breeds.length > 0 && (
        <div className="breed-info">
          <h3>Raza: {catImage.breeds[0].name}</h3>
          <p><strong>Temperamento:</strong> {catImage.breeds[0].temperament}</p>
          <p><strong>Origen:</strong> {catImage.breeds[0].origin}</p>
          <p><strong>Descripción:</strong> {catImage.breeds[0].description}</p>
        </div>
      )}
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default CatDetails;
