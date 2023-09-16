import styled from '@emotion/styled';

export const AppStyled = styled.div`
  background-image: url('./img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-left: 128px;
  padding-right: 128px;
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const Header1 = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 45px;
  margin-bottom: 52px;

  text-shadow: 3px 3px 50px blue;
`;

export const Main = styled.main`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
