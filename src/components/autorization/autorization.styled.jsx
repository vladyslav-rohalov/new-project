import styled from '@emotion/styled';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 17px;
  background-color: transparent;
  color: #747474;
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #d4af37;
  }
`;

export const IconLogIn = styled(BiLogIn)`
  fill: #747474;
  width: 24px;
  height: 24px;
`;

export const IconLogOut = styled(BiLogOut)`
  fill: #747474;
  width: 24px;
  height: 24px;
`;
