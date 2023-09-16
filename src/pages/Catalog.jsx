import fetchCars from 'service/fetchCar';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  CatalogGallery,
  Img,
  ItemGallery,
  ShortDescription1,
  ShortDescription2,
} from 'components/Catalog/Catalog.styled';
import { LearnMoreButton } from 'components/Button/Button.styled';
import { Container, Header1, Main } from 'components/App.styled';

export const Catalog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCars(page)
      .then(responseData => {
        setData(prevData => [...prevData, ...responseData]);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [page]);

  const loadMoreData = () => {
    setPage(page + 1);
  };
  console.log(data);
  return (
    <Main>
      <Container>
        <Header1>Search car to rent</Header1>
        <CatalogGallery>
          {data.map(
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
        <button type="button" onClick={loadMoreData}>
          Load more
        </button>
      </Container>
    </Main>
  );
};
