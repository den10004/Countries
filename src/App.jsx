import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { Controls } from "./components/Controls";
import axios from "axios";
import { ALL_COUNTRIES } from "./config";
import { List } from "./components/List";
import { Card } from "./components/Card";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <HomePage countries={countries} setCountries={setCountries} />
          </Route>
          <Route path="/country/:name" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
