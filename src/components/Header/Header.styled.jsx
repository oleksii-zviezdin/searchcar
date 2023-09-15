import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 18px 0;
  background: linear-gradient(
    135deg,
    rgba(97, 0, 161, 0.5),
    rgba(213, 163, 247, 0.5)
  );

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  backdrop-filter: blur(8px);
  box-shadow: 0 5px 50px blueviolet;

  > nav {
    display: flex;
    gap: 10px;
  }
`;
