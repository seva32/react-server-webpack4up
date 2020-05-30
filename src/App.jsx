import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "./domain/Home";
import { Posts } from "./domain/Posts";
import NotFound from "./domain/NotFound/NotFound";
import RedirectWithStatus from "./domain/RedirectWithStatus/RedirectWithStatus";
import { LoginFormUI } from "./domain/LoginPage";
import { SignupFormUI } from "./domain/SignupPage";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={LoginFormUI} />
      <Route exact path="/signup" component={SignupFormUI} />
      <Route path="/posts" component={Posts} />
      <RedirectWithStatus status={301} from="/home" to="/" />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
