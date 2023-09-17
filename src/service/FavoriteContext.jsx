import React, { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export function useFavorite() {
  return useContext(FavoriteContext);
}

export function FavoriteProvider({ children }) {
  const [isFavorite, setIsFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ isFavorite, setIsFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
