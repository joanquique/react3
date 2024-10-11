import React from 'react';
import { AboutContainer, AboutTitle, AboutText } from './About.styled';

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Acerca de la Galería de Gatos</AboutTitle>
      <AboutText>
        Bienvenido a la Galería de Gatos, una aplicación creada para los amantes de los felinos. Aquí puedes explorar una amplia variedad de razas de gatos, ver imágenes adorables y obtener información detallada sobre cada una de ellas.
      </AboutText>
      <AboutText>
        Nuestra misión es proporcionar un espacio donde los entusiastas de los gatos puedan aprender, compartir y disfrutar de la belleza y diversidad de estas maravillosas criaturas.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
