import GameCard from "components/GameCard/GameCard";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/cart" component={GameCard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
