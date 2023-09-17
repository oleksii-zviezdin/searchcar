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
    const favorites = JSON.parse(localStorage.getItem('myFavorite')) || [];

    const isCarInFavorites = favorites.find(car => car.id === id);

    if (!isCarInFavorites) return;

    const updateRemoveFavorites = favorites.filter(car => car.id !== id);
    setFavorite(updateRemoveFavorites);
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
