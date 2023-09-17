import fetchCars from 'service/fetchCar';
import React, { useEffect, useState } from 'react';
import { LoadMore } from 'components/Button/Button.styled';
import { Container, Header1, Main } from 'components/App.styled';
import { CatalogGallery } from 'components/Catalog/CatalogGallery';
import { useFavorite } from 'service/FavoriteContext';

export const Catalog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisibleLoadMore, setIsVisibleLoadMore] = useState(true);
  const { isFavorite, setIsFavorite } = useFavorite();

  useEffect(() => {
    fetchCars(page)
      .then(({ responseData, totalResponseData, limit }) => {
        setData(prevData => [...prevData, ...responseData]);
        const totalItem = totalResponseData.length;
        const isVisible = page * limit;
        setIsVisibleLoadMore(isVisible !== totalItem);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [page, isFavorite]);

  const toggleFavorite = id => {
    // Перевіряємо, чи обраний автомобіль вже існує в обраному
    const favorites = JSON.parse(localStorage.getItem('myFavorite')) || [];

    const isCarInFavorites = favorites.find(car => car.id === id);

    if (!isCarInFavorites) {
      const selectedCar = data.find(car => car.id === id);
      if (selectedCar) {
        const apdateAddFavorites = [...favorites, selectedCar];

        const updatedFavorites = [...isFavorite];
        if (updatedFavorites.includes(id)) {
          updatedFavorites.splice(updatedFavorites.indexOf(id), 1); // Видалити id
        } else {
          updatedFavorites.push(id); // Додати id
        }
        setIsFavorite(updatedFavorites);

        localStorage.setItem('myFavorite', JSON.stringify(apdateAddFavorites));
        return;
      }
    }

    const updateRemoveFavorites = favorites.filter(car => car.id !== id);
    const updateFavoriteId = isFavorite.filter(favId => favId !== id);
    setIsFavorite(updateFavoriteId);
    localStorage.setItem('myFavorite', JSON.stringify(updateRemoveFavorites));
  };

  const loadMoreData = () => {
    setPage(page + 1);
  };

  console.log(data);
  return (
    <Main>
      <Container>
        <Header1>Search car to rent</Header1>
        <CatalogGallery
          data={data}
          handleFavorite={toggleFavorite}
        ></CatalogGallery>

        {isVisibleLoadMore && (
          <LoadMore type="button" onClick={loadMoreData}>
            Load more
          </LoadMore>
        )}
      </Container>
    </Main>
  );
};
