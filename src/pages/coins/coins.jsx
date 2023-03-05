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
            placeholder="Search coins"
            onChange={handleInput}
            value={input}
          />
          <SearchIcon />
        </InputDiv>
      </FirstRow>
      <FilterList>
        <Filter type="radio" value="Blockchain" name="filter" /> Male
        <Filter type="radio" value="Defi" name="filter" /> Female
        <Filter type="radio" value="Games" name="filter" /> Other
      </FilterList>

      <table></table>
    </Container>
  );
}
