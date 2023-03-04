import {
  Nav,
  Link,
  IconDashboard,
  IconWallet,
  IconTrade,
  IconMarket,
  IconNotification,
  IconSettings,
} from './navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/" end>
        <IconDashboard />
        Dashboard
      </Link>
      <Link to="/">
        <IconWallet />
        Wallet
      </Link>
      <Link to="/">
        <IconTrade />
        Trade
      </Link>
      <Link to="/">
        <IconMarket />
        Market
      </Link>
      <Link to="/">
        <IconNotification />
        Notifications
      </Link>
      <Link to="/">
        <IconSettings />
        Settings
      </Link>
    </Nav>
  );
}
