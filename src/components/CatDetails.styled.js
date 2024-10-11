import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CatDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

export const CatTitle = styled.h2`
  margin-bottom: 20px;
  color: #2c3e50;
`;

export const CatImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const BreedInfo = styled.div`
  width: 100%;
  text-align: left;
`;

export const BreedHeading = styled.h3`
  margin-bottom: 10px;
  color: #34495e;
`;

export const BreedDetail = styled.p`
  margin-bottom: 8px;
  line-height: 1.6;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  margin-top: 20px;
  font-weight: bold;
`;
