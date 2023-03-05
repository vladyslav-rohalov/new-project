import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';

export const Container = styled.div`
  padding: 36px 20px 20px 20px;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
}
`;

export const Category = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  color: #ffffff;
`;

export const InputDiv = styled.div`
  position: relative;
`;

export const SearchIcon = styled(GoSearch)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  fill: black;
  width: 20px;
  height: 20px;
  fill: #747474;
  pointer-events: none;
`;

export const TextField = styled.input`
  width: 280px;
  height: 32px;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 25px;
  color: #747474;
  &: focus {
    box-shadow: 0px 0px 4px 1px #d4af37;
  }
`;

export const FilterList = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

export const Filter = styled.input`
  &:before {
    content: '';
    width: 30px;
    height: 20px;
    background-color: #ffa500;
    position: absolute;
    top: 2px;
    left: 2px;
  }
`;
