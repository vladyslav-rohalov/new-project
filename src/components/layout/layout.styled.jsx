import styled from '@emotion/styled';
import { GrLanguage } from 'react-icons/gr';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export const Container = styled.div`
  flex: 1 1 0%;
  height: 100%;
`;

const commonStyle = `
position: fixed;
display: flex;
flex-direction: column;
top: 0 px;
height: 100%;
`;

export const Header = styled.header`
  ${commonStyle}
  left: 0px;
  width: 264px;
  min-width: 264px;
  background-color: #1a1a1a;
`;

export const SideBar = styled.div`
  ${commonStyle}
  right: 0;
  width: 400px;
  min-width: 400px;
  background-color: #1a1a1a;
`;

export const Main = styled.div`
  ${commonStyle}
  margin-left: 264px;
  margin-right: 400px;
  width: calc(100vw - 264px - 400px);
  background-color: #121212;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  margin: 0 auto;
  padding-top: 40px;
  width: 200px;
  height: 424px;
  color: white;
`;

export const Footer = styled.footer``;
