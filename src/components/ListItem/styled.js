import styled from 'styled-components';

export const CardImage = styled.div`
  height: 160px;
`;

export const CardTextContainer = styled.div`
  height: 190px;
  margin-top: -30px;

  border-radius: 10px 10px 0 0;
`;

export const CardBackground = styled.section`
  height: 320px;
  width: 300px;
  margin: 0 16px 16px 0;

  flex-grow: 1;
  /* min-width: 33.33%; */

  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(30, 55, 90, 0.05);
  box-shadow: 3px 2px 4px 0 rgba(30, 55, 90, 0.1);
  color: #1e375a;
  cursor: pointer;

  &:hover {
    height: 310px;
    width: 310px;
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
  }

  &:hover ${CardTextContainer} {
    box-shadow: 0 -4px 5px rgba(30, 55, 90, 0.25);
    transform: translate3d(0, -10px, 0) scale(1, 1.02);
    transition: transform 0.3s ease-in-out;
  }

  transform: scale(1, 1);
  transition: transform 0.3s ease-in-out, height 0.3s ease-in-out,
    width 0.3s ease-in-out;
  z-index: 1;
`;

export const CardText = styled.span`
  font-family: 'Ubuntu-Bold';
`;
