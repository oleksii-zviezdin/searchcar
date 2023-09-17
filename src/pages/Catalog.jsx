import fetchCars from 'service/fetchCar';
import React, { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import {
  CatalogGallery,
  Img,
  ItemGallery,
  ShortDescription1,
  ShortDescription2,
  FavIcon,
} from 'components/Catalog/Catalog.styled';
import { LearnMoreButton, LoadMore } from 'components/Button/Button.styled';
import { Container, Header1, Main } from 'components/App.styled';

export const Catalog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchCars(page)
      .then(responseData => {
        setData(prevData => [...prevData, ...responseData]);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [page]);

  const toggleFavorite = id => {
    // Перевіряємо, чи обраний автомобіль вже існує в обраному
    const isCarInFavorites = favorites.find(car => car.id === id);

    if (!isCarInFavorites) {
      const selectedCar = data.find(car => car.id === id);
      if (selectedCar) {
        setFavorites(prevData => [...prevData, selectedCar]);
        return;
      }
    }

    const updatedFavorites = favorites.filter(car => car.id !== id);
    // Оновлюємо стан обраних автомобілів
    setFavorites(updatedFavorites);
  };

  localStorage.setItem('myFavorite', JSON.stringify(favorites));

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
              id,
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
              <ItemGallery key={id}>
                <div style={{ position: 'relative' }}>
                  <Img
                    src={`${img}`}
                    alt={`${make}`}
                    width={274}
                    height={268}
                    loading="lazy"
                    className="gallery__image"
                  />
                  <FavIcon onClick={() => toggleFavorite(id)}></FavIcon>
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
        <LoadMore type="button" onClick={loadMoreData}>
          Load more
        </LoadMore>
      </Container>
    </Main>
  );
};
