import styled from '@emotion/styled';

export const CatalogGallery = styled.ul`
  width: 100%;
  display: flex;
  column-gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  border-radius: 14px;

  object-fit: cover;
  object-position: center top;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;
