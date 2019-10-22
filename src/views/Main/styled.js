import styled from 'styled-components';

export const ScreenWrapper = styled.section`
  height: 100vh;
  width: calc(100vw - 64px);
  overflow: hidden;

  padding: 0 32px;
`;

export const ThemeToggleContainer = styled.section`
  height: 50px;
  width: 64px;
  margin: 48px 0 0 auto;

  background-color: black;
`;

export const SearchBarContainer = styled.section`
  height: 64px;
  margin-top: 32px;
  padding: 0 16px;

  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(30, 55, 90, 0.05);
  box-shadow: 0 2px 4px 0 rgba(30, 55, 90, 0.1);
  color: #1e375a;

  font-size: 18px;
`;

export const InfiniteListContainer = styled.section`
  height: ${props =>
    props.spinnerLoading ? 'calc(100% - 270px)' : 'calc(100% - 226px)'};
  margin-top: 32px;
`;

export const LoadingSpinnerContainer = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
