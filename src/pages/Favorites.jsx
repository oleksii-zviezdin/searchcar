import { Container, Header1 } from 'components/App.styled';
import { useState, useEffect } from 'react';
import {
  ItemGallery,
  ShortDescription1,
  ShortDescription2,
  Img,
  //   FavIcon,
} from 'components/Catalog/Catalog.styled';
import { LearnMoreButton } from 'components/Button/Button.styled';
import { CatalogGallery } from 'components/Catalog/Catalog.styled';

export const Favorites = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const savedFavoriteData = localStorage.getItem('myFavorite');
    try {
      const parsedFavoriteData = savedFavoriteData
        ? JSON.parse(savedFavoriteData)
        : [];
      setFavorite(parsedFavoriteData);
    } catch (error) {
      console.error('Помилка при розшифровці даних з localStorage:', error);
      // Обробляйте помилку тут, можливо, встановивши favorite як порожній масив у разі помилки.
      setFavorite([]);
    }
  }, []);

  //   const removeFavorite = id => {
  //     // Отримуємо поточний стан обраних автомобілів з localStorage
  //     const currentFavorites =
  //       JSON.parse(localStorage.getItem('myFavorite')) || [];

  //     const carIndex = currentFavorites?.findIndex(car => car.id === id);

  //     if (carIndex === -1) {
  //       // Обробка випадку, коли автомобіль не знайдено
  //       return;
  //     }

  //     // Перевіряємо, чи обраний автомобіль вже існує в обраному
  //     const arrayFavoriteWithOutCarById = currentFavorites.filter(
  //       car => car.id === id
  //     );

  //     // Зберігаємо оновлений список обраних автомобілів у localStorage
  //     localStorage.setItem(
  //       'myFavorite',
  //       JSON.stringify(arrayFavoriteWithOutCarById)
  //     );
  //   };

  return (
    <Container>
      <Header1>Your favorites cars</Header1>

      {favorite.length <= 0 && <div>You haven't favorite car</div>}

      {favorite.length > 0 && (
        <CatalogGallery>
          {favorite?.map(
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
                  {/* <FavIcon onClick={() => removeFavorite(id)}></FavIcon> */}
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
      )}
    </Container>
  );
};
