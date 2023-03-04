import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { IoIosWallet } from 'react-icons/io';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

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
  color: #747474;
  font-size: 17px;
`;

const iconStyle = `
  fill: #747474;
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

export const IconDashboard = styled(MdSpaceDashboard)`
  ${iconStyle}
`;

export const IconWallet = styled(IoIosWallet)`
  ${iconStyle}
`;

export const IconTrade = styled(MdOutlinePublishedWithChanges)`
  ${iconStyle}
`;

export const IconMarket = styled(BsCurrencyBitcoin)`
  ${iconStyle}
`;

export const IconNotification = styled(MdNotifications)`
  ${iconStyle}
`;

export const IconSettings = styled(IoMdSettings)`
  ${iconStyle}
`;
