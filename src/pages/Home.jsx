import { Container, Header1 } from 'components/App.styled';
import { Button } from 'components/Button/Button.styled';

export const Home = () => {
  return (
    <Container>
      <Header1>
        Finding your dream car has never been easier. Get ready for an
        unforgettable journey with us.
      </Header1>
      <Button to="/catalog">LET'S GO</Button>
    </Container>
  );
};
