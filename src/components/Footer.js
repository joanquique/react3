// src/components/Footer.js
import React from 'react';
import { FooterContainer } from './Footer.styled';

const Footer = ({ bgColor }) => {
  return (
    <FooterContainer bgColor={bgColor}>
      <p>© 2024 Joan Alvarez</p>
    </FooterContainer>
  );
};

export default Footer;
