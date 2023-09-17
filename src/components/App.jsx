import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Catalog } from 'pages/Catalog';
import { Favorites } from 'pages/Favorites';
import { AppStyled } from './App.styled';
import { Header } from './Header/Header';
import { FavoriteProvider } from 'service/FavoriteContext';

export const App = () => {
  return (
    <FavoriteProvider>
      <AppStyled>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" />
        </Routes>
      </AppStyled>
    </FavoriteProvider>
  );
};
