import styled from '@emotion/styled';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const IconDarkMode = styled(MdDarkMode)`
  fill: #747474;
  width: 1.5em;
  height: 1.5em;
`;

export const IconLightMode = styled(MdLightMode)`
  fill: #747474;
  width: 1.5em;
  height: 1.5em;
`;
