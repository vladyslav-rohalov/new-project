import { Container, Button, IconLogIn } from './autorization.styled';

export default function Autorization() {
  return (
    <Container>
      <IconLogIn />
      <Button type="button">Sign in</Button>
      <Button type="button">Sign up</Button>
    </Container>
  );
}
