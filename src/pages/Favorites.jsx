import { Container, Header1, Main } from 'components/App.styled';
import { useState, useEffect } from 'react';
import { CatalogGallery } from 'components/Catalog/CatalogGallery';

export const Favorites = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const savedFavoriteData = localStorage.getItem('myFavorite');
    try {
      const parsedFavoriteData = savedFavoriteData
        ? JSON.parse(savedFavoriteData)
        : [];
      if (favorite.length === parsedFavoriteData.length) return;
      setFavorite(parsedFavoriteData);
    } catch (error) {
      console.error('Помилка при розшифровці даних з localStorage:', error);
      setFavorite([]);
    }
  }, [favorite]);

  const removeFavorite = id => {
    const myFavorite = JSON.parse(localStorage.getItem('myFavorite')) || [];
    const favorites = JSON.parse(localStorage.getItem('favoriteId')) || [];

    const updateRemoveFavorites = myFavorite.filter(car => car.id !== id);
    const updateFavorites = favorites.filter(carId => carId !== id);
    setFavorite(updateRemoveFavorites);
    localStorage.setItem('favoriteId', JSON.stringify(updateFavorites));
    localStorage.setItem('myFavorite', JSON.stringify(updateRemoveFavorites));
  };

  return (
    <Main>
      <Container>
        <Header1>Your favorites cars</Header1>

        {favorite.length <= 0 && <div>You haven't favorite car</div>}

        {favorite.length > 0 && (
          <CatalogGallery
            data={favorite}
            handleFavorite={removeFavorite}
          ></CatalogGallery>
        )}
      </Container>
    </Main>
  );
};
