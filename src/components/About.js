import React from 'react';
import './About.css'; // Asegúrate de crear este archivo para estilos

const About = () => {
  return (
    <section className="About">
      <h2>Acerca de esta Aplicación</h2>
      <p>
        Esta aplicación muestra imágenes aleatorias de gatos utilizando la API de TheCatAPI. Puedes buscar imágenes de gatos por raza para encontrar la que más te guste.
      </p>
      <p>
        Desarrollado como parte de un proyecto educativo para practicar React, React Router, Hooks personalizados y más conceptos de desarrollo web.
      </p>
    </section>
  );
};

export default About;
