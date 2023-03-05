import { useState } from 'react';
// import axios from 'axios';
import {
  Container,
  FirstRow,
  Category,
  TextField,
  SearchIcon,
  InputDiv,
  FilterList,
  Filter,
  WidgetContainer,
  WidgetTitle,
  IconFire,
  WidgetTitleText,
  WidgetList,
  WidgetItem,
} from './coins.styled';

export default function Coins() {
  const [input, setInput] = useState('');
  // const [coins, setCoins] = useState();

  const handleInput = e => {
    setInput(e.target.value);
    // axios
    //   .get('https://pro-api.coingecko.com/api/v3/ping')
    //   .then(response => console.log(response))
    //   .catch(err => {
    //     throw new Error(err);
    //   });
  };

  return (
    <Container>
      <FirstRow>
        <Category>Cryptocurrencies</Category>
        <InputDiv>
          <TextField
            id="searchCoinsForm"
            name="searchCoinsForm"
            type="text"
            autocomplete="off"
            inputmode="search"
            // aria-autocomplete="list"
            // aria-controls="global-search-menu"
            // aria-labelledby="global-search-label"
            // aria-activedescendant="global-search-items-trending-47418"
            placeholder="Search coins"
            onChange={handleInput}
            value={input}
          />
          <SearchIcon />
          <WidgetContainer>
            <WidgetTitle>
              <IconFire />
              <WidgetTitleText>Trending coins</WidgetTitleText>
            </WidgetTitle>
            <WidgetList>
              <WidgetItem>pppppp</WidgetItem>
              <WidgetItem>pppppp</WidgetItem>
              <WidgetItem>pppppp</WidgetItem>
              <WidgetItem>pppppp</WidgetItem>
              <WidgetItem>pppppp</WidgetItem>
            </WidgetList>
          </WidgetContainer>
        </InputDiv>
      </FirstRow>

      <FilterList>
        <li>
          <Filter>All crypto</Filter>
        </li>
        <li>
          <Filter type="">Blockchain</Filter>
        </li>
        <li>
          <Filter>Defi</Filter>
        </li>
        <li>
          <Filter>Games</Filter>
        </li>
        <li>
          <Filter>Fun token</Filter>
        </li>
      </FilterList>

      <table></table>
    </Container>
  );
}
