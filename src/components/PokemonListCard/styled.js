import styled from 'styled-components';

export const CardBackground = styled.section`
  position: relative;
  height: 64px;
  width: 100%;

  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(30, 55, 90, 0.05);
  box-shadow: 0 2px 4px 0 rgba(30, 55, 90, 0.1);
  color: #1e375a;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 10px 0 rgba(30, 55, 90, 0.25);
    transform: scale(1.02, 1.02);
    transition: transform 0.3s ease-in-out;
  }

  transform: scale(1, 1);
  transition: transform 0.3s ease-in-out;
  z-index: 1;
`;

export const CardText = styled.span`
  font-family: 'Ubuntu-Bold';
`;
