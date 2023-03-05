import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';
import Autorization from '../autorization/autorization';
import {
  Header,
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
          <Autorization />
        </ContainerHeader>
      </Header>
      <SideBar>
        <p>Here will be some news</p>
      </SideBar>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
