// components/WelcomeScreen.js
import React from 'react';
import { WelcomeContainer, WelcomeTitle, WelcomeDescription, StartButton } from './WelcomeStyles';

const WelcomeScreen = ({ onStart }) => {
  return (
    <WelcomeContainer>
      <WelcomeTitle>Benvingut a l'aplicació d'història interactiva</WelcomeTitle>
      <WelcomeDescription>
        Aquesta aplicació presenta una història on podràs avançar i retrocedir entre les línies de text. Prem el botó "Començar" per llegir la història i utilitza els botons "Avançar" i "Retrocedir" per navegar a través de la narració.
      </WelcomeDescription>
      <StartButton onClick={onStart}>Començar</StartButton>
    </WelcomeContainer>
  );
};

export default WelcomeScreen;
