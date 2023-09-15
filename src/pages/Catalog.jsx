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
import { Container, Header1, Main } from 'components/App.styled';

export const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Виклик функції запиту при завантаженні компонента
    fetchCars()
      .then(responseData => {
        setData(responseData); // Оновлення стану з отриманими даними
      })
      .catch(error => {
        console.log(error.message);
        // Обробка помилок
      });
  }, []); // Пустий масив дозволяє запустити ефект лише після монтування компонента

  return (
    <Main>
      <Container>
        <Header1>Search car to rent</Header1>
        <CatalogGallery>
          {/* Тут відображаєте дані, отримані з бекенду */}
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
                    class="gallery__image"
                  />
                </div>
                <ShortDescription1>
                  <p>
                    <span>{make}</span>{' '}
                    <span style={{ color: 'blue' }}>{model}</span>,{' '}
                    <span>{year}</span>
                  </p>
                  <p>
                    <span>{rentalPrice}</span>
                  </p>
                </ShortDescription1>
                <ShortDescription2>
                  <p>
                    {address.split(',')[2]}
                    <span>|</span> {address.split(',')[1]}
                    <span>|</span> {rentalCompany}
                    <span>|</span> <span>{mileage}</span>
                  </p>
                </ShortDescription2>
                <button>Learn more</button>
              </ItemGallery>
            )
          )}
        </CatalogGallery>
        <section></section>
      </Container>
    </Main>
  );
};
