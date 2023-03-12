import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';
import { ImFire } from 'react-icons/im';

export const Container = styled.div`
  padding: 2em 2em 1em 1em;
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
  position: relative;
  width: 280px;
  height: 32px;
  background-color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 25px;
  color: #747474;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &: focus {
    box-shadow: 0px 0px 4px 1px #d4af37;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

export const Filter = styled.button`
  width: auto;
  border-radius: 5px;
  border: none;
  background-color: #343434;
  color: #ffffff;
  font-size: 16px;
  padding: 5px 10px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px 1px #d4af37;
  }
`;
// Widget
export const WidgetContainer = styled.div`
  position: absolute;
  width: 287px;
  height: 280px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  background-color: #121212;
  box-shadow: 0px 0px 4px 1px #d4af37;
`;

export const IconFire = styled(ImFire)`
  width: 16px;
  height: 16px;
  fill: #d4af37;
`;

export const WidgetTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const WidgetTitleText = styled.h2`
  color: #ffffff;
  ont-size: 16px;
  font-weight: 400;
`;

export const WidgetList = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const WidgetItem = styled.li`
  height: 40px;
  background-color: #747474;
  border-radius: 5px;
`;

// /widget
