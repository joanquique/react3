import axios from 'axios';

const API_KEY = process.env.REACT_APP_CAT_API_KEY;

const client = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': API_KEY
  }
});

export const fetchRandomCatImages = async (limit = 10) => {
  try {
    const response = await client.get(`images/search?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener imágenes de gatos:', error);
    return [];
  }
};

export const fetchCatBreeds = async () => {
  try {
    const response = await client.get('breeds');
    return response.data;
  } catch (error) {
    console.error('Error al obtener razas de gatos:', error);
    return [];
  }
};

// Nueva función para obtener detalles de una imagen específica
export const fetchCatImageById = async (id) => {
  try {
    const response = await client.get(`images/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener detalles de la imagen:', error);
    return [];
  }
};
