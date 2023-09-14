import { NavLink } from 'react-router-dom';
import { Container, Header1 } from 'components/App.styled';

export const Home = () => {
  return (
    <Container>
      <Header1>
        Finding your dream car has never been easier. Get ready for an
        unforgettable journey with us.
      </Header1>
      <NavLink to="/catalog">LET'S GO</NavLink>
    </Container>
  );
};
