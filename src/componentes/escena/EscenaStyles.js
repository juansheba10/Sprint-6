// components/escena/EscenaStyles.js
import styled from 'styled-components';



export const Modal = styled.div`
  background-color: ${({ active }) => (active ? '#FFC0CB' : 'rgba(255, 255, 255, 0.5)')};
  border: 2px solid black;
  border-radius: 50px;
  padding: 20px;
  margin: 10px auto;
  max-width: 80%;
  font-family: Arial, sans-serif;
  text-align: center;
`;


export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const NavigationButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  height: 75px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%; 

  &:hover {
    background-color: darkblue;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
