import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GiPickOfDestiny } from 'react-icons/gi';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

const primaryColor = '#747474';
const accentColor = '#d4af37';

export const IconPortfolio = styled(BsBriefcaseFill)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const IconNft = styled(GiPickOfDestiny)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const IconCoins = styled(BsCurrencyBitcoin)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const IconNotification = styled(MdNotifications)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const IconSettings = styled(IoMdSettings)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${primaryColor};
  font-size: 17px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${accentColor};
  }
`;
