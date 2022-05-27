import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {


  return (
    <>
    <Header />
    </>
  );
}

export default App;
