import styled from 'styled-components';

export const ScreenWrapper = styled.section`
  height: 100vh;
  width: calc(100vw - 40px);
  overflow: hidden;

  padding: 0 20px;
`;

export const ThemeToggleContainer = styled.section`
  height: 50px;
  width: 64px;
  margin: 48px 16px 0 auto;

  background-color: black;
`;

export const SearchBarContainer = styled.section`
  height: 64px;
  margin: 32px 16px 0 16px;
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
    props.spinnerLoading ? 'calc(100% - 264px)' : 'calc(100% - 220px)'};
  margin: 32px 0 0 16px;
`;

export const LoadingSpinnerContainer = styled.section`
  position: absolute;
  left: 50%;
  margin-top: 15px;
  transform: translateX(-50%) translateY(-50%);

  background: white;
`;
