// src/components/CatDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCatImageById } from '../api';
import {
  CatDetailsContainer,
  CatTitle,
  CatImage,
  BreedInfo,
  BreedHeading,
  BreedDetail,
  BackLink,
  ErrorMessage
} from './CatDetails.styled';

const CatDetails = () => {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCatDetails = async () => {
      try {
        const data = await fetchCatImageById(id);
        if (data && data.breeds && data.breeds.length > 0) {
          setCat(data);
        } else {
          setError('Detalles de la raza no encontrados.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener detalles de la imagen:', error);
        setError('Error al cargar los detalles de la raza.');
        setLoading(false);
      }
    };
    getCatDetails();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <CatDetailsContainer>
      <CatTitle>{cat.breeds[0].name}</CatTitle>
      <CatImage src={cat.url} alt={cat.breeds[0].name} />
      <BreedInfo>
        <BreedHeading>Temperamento:</BreedHeading>
        <BreedDetail>{cat.breeds[0].temperament}</BreedDetail>
        <BreedHeading>Origen:</BreedHeading>
        <BreedDetail>{cat.breeds[0].origin}</BreedDetail>
        <BreedHeading>Descripción:</BreedHeading>
        <BreedDetail>{cat.breeds[0].description}</BreedDetail>
      </BreedInfo>
      <BackLink to="/">Volver a Inicio</BackLink>
    </CatDetailsContainer>
  );
};

export default CatDetails;
