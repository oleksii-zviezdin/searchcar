import fetchCars from 'service/fetchCar';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { CatalogGallery, Img } from 'components/Catalog/Catalog.styled';
import { Container, Header1 } from 'components/App.styled';

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
            <li key={nanoid()}>
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
              <p>
                <span>{make}</span> | <span>{model}</span> |<span>{type}</span>|
                <span>{mileage}</span>
              </p>
              <button>Learn more</button>
            </li>
          )
        )}
      </CatalogGallery>
      <section></section>
    </Container>
  );
};
