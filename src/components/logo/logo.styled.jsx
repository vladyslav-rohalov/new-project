import styled from '@emotion/styled';
import { GiPanda } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;
  text-decoration: none;
`;

export const LogoText = styled.p`
  font-size: 24px;
  color: white;
`;

export const LogoIcon = styled(GiPanda)`
  fill: #d4af37;
  width: 40px;
  height: 40px;
`;
