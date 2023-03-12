import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';
import Autorization from '../autorization/autorization';
import ColorMode from '../colorMode/colorMode';
import {
  Header,
  Container,
  Main,
  SideBar,
  ContainerSidebar,
  HeaderDiv,
} from './layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header>
        <Logo />
        <HeaderDiv>
          <ColorMode />
          <Autorization />
        </HeaderDiv>
      </Header>
      <SideBar>
        <ContainerSidebar>
          <Navigation />
        </ContainerSidebar>
      </SideBar>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
