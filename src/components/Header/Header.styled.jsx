import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 24px 0;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  > nav {
    display: flex;
    gap: 10px;
  }
`;
