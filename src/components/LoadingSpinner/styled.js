import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px; /* Animation */

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};

  background-color: black;
  border-radius: 50%;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
