import { HeaderStyled } from './Header.styled';
import { NavButton } from 'components/Button/Button.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <NavButton to="/" end>
          Home
        </NavButton>
        <NavButton to="/catalog">Catalog</NavButton>
        <NavButton to="/favorites">Favorites</NavButton>
      </nav>
    </HeaderStyled>
  );
};
