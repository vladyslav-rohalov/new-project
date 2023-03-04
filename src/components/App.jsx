import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import { Container } from './App.styled';

function App() {
  return (
    <Container>
      <Layout />
    </Container>
  );
}

export default App;
