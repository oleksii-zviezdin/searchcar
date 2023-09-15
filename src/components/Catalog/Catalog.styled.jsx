import styled from '@emotion/styled';

export const CatalogGallery = styled.ul`
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 29px;
  border-radius: 14px;
  row-gap: 50px;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.504) 2.5%;
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

export const ItemGallery = styled.li`
  width: 274px;
  height: auto;
  outline: 2px solid white;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: rgba(100, 100, 111, 0.75) 0px 7px 29px 0px;
  background: rgba(234, 187, 255, 0.5) 2.5%;

  transition-duration: 250ms;

  &:hover,
  &:focus {
    scale: 1.025;
    /* box-shadow: 0px 0px 18px #7d26a2; */
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  }
`;

export const ShortDescription1 = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 14px;
  padding-right: 9px;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #121417;
  line-height: calc(24 / 16);
`;

export const ShortDescription2 = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
  padding-right: 9px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  line-height: calc(18 / 12);
`;
