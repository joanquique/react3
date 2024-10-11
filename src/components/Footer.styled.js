// src/components/Footer.styled.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${props => props.bgColor || '#ecf0f1'};
  padding: 10px;
  text-align: center;
  color: #7f8c8d;
  font-size: 0.9em;
`;
