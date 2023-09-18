import fetchCars from 'service/fetchCar';
import React, { useEffect, useState } from 'react';
import { LoadMore } from 'components/Button/Button.styled';
import { Container, Header1, Main } from 'components/App.styled';
import { CatalogGallery } from 'components/Catalog/CatalogGallery';

export const Catalog = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisibleLoadMore, setIsVisibleLoadMore] = useState(true);
  const [, setIsFavorite] = useState([]);

  useEffect(() => {
    if (!isVisibleLoadMore) return;
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
  }, [page, isVisibleLoadMore]);

  const toggleFavorite = id => {
    const myFavorite = JSON.parse(localStorage.getItem('myFavorite')) || [];
    const favorites = JSON.parse(localStorage.getItem('favoriteId')) || [];

    const isCarInFavorites = myFavorite.find(car => car.id === id);
    if (!isCarInFavorites) {
      const selectedCar = data.find(car => car.id === id);
      const apdateAddFavorites = [...myFavorite, selectedCar];
      localStorage.setItem('myFavorite', JSON.stringify(apdateAddFavorites));

      if (favorites.includes(id)) {
        favorites.splice(favorites.indexOf(id), 1);
      } else {
        favorites.push(id);
      }
      setIsFavorite(favorites);
      localStorage.setItem('favoriteId', JSON.stringify(favorites));
      return;
    }

    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1);
    } else {
      favorites.push(id);
    }
    setIsFavorite(favorites);
    localStorage.setItem('favoriteId', JSON.stringify(favorites));

    const updateRemoveFavorites = myFavorite.filter(car => car.id !== id);
    localStorage.setItem('myFavorite', JSON.stringify(updateRemoveFavorites));
  };

  const loadMoreData = () => {
    setPage(page + 1);
  };

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
