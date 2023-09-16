import styled from '@emotion/styled';
import normalFavorite from '../../img/normal.svg';
import avtiveFavorite from '../../img/active.svg';

export const CatalogGallery = styled.ul`
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 29px;
  border-radius: 14px;
  row-gap: 50px;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.75) 2.5%;
  box-shadow: rgba(53, 53, 76, 0.5) 0px 7px 29px 0px;
`;

export const Img = styled.img`
  border-radius: 14px;

  object-fit: cover;
  object-position: center top;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 0px 29px 0px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  transition-duration: 250ms;
`;

export const ItemGallery = styled.li`
  width: 274px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
  border-radius: 14px;
`;

export const ShortDescription1 = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  gap: 12px;

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
  text-align: left;

  margin-top: 8px;
  padding-right: 9px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  line-height: calc(18 / 12);
`;

export const FavIcon = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;

  width: 18px;
  height: 18px;
  background-size: cover;
  background-repeat: no-repeat;

  transition-duration: 250ms;
  cursor: pointer;

  background-image: url(${normalFavorite});

  &:hover,
  &:focus {
    background-image: url(${avtiveFavorite});
  }
`;
