import styled from '@emotion/styled';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  gap: 0.75em;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 1.2em;
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
  width: 1.5em;
  height: 1.5em;
`;

export const IconLogOut = styled(BiLogOut)`
  fill: #747474;
  width: 1.5em;
  height: 1.5em;
`;
