import {
  Nav,
  Link,
  IconPortfolio,
  IconNft,
  IconCoins,
  IconNotification,
  IconSettings,
} from './navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/" end>
        <IconCoins />
        Coins
      </Link>
      <Link to="/">
        <IconNft />
        NFT
      </Link>
      <Link to="/">
        <IconPortfolio />
        Portfolio
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
