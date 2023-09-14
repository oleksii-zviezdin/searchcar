import styled from '@emotion/styled';

export const AppStyled = styled.div`
  background-image: url('/img/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 12px;

  text-shadow: 3px 3px 16px blueviolet;
`;
