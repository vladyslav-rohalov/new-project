import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';
import {
  Header,
  Footer,
  Container,
  Main,
  SideBar,
  ContainerHeader,
} from './layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header>
        <ContainerHeader>
          <Logo />
          <Navigation />
        </ContainerHeader>
      </Header>
      <SideBar></SideBar>
      <Main></Main>
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </Container>
  );
}
