import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 18px 0;
  background: linear-gradient(
    135deg,
    rgba(0, 4, 111, 0.633),
    rgba(32, 20, 255, 0.708)
  );

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  backdrop-filter: blur(8px);
  box-shadow: 0 5px 50px blue;

  > nav {
    display: flex;
    gap: 10px;
  }
`;
