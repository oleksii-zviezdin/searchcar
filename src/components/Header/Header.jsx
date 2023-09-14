import { HeaderStyled } from './Header.styled';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: #d000ff;
  }
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </nav>
    </HeaderStyled>
  );
};
