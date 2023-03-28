import React from 'react';
import { Modal, NavigationButtons, NavigationButton } from './EscenaStyles';

const Escena = ({ historias, activeLine, handlePrev, handleNext }) => {
  return (
    <div>
      <NavigationButtons>
        <NavigationButton onClick={handlePrev} disabled={activeLine === 0}>
          Retrocedir
        </NavigationButton>
        <NavigationButton onClick={handleNext} disabled={activeLine === historias.length - 1}>
          Avançar
        </NavigationButton>
      </NavigationButtons>
      {historias.map((historiaData, index) => (
        <Modal key={index} active={index === activeLine}>
          <p>{historiaData.txt}</p>
        </Modal>
      ))}
    </div>
  );
};

export default Escena;

