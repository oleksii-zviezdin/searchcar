import { Container, Header1 } from 'components/App.styled';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import {
  ItemGallery,
  ShortDescription1,
  ShortDescription2,
  Img,
} from 'components/Catalog/Catalog.styled';
import { LearnMoreButton } from 'components/Button/Button.styled';
import { CatalogGallery } from 'components/Catalog/Catalog.styled';

export const Favorites = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const savedFavoriteData = localStorage.getItem('myFavorite');
    if (savedFavoriteData.length <= 0) setFavorite([]);
    setFavorite(JSON.parse(savedFavoriteData));
  }, []);

  return (
    <Container>
      <Header1>Your favorites cars</Header1>
      <CatalogGallery>
        {favorite.length <= 0 && <div>You haven't favorite car</div>}
        {favorite?.map(
          ({
            img,
            year,
            make,
            model,
            type,
            mileage,
            rentalCompany,
            address,
            rentalPrice,
            accessories,
          }) => (
            <ItemGallery key={nanoid()}>
              <div>
                <Img
                  src={`${img}`}
                  alt={`${make}`}
                  width={274}
                  height={268}
                  loading="lazy"
                  className="gallery__image"
                />
              </div>
              <ShortDescription1>
                <p>
                  <span>{make}</span>{' '}
                  <span style={{ color: 'blue' }}>{model},</span>{' '}
                  <span>{year}</span>
                </p>
                <p>
                  <span>{rentalPrice}</span>
                </p>
              </ShortDescription1>
              <ShortDescription2>
                <p>
                  {address?.split(',')[1]}
                  <span
                    style={{
                      color: 'rgba(18, 20, 23, 0.10)',
                      fontSize: '16px',
                    }}
                  >
                    {' '}
                    |{' '}
                  </span>{' '}
                  {address?.split(',')[2]}
                  <span
                    style={{
                      color: 'rgba(18, 20, 23, 0.10)',
                      fontSize: '16px',
                    }}
                  >
                    {' '}
                    |{' '}
                  </span>{' '}
                  {rentalCompany}
                  <span
                    style={{
                      color: 'rgba(18, 20, 23, 0.10)',
                      fontSize: '16px',
                    }}
                  >
                    {' '}
                    |{' '}
                  </span>{' '}
                  <span>{type}</span>
                  <span
                    style={{
                      color: 'rgba(18, 20, 23, 0.10)',
                      fontSize: '16px',
                    }}
                  >
                    {' '}
                    |{' '}
                  </span>{' '}
                  <span>{make}</span>
                  <span
                    style={{
                      color: 'rgba(18, 20, 23, 0.10)',
                      fontSize: '16px',
                    }}
                  >
                    {' '}
                    |{' '}
                  </span>
                  <span>{mileage}</span>
                  <span
                    style={{
                      color: 'rgba(18, 20, 23, 0.10)',
                      fontSize: '16px',
                    }}
                  >
                    {' '}
                    |{' '}
                  </span>
                  <span>{accessories[0]}</span>
                </p>
              </ShortDescription2>
              <LearnMoreButton>Learn more</LearnMoreButton>
            </ItemGallery>
          )
        )}
      </CatalogGallery>
    </Container>
  );
};
