import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => props.backgroundImage};
`;
