import React, { useState } from 'react';
import './App.css';
import Escena from "./componentes/escena/escena"
import historias from './historia';
import WelcomeScreen from "./componentes/WelcomeScreen"
import { AppContainer } from './AppStyles';

function App() {
  const [activeLine, setActiveLine] = useState(0);

  const [welcomeScreen, setWelcomeScreen] = useState(true);

  const handlePrev = () => {
    if (activeLine > 0) {
      setActiveLine(activeLine - 1);
    }
  };

  const handleNext = () => {
    if (activeLine < historias.length - 1) {
      setActiveLine(activeLine + 1);
    }
  };

  const startApp = () => {
    setWelcomeScreen(false);
  };

  return (
    <AppContainer backgroundImage={!welcomeScreen ? `url(${historias[activeLine].img})` : undefined}>
      {welcomeScreen ? ( // Renderizado condicional para mostrar la pantalla de bienvenida
        <WelcomeScreen onStart={startApp} />
      ) : (
        <Escena
          historias={historias}
          activeLine={activeLine}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      )}
    </AppContainer>
  );
}

export default App;
