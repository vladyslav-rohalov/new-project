import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import { Container } from './App.styled';

const Coins = lazy(() => import('../pages/coins/coins'));
const Nft = lazy(() => import('../pages/nft/nft'));
const Portfolio = lazy(() => import('../pages/portfolio/portfolio'));
const Notifications = lazy(() =>
  import('../pages/notifications/notifications')
);
const Settings = lazy(() => import('../pages/settings/settings'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Coins />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
