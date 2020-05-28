import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./domain/Navigation/Navigation";
import { Home } from "./domain/Home";
import { Posts } from "./domain/Posts";
import NotFound from "./domain/NotFound/NotFound";
import RedirectWithStatus from "./domain/RedirectWithStatus/RedirectWithStatus";

const App = () => (
  <>
    <Navigation />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <RedirectWithStatus status={301} from="/home" to="/" />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
