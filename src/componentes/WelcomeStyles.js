// components/WelcomeStyles.js
import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-image: none
`;

export const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const WelcomeDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 80%;
`;

export const StartButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;
