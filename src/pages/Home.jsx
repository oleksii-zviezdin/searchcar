import { AppStyled, Container, Header1 } from 'components/App.styled';
import { Button } from 'components/Button/Button.styled';
import backgroundImage from '../img/background.jpg';

const style = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export const Home = () => {
  return (
    <AppStyled style={style}>
      <Container>
        <Header1>
          Finding your dream car has never been easier. Get ready for an
          unforgettable journey with us.
        </Header1>
        <Button to="/catalog">LET'S GO</Button>
      </Container>
    </AppStyled>
  );
};
