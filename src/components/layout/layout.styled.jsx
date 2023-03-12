import styled from '@emotion/styled';
// import { GrLanguage } from 'react-icons/gr';

export const Container = styled.div`
  flex: 1 1 0%;
  height: 100%;
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 3em);
  height: 5em;
  background-color: #1a1a1a;
  padding: 1em 2em 0 1em;
`;

export const HeaderDiv = styled.div`
  display: flex;
  gap: 5em;
`;

const commonStyle = `
position: fixed;
display: flex;
flex-direction: column;
top: 0 px;
height: 100%;
margin-top: 6em;
`;

export const SideBar = styled.div`
  ${commonStyle}
  left: 0px;
  width: 17em;
  min-width: 17em;
  background-color: #1a1a1a;
`;

export const Main = styled.div`
  ${commonStyle}
  overflow: hidden;
  margin-left: 17em;
  width: calc(100vw - 17em);
  background-color: #121212;
`;

export const ContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5em;
  margin: 3em 0em 0em 1em;
  color: white;
`;
